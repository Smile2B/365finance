"use client"
import { AreaChartStacked } from "./charts/area-chart-stacked";
import { BarChartMultiple } from "./charts/bar-chart-multiple";
import { LineChartInteractive } from "./charts/line-chart-interactive";
import { BarChart, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Transaction } from "@/lib/utils";

// These function are moved to utils
// Transaction, aggregateData, filterData

const data: Transaction[] = [
  {
    label: "salary",
    note: "monthly salary",
    category: "income",
    type: "income",
    amount: 850,
    date: "2024-07-06"
  },
  {
    label: "groceries",

    note: "weekly grocery shopping",
    category: "food",
    type: "expense",
    amount: 250,
    date: "2024-07-05"
  },
  {
    label: "electricity bill",
    note: "monthly electricity bill",
    category: "utilities",
    type: "expense",
    amount: 150,
    date: "2024-07-04"
  },
  {
    label: "freelance work",
    note: "payment for freelance project",
    category: "income",
    type: "income",
    amount: 700,
    date: "2024-07-03"
  },
  {
    label: "rent",
    note: "monthly rent payment",
    category: "housing",
    type: "expense",
    amount: 900,
    date: "2024-07-02"
  },
  {
    label: "gym membership",
    note: "monthly gym fee",
    category: "health",
    type: "expense",
    amount: 120,
    date: "2024-07-01"
  },
  {
    label: "restaurant",
    note: "dinner at a restaurant",
    category: "food",
    type: "expense",
    amount: 175,
    date: "2024-06-30"
  },
  {
    label: "internet bill",
    note: "monthly internet bill",
    category: "utilities",
    type: "expense",
    amount: 140,
    date: "2024-06-29"
  },
  {
    label: "transport",
    note: "public transport pass",
    category: "transport",
    type: "expense",
    amount: 130,
    date: "2024-06-28"
  },
  {
    label: "office supplies",
    note: "stationery items for office",
    category: "work",
    type: "expense",
    amount: 120,
    date: "2024-06-27"
  },
  {
    label: "concert tickets",
    note: "tickets for a concert",
    category: "entertainment",
    type: "expense",
    amount: 300,
    date: "2024-06-26"
  },
  {
    label: "car maintenance",
    note: "annual car servicing",
    category: "transport",
    type: "expense",
    amount: 400,
    date: "2024-06-25"
  },
  {
    label: "book purchase",
    note: "buying a new book",
    category: "education",
    type: "expense",
    amount: 110,
    date: "2024-06-24"
  },
  {
    label: "movie night",
    note: "tickets for a movie",
    category: "entertainment",
    type: "expense",
    amount: 150,
    date: "2024-06-23"
  },
  {
    label: "gift",
    note: "birthday gift for a friend",
    category: "gifts",
    type: "expense",
    amount: 200,
    date: "2024-06-22"
  },
  {
    label: "gift",
    note: "birthday gift for a friend",
    category: "gifts",
    type: "expense",
    amount: 180,
    date: "2024-06-21"
  }
];
export default function Home() {
  const { setTheme } = useTheme()
  return (
    <div className=""> <header className="flex h-14 justify-end items-center bg-background px-4 lg:px-6"><DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme BBBBB</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem onClick={() => setTheme("light")}>
        Light
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("dark")}>
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("system")}>
        System
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu> 
  </header>
      <h2 className="text-2xl">Charts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 ">
        <AreaChartStacked data={data} />
        <BarChartMultiple data={data} />
      </div>
      <LineChartInteractive />
    </div>
  );
}
