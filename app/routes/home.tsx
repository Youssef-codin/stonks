import type { Route } from "./+types/home.tsx";
import { HomeSideBar } from "~/components/home/HomeSidebar.js";
import { getRates } from "~/api.js";

export async function clientLoader() {
  // const bitcoinRate = await getRates("bitcoin");
  // console.log(bitcoinRate);
  //
  // return bitcoinRate;
}

export default function home({ loaderData }: Route.ComponentProps) {

  return (
    <HomeSideBar />
  );
}
