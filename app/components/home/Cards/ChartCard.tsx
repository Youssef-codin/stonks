import { Button } from "~/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { CoinChart } from "../CoinChart";
import type { PricePoint } from "~/api";

export interface ChartCardPropsType {
  title: string,
  prices: Array<PricePoint>
}

export function ChartCard({ ChartCardProps }: { ChartCardProps: ChartCardPropsType }) {

  return (
    <Card className="border rounded-2xl md:col-span-2 p-4">
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <CardTitle className="text-2xl md:text-3xl font-medium">
            <span className="flex items-center gap-x-2 pb-1">
              <img className="w-8 h-8 md:w-10 md:h-10 mr-2" src="/bitcoin-btc-logo.svg" />
              {ChartCardProps.title} price
            </span>
          </CardTitle>
          <CardDescription className="text-[var(--text)]">Feb-Apr USD</CardDescription>
        </div>
        <CardAction>
          <Button variant="link" className="cursor-pointer mt-2 md:mt-0">More Details</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CoinChart data={ChartCardProps.prices} />
      </CardContent>
    </Card >
  );
}
