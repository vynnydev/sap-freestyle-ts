import React from 'react'

import { makeRemoteLoadCustomerList } from '../../usecases/remote-load-customer-list-factory'
import { HomeCustomerList } from '@/presentation/pages/home/customer-list/home-customer-list'

export const makeCustomerList: React.FC = () => {
  return <HomeCustomerList loadCustomerList={makeRemoteLoadCustomerList()} />
}
