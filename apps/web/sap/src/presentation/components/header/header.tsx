import { ShellBar, StandardListItem, Input, Icon } from '@ui5/webcomponents-react'

const Header: React.FC = () => {
  return (
    <div>
      <ShellBar
        logo={<img alt="SAP Logo" src="https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg"/>}
        menuItems={<><StandardListItem data-key="1">Menu Item 1</StandardListItem><StandardListItem data-key="2">Menu Item 2</StandardListItem><StandardListItem data-key="3">Menu Item 3</StandardListItem></>}
        onMenuItemClick={function ka(){}}
        onNotificationsClick={function ka(){}}
        onProductSwitchClick={function ka(){}}
        onProfileClick={function ka(){}}
        primaryTitle="User Manager"
        searchField={
          <Input style={{
            paddingRight: '80px'
          }} icon={<Icon interactive name="search"/>} showClearIcon/>
        }
        showNotifications
        showProductSwitch
      />
    </div>
  )
}

export default Header