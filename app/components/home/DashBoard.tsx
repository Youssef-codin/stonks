import { CoinInfoCard } from "./Cards/CoinInfoCard";
import { ChartCard, type ChartCardPropsType } from "./Cards/ChartCard";
import { TopGainersCard } from "./Cards/TopGainersCard";
import type { multipleCoinInfo, singleCoinInfo } from "~/api";
import { TopLosersCard } from "./Cards/TopLosersCard";
import { StonksCard } from "./Cards/StonksCard";

export function Dashboard({ bitcoinData, bitcoinChartData, TopGainersList, TopLosersList }: { bitcoinData: singleCoinInfo, bitcoinChartData: ChartCardPropsType, TopGainersList: multipleCoinInfo[], TopLosersList: multipleCoinInfo[] }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[370px] gap-y-4 gap lg:grid-cols-3 lg:grid-rows-[450px_auto] 
      lg:gap-x-12 lg:gap-y-10 bottom-1 h-screen w-full overflow-y-scroll md:overflow-y-auto md:rounded-tl-2xl 
       pl-4 pt-2 pr-4 md:pl-18 md:pt-10 md:pr-15 md:pb-24 border border-t-neutral-200 bg-[var(--bg)]">

      <ChartCard ChartCardProps={bitcoinChartData} />
      <CoinInfoCard stats={bitcoinData} />
      <TopGainersCard stats={TopGainersList} />
      <TopLosersCard stats={TopLosersList} />
      <StonksCard />
    </div>
  );
};
