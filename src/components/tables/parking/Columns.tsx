"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type IParkingSlot = {
  _id: string;
  location: string;
  slotNumber: string;
  status: "busy" | "free" | "unavailable",
  currentCustomer: string | null ;
  type: "techada" | "descubierta"
}

export const parkingTableColumns: ColumnDef<IParkingSlot>[] = [
  {
    accessorKey: "slotNumber",
    header: "N° #",
  },
  {
    accessorKey: "location",
    header: "Ubicación",
  },
  {
    accessorKey: "status",
    header: "Estado",
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "currentCustomer",
    header: "Usuario",
  },
]
