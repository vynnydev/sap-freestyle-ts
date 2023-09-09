import { 
  Card, 
  CardHeader, 
  Icon, 
  List, 
  StandardListItem, 
} from '@ui5/webcomponents-react'

const UserCard: React.FC = () => {
  return (
    <Card
      header={<CardHeader avatar={<Icon name="person-placeholder" color='#ffffff'/>} status="3 of 5" subtitleText="Direct Reports" titleText="TeamSpace"/>}
      style={{
        paddingLeft: '45px',
        paddingRight: '25px',
        paddingBottom: '45px',
        height: '90vh',
        width: '60vh'
      }}
    >
      <List>
        <StandardListItem description="Software Architect">
          Richard Wilson
        </StandardListItem>
        <StandardListItem description="Visual Designer">
          Elena Petrova
        </StandardListItem>
        <StandardListItem description="Quality Specialist">
          John Miller
        </StandardListItem>
      </List>
    </Card>
  )
}

export default UserCard