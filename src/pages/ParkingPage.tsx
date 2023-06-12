import { ParkingDataTable, parkingTableColumns } from "../components/tables/parking"
import { parkingSampleData } from "../data/parking"

const data = parkingSampleData;

export const ParkingPage = () => {
  return (
    <div>
      <ParkingDataTable columns={parkingTableColumns} data={data} />
    </div>
  )
}
