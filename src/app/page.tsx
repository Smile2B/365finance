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
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Transaction } from "@/lib/utils";
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as React from "react"
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
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

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
    header: "Date",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("date")}</div>
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
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("description")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
 
      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GBP",
      }).format(amount)
 
      return <div className="text-right font-medium">{formatted}</div>
    },
  },{
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
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("category")}</div>,
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
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("subCategory")}</div>,
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
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("merchant")}</div>,
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
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("catStatus")}</div>,
  },
  {
    
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original
 
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
      )
    },
  },
]
  
export type Payment = {
  id: string
  amount: number
  type: "Credits Only" | "Debits Only" 
   
  email: string
}
const data: Payment[] = [
  
  { "transactionID" :"1",
    "date": "2023-09-06",
    "description": "Square Payments 9866767635234",
    "amount": "51678.00",
    "category": "Payments Processor",
    "subCategory": "Square Limited",
    "merchant": "Square Limited",
    "catStatus": "Manual",
       "type" : "Credits Only"
  },
  {
    "transactionID" :"2",
    "date": "2023-09-07",
    "description": "Square Payments TTTTT",
    "amount": "11111.00",
    "category": "Payments Processor",
    "subCategory": "Square Limited",
    "merchant": "Square Limited",
    "catStatus": "Automatic",
     "type" : "Debits Only"
  },
  {
    "transactionID" :"3",
    "date": "2023-09-08",
    "description": "Square Payments BBBBDDDD",
    "amount": "14555.00",
    "category": "Payments Processor",
    "subCategory": "Square Limited",
    "merchant": "Square Limited",
    "catStatus": "Automatic",
     "type" : "Debits Only"
  },
  {
    "transactionID" :"4",
    "date": "2023-09-09",
    "description": "Square Payments AAA",
    "amount": "41333.00",
    "category": "Square",
    "subCategory": "Square Limited",
    "merchant": "Square Limited",
    "catStatus": "Manual",
     "type" : "Credits Only"
  },
  {
    "transactionID" :"5",
    "date": "2023-09-10",
    "description": "Square Payments BBB",
    "amount": "17.00",
    "category": "Barclys Processor",
    "subCategory": "Square Limited",
    "merchant": "Square Limited",
    "catStatus": "Automatic",
     "type" : "Debits Only"
  },
  {
    "transactionID" :"6",
    "date": "2023-09-09",
    "description": "Square Payments SSS",
    "amount": "41333.00",
    "category": "Square",
    "subCategory": "Square Limited",
    "merchant": "Square Limited",
    "catStatus": "Manual",
     "type" : "Credits Only"
  },
  {
    "transactionID" :"7",
    "date": "2023-09-10",
    "description": "Square Payments 4332221",
    "amount": "17.00",
    "category": "Barclys Processor",
    "subCategory": "Square Limited",
    "merchant": "Square Limited",
    "catStatus": "Automatic",
     "type" : "Credits Only"
  },
  {
    "transactionID" :"8",
    "date": "2023-09-09",
    "description": "Square Payments 542222",
    "amount": "41333.00",
    "category": "Square",
    "subCategory": "Square Limited",
    "merchant": "Square Limited",
    "catStatus": "Manual",
     "type" : "Credits Only"
  },
  {
    "transactionID" :"9",
    "date": "2023-09-10",
    "description": "Square Payments 988888",
    "amount": "17.00",
    "category": "Barclys Processor",
    "subCategory": "Square Limited",
    "merchant": "Square Limited",
    "catStatus": "Automatic",
     "type" : "Credits Only"
  }
]


