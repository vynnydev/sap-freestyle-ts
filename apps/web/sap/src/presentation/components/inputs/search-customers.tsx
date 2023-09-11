import { Input, Icon } from '@ui5/webcomponents-react'

const SearchCustomers: React.FC = () => {
  return (
    <Input
      style={{
        marginLeft: '40px',
        width: '85%'
      }}
      icon={<Icon name="employee" />}
      onChange={function ka(){}}
      onInput={function ka(){}}
      onSuggestionItemPreview={function ka(){}}
      onSuggestionItemSelect={function ka(){}}
    />
  )
}

export default SearchCustomers