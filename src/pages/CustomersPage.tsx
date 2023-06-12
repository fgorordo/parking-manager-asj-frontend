import { Modal } from "../components"
import { CustomerForm } from "../components/form/CustomerForm"
import { Customer, CustomerDataTable, customerColumns } from "../components/tables/customers"
import { useUi } from "../hooks/useUi"

const data: Customer[] = [
  {
    _id: "728ed52f",
    firstname: "Usuario",
    lastname: "Prueba",
    email: "usertest@gmail.com",
    phone: "+54 9 11 334 546",
    accountBalance: 3000
  },
]

export const CustomersPage = () => {
  const { handleOpenModal, isModalOpen } = useUi()
  return (
    <div>
      {
        isModalOpen && <Modal>
          <CustomerForm />
        </Modal>
      }

      <div className="flex justify-between align-center">
        <button className="bg-stone-800 text-white py-2 px-4 rounded-md hover:bg-stone-600 shadow-md shadow-stone-500" onClick={() => handleOpenModal()}>Crear cliente</button>
        <div className="flex align-center gap-4">
          <button className="py-2 px-4 rounded-md border border-stone-800 shadow-md shadow-stone-500 hover:bg-stone-600 hover:text-white transition-all duration-100">Exportar CSV</button>
        </div>
      </div>
      <div className="container mx-auto py-10">
        <CustomerDataTable columns={customerColumns} data={data} />
      </div>
    </div>
  )
}
