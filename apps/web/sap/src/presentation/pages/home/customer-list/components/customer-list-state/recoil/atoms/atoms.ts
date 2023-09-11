import { LoadCustomerListResponse } from '@/domain/application/usecases'

import { atom } from 'recoil'

export const customerListState = atom({
  key: 'customerListState',
  default: {
    customers: [] as LoadCustomerListResponse[],
    error: '',
    reload: false,
  },
})
