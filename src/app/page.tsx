import { AreaChartStacked } from "./charts/area-chart-stacked";
import { BarChartMultiple } from "./charts/bar-chart-multiple";
import { LineChartInteractive } from "./charts/line-chart-interactive";
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
  return (
    <div className="p-8 flex flex-col gap-5">
      <h2 className="text-2xl">Charts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 ">
        <AreaChartStacked data={data} />
        <BarChartMultiple data={data} />
      </div>
      <LineChartInteractive />
    </div>
  );
}
