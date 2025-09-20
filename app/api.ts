const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.coingecko.com/api/v3/";
let allCoins: multipleCoinInfo[];

interface IcoinInfo {
  id: string;
  name: string;
}

interface multipleCoinInfo extends IcoinInfo {
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  high_24h: number;
  low_24h: number;
}

export interface singleCoinInfo extends IcoinInfo {
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
  allCoins.sort((a: multipleCoinInfo, b: multipleCoinInfo) => a.price_change_percentage_24h - b.price_change_percentage_24h);
}

export async function getTopGainers() {
  allCoins.sort((a: multipleCoinInfo, b: multipleCoinInfo) => b.price_change_percentage_24h - a.price_change_percentage_24h);
}
