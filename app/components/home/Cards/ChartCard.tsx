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
    <Card className="border rounded-2xl col-span-2 p-4">
      <CardHeader>
        <CardTitle className="text-3xl font-medium">
          <span className="flex gap-x-2 pb-1">
            <img className="w-10 h-10 mr-2" src="/bitcoin-btc-logo.svg" />
            {ChartCardProps.title} price
          </span>
        </CardTitle>
        <CardAction>
          <Button variant="link" className="cursor-pointer">More Details</Button>
        </CardAction>
        <CardDescription className="text-[var(--text)]">Feb-Apr USD</CardDescription>
      </CardHeader>
      <CardContent>
        <CoinChart data={ChartCardProps.prices} />
      </CardContent>
    </Card >
  );
}
