"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Customer = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  accountBalance: number;
}

export const customerColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: "firstname",
    header: "Nombre",
  },
  {
    accessorKey: "lastname",
    header: "Apellido",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Teléfono"
  },
  {
    accessorKey: "accountBalance",
    header: "Estado de cuenta"
  }
]
