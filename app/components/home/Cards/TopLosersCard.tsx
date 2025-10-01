import { IconGraphOff } from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import { TopCell } from "./TopCell";
import type { multipleCoinInfo } from "~/api";

export function TopLosersCard({ stats }: { stats: multipleCoinInfo[] }) {
  return (
    <Card className="border rounded-2xl">
      <CardHeader>
        <CardTitle>
          <div className="h-[55px] text-2xl font-medium flex flex-row py-3">
            <span className="flex gap-2 pl-4">
              <IconGraphOff color="#DF8177" className="w-8 h-8"></IconGraphOff>
              Top Losers
            </span>
          </div>
        </CardTitle>
        <CardContent className="px-1">
          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="border-[var(--border-muted)]">
                  <TableHead className="w-[1%] text-[var(--text-muted)] hidden md:table-cell">Rank</TableHead>
                  <TableHead className="w-[1%] text-[var(--text-muted)] hidden md:table-cell">Icon</TableHead>
                  <TableHead className="text-[var(--text-muted)]">Name</TableHead>
                  <TableHead className="text-right text-[var(--text-muted)]">Change %</TableHead>
                  <TableHead className="text-right text-[var(--text-muted)]">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats.map((coin: multipleCoinInfo, index: number) => (
                  <TopCell
                    key={coin.name}
                    rank={index + 1}
                    icon={coin.image}
                    name={coin.name}
                    price={coin.current_price}
                    change={coin.price_change_percentage_24h}
                  />
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
