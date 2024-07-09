import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//

// utils.ts

export type Transaction = {
  label: string;
  note: string;
  category: string;
  type: "income" | "expense";
  amount: number;
  date: string;
};

export type AggregatedData = {
  date: string;
  income: number;
  expense: number;
  category: string;
}[];

export function aggregateData(data: Transaction[]): AggregatedData {
  const result: {
    [key: string]: { income: number; expense: number; category: string };
  } = {};

  data.forEach((item) => {
    const date = item.date;
    if (!result[date]) {
      result[date] = { income: 0, expense: 0, category: item.category };
    }
    if (item.type === "income") {
      result[date].income += item.amount;
    } else {
      result[date].expense += item.amount;
    }
  });

  return Object.entries(result).map(
    ([date, { income, expense, category }]) => ({
      date,
      income,
      expense,
      category
    })
  );
}

export const filters = ["7D", "1M", "6M", "1Y", "All"];

export function filterData(data: Transaction[], filter: string): Transaction[] {
  const now = new Date();
  let startDate;

  switch (filter) {
    case "7D":
      startDate = new Date(now.setDate(now.getDate() - 7));
      break;
    case "1M":
      startDate = new Date(now.setMonth(now.getMonth() - 1));
      break;
    case "6M":
      startDate = new Date(now.setMonth(now.getMonth() - 6));
      break;
    case "1Y":
      startDate = new Date(now.setFullYear(now.getFullYear() - 1));
      break;
    case "All":
      startDate = new Date(0);
      break;
    default:
      startDate = new Date(0);
  }

  return data
    .filter((item) => new Date(item.date) >= startDate)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
