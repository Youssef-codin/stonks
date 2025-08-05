import { getRates } from "~/data";
import type { Route } from "../+types/root";

export async function clientLoader() {
  const bitcoinRate = getRates("bitcoin");
  return bitcoinRate;
}

export default function home({ loaderData }: Route.ComponentProps) {

  return (
    <div>
      <h1>{loaderData}</h1>
    </div>
  );
}
