const API_KEY = import.meta.env.VITE_API_KEY;

async function getAllData(coin: string) {
  const res = await fetch(`https://rest.coincap.io/v3/rates?ids=${coin}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  });

  if (!res.ok) throw new Response("404 not found", { status: 404 })
  const jsonData = await res.json();

  console.log(jsonData.data[0])
  return jsonData.data[0];
}

export async function getRates(coin: string) {
  return getAllData(coin).then(data => data.getUsd);

}
