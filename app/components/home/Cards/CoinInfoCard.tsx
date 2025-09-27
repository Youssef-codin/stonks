import { IconArrowUp, IconChartCandle, IconChartHistogram, IconDeviceDesktopAnalytics } from "@tabler/icons-react";
import type { singleCoinInfo } from "~/api";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function formatCurrencyCompact(value: number, currency: string = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function CoinInfoCard({ stats }: { stats: singleCoinInfo }) {

  return (
    <Card className="border rounded-2xl p-4">
      <CardHeader>
        <CardTitle >
          <div className="h-[70px] text-3xl font-medium flex flex-row justify-center py-3">
            <span className="flex gap-1">
              <IconChartHistogram className="w-10 h-10" />
              Market Stats
            </span>
          </div>
        </CardTitle>
        <hr />
        <div className="pt-3 grid grid-cols-2 gap-12">
          <div>
            <div className="text-md font-normal text-[var(--text)]">Current Price</div>
            <div className="text-xl font-normal">{formatCurrencyCompact(stats.market_data.current_price.usd)}</div>
          </div>
          <div>
            <div className="text-md font-normal text-[var(--text)]">24h price change</div>
            <div className="text-xl font-normal ">
              <span className="flex"><IconArrowUp color="#5BB387" />
                {Math.floor(stats.market_data.price_change_percentage_24h * 100)}%
              </span>
            </div>
          </div>
          <div>
            <span className="text-md font-normal text-[var(--text)]">24h high/low</span>
            <span className="flex">
              <span className="text-[var(--success)] text-xl">
                {formatCurrencyCompact(stats.market_data.high_24h.usd)}</span> /
              <span className="text-[var(--danger)] text-xl">
                {formatCurrencyCompact(stats.market_data.low_24h.usd)}
              </span>
            </span>
          </div>
          <div>
            <span className="text-md font-normal text-[var(--text)]">Market Cap</span>
            <span className="flex">
              <span className="text-xl font-normal ">{formatCurrencyCompact(stats.market_data.market_cap.usd)} - Rank {stats.market_cap_rank}</span>
            </span>
          </div>
          <div>
            <span className="text-md font-normal text-[var(--text)]">Total Volume</span>
            <span className="flex">
              <span className="text-xl font-normal ">{formatCurrencyCompact(stats.market_data.total_volume.usd)}</span>
            </span>
          </div>
          <div>
            <span className="text-md font-normal text-[var(--text)]">Circulating / Max supply</span>
            <span className="flex">
              <span className="text-xl font-normal ">{Math.floor((stats.market_data.circulating_supply / stats.market_data.max_supply) * 100)}%</span>
            </span>
          </div>
        </div>
        <CardContent>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
