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



// my data
export const dummyData = {
  "data": [
    {
      "date": "2023-09-06",
      "description": "Square Payments 12345234",
      "amount": "£11,111.00",
      "category": "Payments Processor",
      "subCategory": "Square Limited",
      "merchant": "Square Limited",
      "catStatus": "Automatic"
    },
    {
      "date": "2023-09-07",
      "description": "Square Payments 12345234",
      "amount": "£11,111.00",
      "category": "Payments Processor",
      "subCategory": "Square Limited",
      "merchant": "Square Limited",
      "catStatus": "Automatic"
    },
    {
      "date": "2023-09-08",
      "description": "Square Payments 12345234",
      "amount": "£11,111.00",
      "category": "Payments Processor",
      "subCategory": "Square Limited",
      "merchant": "Square Limited",
      "catStatus": "Automatic"
    },
    {
      "date": "2023-09-09",
      "description": "Square Payments 12345234",
      "amount": "£11,111.00",
      "category": "Payments Processor",
      "subCategory": "Square Limited",
      "merchant": "Square Limited",
      "catStatus": "Automatic"
    },
    {
      "date": "2023-09-10",
      "description": "Square Payments 12345234",
      "amount": "£11,111.00",
      "category": "Payments Processor",
      "subCategory": "Square Limited",
      "merchant": "Square Limited",
      "catStatus": "Automatic"
    }
  ]
};
export const dummyDatanot = {
  data: {
    events: [
      {
        month: {
          year: 2024,
          month: 8
        },
        events: [
          {
            date: "2024-08-19",
            type: "AccountHolder Match",
            info: "Acc: 10146978 SortCode: 090222"
          },
          {
            date: "2024-08-09",
            type: "Financial commitment",
            amount: 149.95
          },
          {
            date: "2024-08-05",
            type: "Returned payment",
            amount: 5000.00,
            info: "Reason: Insufficient funds"
          }
        ]
      },
      {
        month: {
          year: 2024,
          month: 7
        },
        events: [
          {
            date: "2024-07-31",
            type: "Significant transaction",
            amount: 21824.76
          },
          {
            date: "2024-07-16",
            type: "Returned payment",
            amount: 3594.90
          },
          {
            date: "2024-07-10",
            type: "Subscription payment",
            amount: 29.99,
            info: "Streaming Service"
          }
        ]
      },
      {
        month: {
          year: 2024,
          month: 6
        },
        events: [
          {
            date: "2024-06-25",
            type: "Utility bill payment",
            amount: 150.65,
            info: "Water bill"
          },
          {
            date: "2024-06-15",
            type: "Utility bill payment",
            amount: 200.75,
            info: "Electricity bill"
          },
          {
            date: "2024-06-10",
            type: "Mortgage payment",
            amount: 1800.00,
            info: "Monthly mortgage payment"
          }
        ]
      },
      {
        month: {
          year: 2024,
          month: 5
        },
        events: [
          {
            date: "2024-05-28",
            type: "Loan repayment",
            amount: 500.00,
            info: "Student loan repayment"
          },
          {
            date: "2024-05-20",
            type: "Grocery purchase",
            amount: 200.45,
            info: "Supermarket - Weekly groceries"
          },
          {
            date: "2024-05-05",
            type: "Insurance payment",
            amount: 350.00,
            info: "Car insurance"
          }
        ]
      },
      {
        month: {
          year: 2024,
          month: 4
        },
        events: [
          {
            date: "2024-04-22",
            type: "Medical expense",
            amount: 120.00,
            info: "Prescription medicine"
          },
          {
            date: "2024-04-15",
            type: "Entertainment expense",
            amount: 75.00,
            info: "Concert tickets"
          },
          {
            date: "2024-04-10",
            type: "Tax payment",
            amount: 500.00,
            info: "Quarterly tax payment"
          }
        ]
      },
      {
        month: {
          year: 2024,
          month: 3
        },
        events: [
          {
            date: "2024-03-30",
            type: "Significant purchase",
            amount: 3500.00,
            info: "Laptop purchase"
          },
          {
            date: "2024-03-20",
            type: "Dining expense",
            amount: 125.50,
            info: "Restaurant dinner"
          },
          {
            date: "2024-03-15",
            type: "Fuel purchase",
            amount: 60.00,
            info: "Gas station - Fuel"
          }
        ]
      }
    ],
    financialServices: [
      {
        vendor: "Federal Capital",
        category: "Loans",
        debit: {
          total: 53699.40,
          monthlyAvg: 4474.95,
          lastTransaction: "2024-08-16"
        }
      },
      {
        vendor: "American Express",
        category: "Credit Cards",
        credit: {
          total: 28963.17,
          monthlyAvg: 2413.60,
          lastTransaction: "2024-08-19"
        }
      },
      {
        vendor: "Visa",
        category: "Credit Cards",
        debit: {
          total: 5000.00,
          monthlyAvg: 500.00,
          lastTransaction: "2024-08-05"
        }
      }
    ],
    regularOutgoings: [
      {
        category: "Misc Payments",
        total: 117309.67,
        monthlyAvg: 9775.81,
        lastTransaction: "2024-08-12"
      },
      {
        category: "Tax",
        total: 38500.00,
        monthlyAvg: 3208.33,
        lastTransaction: "2024-06-20"
      },
      {
        category: "Streaming Service",
        total: 120.00,
        monthlyAvg: 10.00,
        lastTransaction: "2024-07-10"
      }
    ]
  }
};


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
<h1 className="flex justify-center items-center align-middle text-2xl">365 Finance</h1>
  </header>
  <div className="container justify-center p-20 ">
    
      <div className="space-y-1">
        <h3 className="text-sm font-medium leading-none">Filter By Type</h3>
      </div>
      <Separator className="my-4" />
      <div className="p-10">     <ToggleGroup type="single">
  <ToggleGroupItem value="Credit">Credit Only</ToggleGroupItem>
  <ToggleGroupItem value="Debits">Debits Only</ToggleGroupItem>
  <ToggleGroupItem value="All">All Transactions</ToggleGroupItem>
</ToggleGroup>
<ToggleGroup type="single">
  <ToggleGroupItem value="Categorised">Categorised</ToggleGroupItem>
  <ToggleGroupItem value="Uncategorised">Uncategorised</ToggleGroupItem>
  <ToggleGroupItem value="Transactions">All Transactions</ToggleGroupItem>
</ToggleGroup>
      </div>
      <div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium leading-none">Filter By Keywords</h3>
      </div>
      <Separator className="my-4" />
      
    </div>
      <div className="flex items-center gap-3.5 grid-cols-3 p-10">
          <div className="p-4"> <Label htmlFor="">Contains</Label><Input type="" id="Contains" placeholder="Sqauare" /></div>
          <div className="p-4"> <Label htmlFor="">Do Not Contain</Label><Input type="" id="NotContain" placeholder="Canada Sqauare" /></div>
          <div className="p-4"> <Label htmlFor="">Start with</Label><Input type="" id="Startwith" placeholder="" /></div>
          <div className="p-4"> <Label htmlFor="">End with</Label><Input type="" id="Endwith" placeholder="" /></div>

      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium leading-none">Filter By Payment Processor</h3>
      </div>
      <Separator className="my-4" />

      <div className="p-10">     
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
      <div className="p-10"> 
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
      <div className="p-10">    
      <Table>
      <TableCaption>Transactions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Select</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Sub Category</TableHead>
          <TableHead>Merchant</TableHead>
          <TableHead className="text-right">Cat.Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
      </div>  

      </div>  
      

</div>
    
  );
}
