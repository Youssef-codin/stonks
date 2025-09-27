const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.coingecko.com/api/v3/";
let allCoins: multipleCoinInfo[];

interface coinInfo {
  id: string;
  name: string;
}

export interface multipleCoinInfo extends coinInfo {
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  high_24h: number;
  low_24h: number;
}

export interface singleCoinInfo extends coinInfo {
  image: {
    thumb: string;
    small: string;
    large: string;
  },

  market_cap_rank: number;

  market_data: {
    current_price: {
      usd: number;
    },

    price_change_percentage_24h: number,

    high_24h: {
      usd: number;
    },

    low_24h: {
      usd: number;
    },

    market_cap: {
      usd: number;
    },

    total_volume: {
      usd: number;
    }

    max_supply: number;
    circulating_supply: number;
    sparkline_7d: {
      price: number[];
    },
  };
}

export interface PricePoint {
  date: number,
  price: number
}

export async function getCoinData(coinName: string): Promise<singleCoinInfo> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': API_KEY
    }
  };

  try {

    const res = await fetch(BASE_URL + `coins/${coinName}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true&dex_pair_format=contract_address`, options);

    if (!res.ok) {
      throw new Response(`API Error: ${res.status} ${res.statusText}`, { status: res.status });
    }

    const data: singleCoinInfo = await res.json();

    return data;

  } catch (err) {
    throw new Response("Network error", { status: 500 });

  }
}

type ChartResponse = [number, number];

export function filterMonthly(prices: ChartResponse[]): PricePoint[] {
  const seenMonths = new Set<string>()
  const monthly: PricePoint[] = []

  for (const [ts, price] of prices) {
    const d = new Date(ts)
    const key = `${d.getUTCFullYear()}-${d.getUTCMonth()}`

    if (!seenMonths.has(key)) {
      monthly.push({ date: ts, price })
      seenMonths.add(key)
    }
  }

  return monthly.slice(0, 5);
}

export async function getCoinChartData(coinName: string): Promise<PricePoint[]> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': API_KEY
    }
  };

  try {

    const res = await fetch(BASE_URL + `coins/${coinName}/market_chart?vs_currency=usd&days=180`, options);

    if (!res.ok) {
      throw new Response(`API Error: ${res.status} ${res.statusText}`, { status: res.status });
    }

    const data: ChartResponse[] = await res.json().then(res => res.prices);
    const monthlyData = filterMonthly(data)

    return monthlyData;

  } catch (err) {
    throw new Response("Network error", { status: 500 });
  }
}

export async function getAllData() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': API_KEY
    }
  };

  try {
    const res = await fetch(BASE_URL + 'coins/markets?vs_currency=usd&include_tokens=top&order=market_cap_desc&per_page=250&price_change_percentage=24h&precision=2', options)

    if (!res.ok) {
      throw new Response(`API Error: ${res.status} ${res.statusText}`, { status: res.status });
    }
    const data = await res.json();

    allCoins = data.map((coin: multipleCoinInfo) => coin);

  } catch (err) {
    throw new Response("Network error", { status: 500 });
  }
}

export async function getTopLosers() {
  return allCoins.sort((a: multipleCoinInfo, b: multipleCoinInfo) =>
    a.price_change_percentage_24h - b.price_change_percentage_24h)
    .slice(0, 5);
}

export async function getTopGainers() {
  return allCoins.sort((a: multipleCoinInfo, b: multipleCoinInfo) =>
    b.price_change_percentage_24h - a.price_change_percentage_24h)
    .slice(0, 5);
}
