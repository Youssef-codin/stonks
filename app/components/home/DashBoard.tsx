import { CoinInfoCard } from "./Cards/CoinInfoCard";
import { ChartCard } from "./Cards/ChartCard";

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[370px] gap-y-4 gap lg:grid-cols-3 lg:grid-rows-[450px_auto] 
      lg:gap-x-16 lg:gap-y-10 bottom-1 h-screen w-full overflow-y-scroll md:overflow-y-auto md:rounded-tl-2xl 
      border border-transparent border-t-neutral-200 bg-white pl-4 pt-2 pr-4 md:pl-24 md:pt-10 md:pr-15 md:pb-24 
      dark:border-t-neutral-700 dark:bg-neutral-900">

      <ChartCard />
      <CoinInfoCard currentPrice={84003} />
      <div className="bg-fuchsia-500 "></div>
      <div className="bg-emerald-300 "></div>
      <div className="bg-rose-500 "></div>
    </div>
  );
};
