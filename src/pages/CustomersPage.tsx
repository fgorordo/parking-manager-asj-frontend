import { Payment, columns } from "../customers/columns"
import { DataTable } from "../customers/data-table"

const data:Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
]

export const CustomersPage = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
