import { Input, SuggestionGroupItem } from '@ui5/webcomponents-react'
import { InputSuggestionText } from '@ui5/webcomponents/dist/features/InputSuggestions.js'

const SearchEmployees: React.FC = () => {
  return (
    <>
      <Input
        icon={null}
        onChange={function ka(){}}
        onInput={function ka(){}}
        onSuggestionItemPreview={function ka(){}}
        onSuggestionItemSelect={function ka(){}}
        placeholder="type some employee to show suggestions"
        showSuggestions={true}
        style={{
          width: '400px'
        }}
      >
      </Input>
    </>
  )
}

export default SearchEmployees