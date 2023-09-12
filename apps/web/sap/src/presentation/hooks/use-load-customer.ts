import { CustomerModel } from '@/domain/models'
import useLoadCustomerDetail from './use-load-customer-detail'

const useLoadCustomer = (customers: CustomerModel[]) => {
  const useCustomerDetail = useLoadCustomerDetail()

  const onLoad = (id: number) => {
    useCustomerDetail.setId(id)
    useCustomerDetail.setIds(customers.map((customer) => customer.ID))
  }

  return onLoad
}

export default useLoadCustomer
