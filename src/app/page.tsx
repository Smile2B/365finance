"use client";
import {  Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Transaction } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
//Data in USse
const data = [
  {
    transactionID: "1",
    date: "2024-05-06",
    description: "Square Payments 9866767635234",
    amount: "51678.00",
    category: "Payments Processor",
    subCategory: "Square Limited",
    merchant: "Square Limited",
    catStatus: "Manual",
    type: "Credits Only",
  },
  {
    transactionID: "2",
    date: "2023-03-07",
    description: "Square Payments TTTTT",
    amount: "11111.00",
    category: "Payments Processor",
    subCategory: "Square Limited",
    merchant: "Square Limited",
    catStatus: "Automatic",
    type: "Debits Only",
  },
  {
    transactionID: "3",
    date: "2023-05-04",
    description: "Square Payments BBBBDDDD",
    amount: "14555.00",
    category: "Payments Processor",
    subCategory: "Square Limited",
    merchant: "Square Limited",
    catStatus: "Automatic",
    type: "Debits Only",
  },
  {
    transactionID: "4",
    date: "2023-06-09",
    description: "Square Payments AAA",
    amount: "41333.00",
    category: "Square",
    subCategory: "Square Limited",
    merchant: "Square Limited",
    catStatus: "Manual",
    type: "Credits Only",
  },
  {
    transactionID: "5",
    date: "2023-09-11",
    description: "Square Payments BBB",
    amount: "17.00",
    category: "Barclys Processor",
    subCategory: "Square Limited",
    merchant: "Square Limited",
    catStatus: "Automatic",
    type: "Debits Only",
  },
  {
    transactionID: "6",
    date: "2023-02-09",
    description: "Square Payments SSS",
    amount: "41333.00",
    category: "Square",
    subCategory: "Square Limited",
    merchant: "Square Limited",
    catStatus: "Manual",
    type: "Credits Only",
  },
  {
    transactionID: "7",
    date: "2023-09-10",
    description: "Square Payments 4332221",
    amount: "17.00",
    category: "Barclys Processor",
    subCategory: "Square Limited",
    merchant: "Square Limited",
    catStatus: "Automatic",
    type: "Credits Only",
  },
  {
    transactionID: "8",
    date: "2023-03-09",
    description: "Square Payments 542222",
    amount: "41333.00",
    category: "Square",
    subCategory: "Square Limited",
    merchant: "Square Limited",
    catStatus: "Manual",
    type: "Credits Only",
  },
  {
    transactionID: "9",
    date: "2023-01-10",
    description: "Square Payments 988888",
    amount: "17.00",
    category: "Barclys Processor",
    subCategory: "Square Limited",
    merchant: "Square Limited",
    catStatus: "Automatic",
    type: "Credits Only",
  },
];


const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("date")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Description
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "subCategory",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Sub Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("subCategory")}</div>
    ),
  },
  {
    accessorKey: "merchant",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Merchant
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("merchant")}</div>
    ),
  },
  {
    accessorKey: "catStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cat Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("catStatus")}</div>
    ),
  },

  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          type
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },

    cell: ({ row }) => <div className="lowercase">{row.getValue("type")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy customer ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer info</DropdownMenuItem>
            <DropdownMenuItem>Edit Categorisation</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export type Payment = {
  id: string;
  amount: number;
  type: string;

  email: string;
};



// my data


// These function are moved to utils
// Transaction, aggregateData, filterData
// Main component
const formatDate = (dateString: string) => {
  const options = { year: "2-digit", month: "short" };
  return new Date(dateString).toLocaleDateString("en-UK", options);
};

// Extract unique months and years from the data
const getUniqueMonths = (data: typeof data) => {
  const monthsSet = new Set(
    data.map((item) => formatDate(item.date))
  );
  return Array.from(monthsSet).sort((a, b) => new Date(`01-${a}`) - new Date(`01-${b}`)); // Sort by date
};
  // Extract unique months and years from the data


export default function Home() {
  const uniqueMonths = getUniqueMonths(data);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const { setTheme } = useTheme();

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="">
      <header className="h-14  bg-background px-4 lg:px-6 ">
        <div className=" flex justify-end items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
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
        </div>
        <h1 className="flex justify-center  align-middle text-2xl">
          365 Finance
        </h1>
      </header>
      <div className="container p-20 ">
        <div className="space-y-1">
          <h3 className="text-sm font-medium leading-none">Filter By Type</h3>
        </div>
        <Separator className="my-4" />
        <div className="grid justify-items-start  p-10">
          <div>
            <ToggleGroup
              type="single"
              value={
                (table.getColumn("type")?.getFilterValue() as string) ?? ""
              }
              onValueChange={(value) =>
                table
                  .getColumn("type")
                  ?.setFilterValue(value === "all" ? null : value)
              }
            >
              <ToggleGroupItem value="Credits Only">Credits Only</ToggleGroupItem>
              <ToggleGroupItem value="Debits Only">Debits Only</ToggleGroupItem>
              <ToggleGroupItem defaultChecked value="all">All Transactions</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <ToggleGroup type="single">
              <ToggleGroupItem value="Categorised">Categorised</ToggleGroupItem>
              <ToggleGroupItem value="Uncategorised">
                Uncategorised
              </ToggleGroupItem>
              <ToggleGroupItem value="Transactions">
                All Transactions
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <div>
          <div className="space-y-1">
            <h3 className="text-sm font-medium leading-none">
              Filter By Keywords
            </h3>
          </div>
          <Separator className="my-4" />
        </div>
        <div className="flex items-center gap-3.5  p-10">
          <div className="p-4">
            {" "}
            <Label htmlFor="">Contains</Label>
            <Input
              type=""
              id="Contains"
              placeholder="Sqauare"
              value={
                (table.getColumn("description")?.getFilterValue() as string) ??
                ""
              }
              onChange={(event) =>
                table
                  .getColumn("description")
                  ?.setFilterValue(event.target.value)
              }
            />
          </div>
          <div className="p-4">
            {" "}
            <Label htmlFor="">Do Not Contain</Label>
            <Input type="" id="NotContain" placeholder="Canada Sqauare" />
          </div>
          <div className="p-4">
            {" "}
            <Label htmlFor="">Start with</Label>
            <Input type="" id="Startwith" placeholder="" />
          </div>
          <div className="p-4">
            {" "}
            <Label htmlFor="">End with</Label>
            <Input type="" id="Endwith" placeholder="" />
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium leading-none">
            Filter By Payment Processor
          </h3>
        </div>
        <Separator className="my-4" />

        <div className="grid justify-items-start  p-10">
          <ToggleGroup type="single">
            <ToggleGroupItem value="FDMS">FDMS</ToggleGroupItem>
            <ToggleGroupItem value="Stripe">Stripe</ToggleGroupItem>
            <ToggleGroupItem value="Barclaycard">Barclaycard</ToggleGroupItem>
            <ToggleGroupItem value="All">All Transactions</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium leading-none">Filter By Month</h3>
        </div>
        <Separator className="my-4" />
        <div className="grid justify-items-start  p-10">
        <ToggleGroup type="single">
          {uniqueMonths.map((month, index) => (
            <ToggleGroupItem key={index} value={month}>
              {month}
            </ToggleGroupItem>
          ))}
          <ToggleGroupItem value="all">All Transactions</ToggleGroupItem>
        </ToggleGroup>
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-medium leading-none">
            Filtered Transactions
          </h3>
        </div>
        <Separator className="my-4" />

        <Separator className="my-4" />

        <div className="w-full">
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter category..."
              value={
                (table.getColumn("category")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("category")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
