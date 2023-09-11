import { makeCustomerList } from '../factories/pages/home/customer-list-factory'

import { BrowserRouter, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import React from 'react'

const Router: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Route path="/" component={makeCustomerList} />
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default Router
