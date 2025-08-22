import { IconArrowUp, IconChartCandle, IconDeviceDesktopAnalytics } from "@tabler/icons-react";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export function CoinInfoCard({ currentPrice }: { currentPrice: number }) {

  return (
    <Card className="bg-transparent border border-gray-50 rounded-2xl p-4">
      <CardHeader>
        <CardTitle >
          <div className="h-[70px] text-3xl font-medium flex flex-row justify-center py-3">
            <span className="flex gap-1">
              <IconDeviceDesktopAnalytics className="w-10 h-10" />
              Market Stats
            </span>
          </div>
        </CardTitle>
        <hr />
        <div className="pt-3 grid grid-cols-2 gap-8">
          <div>
            <div className="text-md font-normal text-gray-400">Current price</div>
            <div className="text-xl font-normal">$84,003</div>
          </div>
          <div>
            <div className="text-md font-normal text-gray-400">24h price change</div>
            <div className="text-xl font-normal "><span className="flex"><IconArrowUp color="#5BB387" />35%</span></div>
          </div>
          <div>
            <span className="text-md font-normal text-gray-400">24h high / 24h low</span>
            <span className="flex">
              <span className="text-[var(--success)]">$89,932</span> / <span className="text-[var(--danger)]">$78,293</span>
            </span>
          </div>
        </div>
        <CardContent>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
