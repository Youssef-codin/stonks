import { CoinInfoCard } from "./Cards/CoinInfoCard";
import { ChartCard, type ChartCardPropsType } from "./Cards/ChartCard";
import { TopGainersCard } from "./Cards/TopGainersCard";
import type { singleCoinInfo } from "~/api";

export function Dashboard({ bitcoinData, bitcoinChartData }: { bitcoinData: singleCoinInfo, bitcoinChartData: ChartCardPropsType }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[370px] gap-y-4 gap lg:grid-cols-3 lg:grid-rows-[450px_auto] 
      lg:gap-x-16 lg:gap-y-10 bottom-1 h-screen w-full overflow-y-scroll md:overflow-y-auto md:rounded-tl-2xl 
       pl-4 pt-2 pr-4 md:pl-24 md:pt-10 md:pr-15 md:pb-24 border border-t-neutral-200 bg-[var(--bg)]">

      <ChartCard ChartCardProps={bitcoinChartData} />
      <CoinInfoCard stats={bitcoinData} />
      <TopGainersCard />
      <TopGainersCard />
      <TopGainersCard />
    </div>
  );
};
