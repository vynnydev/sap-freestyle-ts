import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'

import { CustomerModel } from '@/domain/models'
import axios from 'axios'

const useGetCustomerById = (id?: number) => {
  const [isLoading, setIsLoading] = useState(false)
  const [customer, setCustomer] = useState<CustomerModel>()

  useEffect(() => {
    if (!id) return

    setIsLoading(true)

    const fetchCustomer = async () => {
      const response = await axios.get(
        `http://localhost:4004/customer/User/${id}`,
      )

      if (!response.data) {
        setIsLoading(false)
        return toast.error('Something went wrong.')
      }

      setCustomer(response.data as CustomerModel)
    }

    fetchCustomer()
  }, [id])

  return useMemo(
    () => ({
      isLoading,
      customer,
    }),
    [isLoading, customer],
  )
}

export default useGetCustomerById
