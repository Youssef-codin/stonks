import { CoinInfoCard } from "./Cards/CoinInfoCard";
import { ChartCard, type ChartCardPropsType } from "./Cards/ChartCard";
import { TopGainersCard } from "./Cards/TopGainersCard";
import type { multipleCoinInfo, singleCoinInfo } from "~/api";
import { TopLosersCard } from "./Cards/TopLosersCard";
import { StonksCard } from "./Cards/StonksCard";

export function Dashboard({ bitcoinData, bitcoinChartData, TopGainersList, TopLosersList }: { bitcoinData: singleCoinInfo, bitcoinChartData: ChartCardPropsType, TopGainersList: multipleCoinInfo[], TopLosersList: multipleCoinInfo[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 lg:gap-8 lg:p-10 w-full md:overflow-y-auto md:rounded-tl-2xl border-t border-border bg-background">

      <ChartCard ChartCardProps={bitcoinChartData} />
      <CoinInfoCard stats={bitcoinData} />
      <TopGainersCard stats={TopGainersList} />
      <TopLosersCard stats={TopLosersList} />
      <StonksCard />
    </div>
  );
};
