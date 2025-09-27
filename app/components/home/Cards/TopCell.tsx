import { TableCell, TableRow } from "~/components/ui/table";
import { formatCurrencyCompact } from "./CoinInfoCard";

export function TopCell({ rank, icon, name, change, price }:
  { rank: number, icon: string, name: string, change: number, price: number }) {

  return (
    <TableRow className="border-[var(--border-muted)]">
      <TableCell className="text-center">{rank}</TableCell>
      <TableCell>
        <img className="w-6 h-6" src={icon} />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell className={`text-right ${change > 0 ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
        {change}%
      </TableCell>
      <TableCell className="text-right">{formatCurrencyCompact(price)}</TableCell>
    </TableRow >
  );
}

