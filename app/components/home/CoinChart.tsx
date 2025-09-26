import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "../ui/chart"
import type { ChartCardPropsType } from "./Cards/ChartCard"
import type { PricePoint } from "~/api"

function formatMonthYear(timestamp: number): string {
  const d = new Date(timestamp)
  return d.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })
}

interface displayDataType {
  date: string,
  price: number
}

export function CoinChart({ data }: { data: PricePoint[] }) {

  const displayData: displayDataType[] = data.map(p => { return { date: formatMonthYear(p.date), price: p.price } });

  const chartConfig = {
    price: {
      label: "Price",
      color: "#f74358",
    },
  } satisfies ChartConfig

  //TODO: add chart tool tip

  return (
    <ChartContainer config={chartConfig} className="w-full h-80 col-span-2 relative">
      <LineChart data={displayData} >
        <CartesianGrid vertical={false} />
        <Line type="linear" dataKey="price" fill="#f74358" stroke="#f74358" />
        <XAxis
          dataKey="date"
          tickLine={true}
          tickMargin={10}
          allowDuplicatedCategory={false}
          axisLine={true}
        />
        <YAxis dataKey="price" tickLine={true} domain={[60000, "auto"]} />
        {/* <ChartTooltip content={<ChartTooltipContent />} /> */}

        <Legend />
      </LineChart>
    </ChartContainer>
  )
}
