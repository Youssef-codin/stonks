import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "../ui/chart"

export function CoinChart() {
  const data = [
    { monthDay: "Feb 1st", price: 94028 },
    { monthDay: "Feb 14th", price: 80329 },
    { monthDay: "Mar 1st", price: 92912 },
    { monthDay: "Mar 14th", price: 84582 },
    { monthDay: "Apr 1st", price: 82112 },
    { monthDay: "Apr 19th", price: 84003 },
  ]

  const chartConfig = {
    price: {
      label: "Price",
      color: "#f74358",
    },
  } satisfies ChartConfig

  //TODO: add chart tool tip
  return (
    <ChartContainer config={chartConfig} className="w-full h-80 col-span-2 relative">
      <LineChart data={data} >
        <CartesianGrid vertical={false} />
        <Line type="linear" dataKey="price" fill="#f74358" stroke="#f74358" />
        <XAxis
          dataKey="monthDay"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <YAxis dataKey="price" tickLine={true} domain={[50000, "auto"]} />
        {/* <ChartTooltip content={<ChartTooltipContent />} /> */}

        <Legend />
      </LineChart>
    </ChartContainer>
  )
}
