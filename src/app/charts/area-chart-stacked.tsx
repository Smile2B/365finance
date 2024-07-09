"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
// import { Transaction, aggregateData, filterData, filters } from "../page";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Transaction, aggregateData, filterData, filters } from "@/lib/utils";

const chartConfig = {
  expense: {
    label: "Expense",
    color: "hsl(var(--chart-2))"
  },
  income: {
    label: "Income",
    color: "hsl(var(--chart-1))"
  }
} satisfies ChartConfig;
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric"
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export function AreaChartStacked({ data }: { data: Transaction[] }) {
  const [selectedFilter, setSelectedFilter] = useState<string>("7D");
  const filteredData = useMemo(
    () => filterData(data, selectedFilter),
    [data, selectedFilter]
  );

  const chartData = aggregateData(filteredData);
  return (
    <Card className="p-2">
      <div className="flex gap-3  flex-wrap ">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={selectedFilter === filter ? "default" : "outline"}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>
      <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(date) => formatDate(date)}
            />
            <YAxis
              //   dataKey="date"
              //   tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              type="linear"
              dataKey="income"
              fill="var(--color-income)"
              stroke="var(--color-income)"
              fillOpacity={0.4}
              stackId="a"
            />
            <Area
              type="linear"
              dataKey="expense"
              fill="var(--color-expense)"
              fillOpacity={0.4}
              stroke="var(--color-expense)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
