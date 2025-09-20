import { IconChartLine } from "@tabler/icons-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { TopG } from "./TopGainer";

export function TopGainersCard() {
  return (
    <Card className="border rounded-2xl p-4 pl-0">
      <CardHeader>
        <CardTitle >
          <div className="h-[55px] text-2xl font-medium flex flex-row py-3">
            <span className="flex gap-2 pl-4">
              Top Gainers
              <IconChartLine color="#5BB387" className="w-8 h-8"></IconChartLine>
            </span>
          </div>
        </CardTitle>
        <CardDescription>

        </CardDescription>
        <hr className="ml-4" />
        <div className="pt-3 grid grid-cols-2 gap-12">
        </div>
        <CardContent>
          <TopG name="eth" price={40000} change={24.4} img="https://upload.wikimedia.org/wikipedia/commons/7/70/Ethereum_logo.svg" />
        </CardContent>
      </CardHeader>
    </Card>
  );
}
