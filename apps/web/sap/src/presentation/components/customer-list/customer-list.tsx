import {
  Card,
  CardHeader,
  List,
  StandardListItem,
} from '@ui5/webcomponents-react'

import { LoadCustomerListResponse } from '@/domain/application/usecases'
import { CustomerModel } from '@/domain/models'

type Props = {
  customers: LoadCustomerListResponse[]
}

const CustomerList: React.FC<Props> = ({ customers }: Props) => {
  return (
    <Card
      header={
        <CardHeader
          status="1 of 1"
          subtitleText="Direct Reports"
          titleText="TeamSpace"
        />
      }
      style={{
        paddingTop: '20px',
        paddingLeft: '40px',
        paddingRight: '25px',
        paddingBottom: '45px',
        height: '90vh',
        width: '60vh',
      }}
    >
      <List>
        {customers.length ? (
          customers.map((customer: CustomerModel) => (
            <StandardListItem
              key={customer.ID}
              description={customer.jobPosition}
            >
              {customer.firstName}
            </StandardListItem>
          ))
        ) : (
          <StandardListItem></StandardListItem>
        )}
      </List>
    </Card>
  )
}

export default CustomerList
