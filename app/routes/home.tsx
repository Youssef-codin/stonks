import { getRates as getRate } from "~/api";
import type { Route } from "./+types/home.tsx";
import { HomeSideBar } from "~/components/homeSidebar.js";

export async function clientLoader() {
  const bitcoinRate = await getRate("bitcoin");
  console.log(bitcoinRate);

  return bitcoinRate;
}

export default function home({ loaderData }: Route.ComponentProps) {

  return (
    <>
      <HomeSideBar />
    </>
  );
}
