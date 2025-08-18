import { CoinChart } from "./CoinChart";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import { Button } from "../ui/button";

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[370px] gap-y-4 gap lg:grid-cols-3 lg:grid-rows-[450px_auto] 
      lg:gap-x-16 lg:gap-y-10 bottom-1 h-screen w-full 
      overflow-y-scroll md:overflow-y-auto md:rounded-tl-2xl border border-transparent border-t-neutral-200 bg-white 
      pl-4 pt-2 pr-4 md:pl-24 md:pt-10 md:pr-15 md:pb-24 dark:border-t-neutral-700 dark:bg-neutral-900">

      <Card className="bg-transparent border border-gray-50 rounded-2xl col-span-2 p-4">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            <span className="flex gap-x-2 pb-1">
              <img className="w-10 h-10" src="/bitcoin-btc-logo.svg" />
              BTC price
            </span>
          </CardTitle>
          <CardAction>
            <Button variant="link" className="cursor-pointer">More Details</Button>
          </CardAction>
          <CardDescription>Feb-Apr USD</CardDescription>
        </CardHeader>
        <CardContent>
          <CoinChart />
        </CardContent>
      </Card >
      <div className="bg-red-500 "></div>
      <div className="bg-fuchsia-500 "></div>
      <div className="bg-emerald-300 "></div>
      <div className="bg-rose-500 "></div>
    </div>
  );
};