// my data
const dummyData =  [
    { "transactionID" :"1",
      "date": "2023-09-06",
      "description": "Square Payments 9866767635234",
      "amount": "£51,678.00",
      "category": "Payments Processor",
      "subCategory": "Square Limited",
      "merchant": "Square Limited",
      "catStatus": "Manual"
   
    },
    {
      "transactionID" :"2",
      "date": "2023-09-07",
      "description": "Square Payments 1234435435234",
      "amount": "£11,111.00",
      "category": "Payments Processor",
      "subCategory": "Square Limited",
      "merchant": "Square Limited",
      "catStatus": "Automatic"
    },
    {
      "transactionID" :"3",
      "date": "2023-09-08",
      "description": "Square Payments 1234345335234",
      "amount": "£14,555.00",
      "category": "Payments Processor",
      "subCategory": "Square Limited",
      "merchant": "Square Limited",
      "catStatus": "Automatic"
    },
    {
      "transactionID" :"4",
      "date": "2023-09-09",
      "description": "Square Payments 6666645234",
      "amount": "£41,333.00",
      "category": "Payments Processor",
      "subCategory": "Square Limited",
      "merchant": "Square Limited",
      "catStatus": "Manual"
    },
    {
      "transactionID" :"5",
      "date": "2023-09-10",
      "description": "Square Payments 88885234",
      "amount": "£17.00",
      "category": "Payments Processor",
      "subCategory": "Square Limited",
      "merchant": "Square Limited",
      "catStatus": "Automatic"
    }
  ]




// These function are moved to utils
// Transaction, aggregateData, filterData
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]
const data3: Transaction[] = [
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
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
 
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
  })
  const { setTheme } = useTheme()
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
<h1 className="flex justify-center  align-middle text-2xl">365 Finance</h1>
  </header>
  <div className="container p-20 ">
    
      <div className="space-y-1">
        <h3 className="text-sm font-medium leading-none">Filter By Type</h3>
      </div>
      <Separator className="my-4" />
      <div className="grid justify-items-start  p-10">     
        <div>
          
          <ToggleGroup type="single">
  <ToggleGroupItem value="Credits">Credits Only</ToggleGroupItem>
  <ToggleGroupItem value="Debits">Debits Only</ToggleGroupItem>
  <ToggleGroupItem value="Transactions">All Transactions</ToggleGroupItem>
          </ToggleGroup>
         
        </div>
        <div>
        <ToggleGroup type="single">
  <ToggleGroupItem value="Categorised">Categorised</ToggleGroupItem>
  <ToggleGroupItem value="Uncategorised">Uncategorised</ToggleGroupItem>
  <ToggleGroupItem value="Transactions">All Transactions</ToggleGroupItem>
        </ToggleGroup>
        </div>

      </div>
      <div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium leading-none">Filter By Keywords</h3>
      </div>
      <Separator className="my-4" />
      
    </div>
      <div className="flex items-center gap-3.5  p-10">
          <div className="p-4"> <Label htmlFor="">Contains</Label><Input type="" id="Contains" placeholder="Sqauare" value={(table.getColumn("description")?.getFilterValue() as string) ?? ""} 
          onChange={(event) =>
            table.getColumn("description")?.setFilterValue(event.target.value)
          }/></div>
          <div className="p-4"> <Label htmlFor="">Do Not Contain</Label><Input type="" id="NotContain" placeholder="Canada Sqauare" /></div>
          <div className="p-4"> <Label htmlFor="">Start with</Label><Input type="" id="Startwith" placeholder="" /></div>
          <div className="p-4"> <Label htmlFor="">End with</Label><Input type="" id="Endwith" placeholder="" /></div>

      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium leading-none">Filter By Payment Processor</h3>
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
  <ToggleGroupItem value="a">Sep-24</ToggleGroupItem>
  <ToggleGroupItem value="b">Aug-24</ToggleGroupItem>
  <ToggleGroupItem value="c">Jul-24</ToggleGroupItem>
  <ToggleGroupItem value="d">Jun-24</ToggleGroupItem>
  <ToggleGroupItem value="f">May-24</ToggleGroupItem>
  <ToggleGroupItem value="g">Apr-24</ToggleGroupItem>
  <ToggleGroupItem value="h">Mar-24</ToggleGroupItem>
  <ToggleGroupItem value="i">Feb-24</ToggleGroupItem>
  <ToggleGroupItem value="j">Jan-24</ToggleGroupItem>
  <ToggleGroupItem value="k">Dec-23</ToggleGroupItem>
  <ToggleGroupItem value="l">Nov-23</ToggleGroupItem>
  <ToggleGroupItem value="o">Oct-23</ToggleGroupItem>
  <ToggleGroupItem value="m">All Transactions</ToggleGroupItem>
          </ToggleGroup>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium leading-none">Filtered Transactions</h3>
      </div>
      <Separator className="my-4" />

      <Separator className="my-4" />













      <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter category..."
          value={(table.getColumn("category")?.getFilterValue() as string) ?? ""}
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
                )
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
                  )
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
