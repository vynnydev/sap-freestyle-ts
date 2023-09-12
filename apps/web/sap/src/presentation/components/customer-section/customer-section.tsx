/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ObjectPage,
  DynamicPageHeader,
  Button,
  FlexBox,
  Link,
  DynamicPageTitle,
  Breadcrumbs,
  BreadcrumbsItem,
  ObjectPageSection,
  Form,
  FormItem,
  Text,
  ObjectPageSubSection,
  FormGroup,
  Label,
  MessageStrip,
} from '@ui5/webcomponents-react'

import { LoadCustomerListResponse } from '@/domain/application/usecases'
import { CustomerModel } from '@/domain/models'

import useLoadCustomerDetail from '@/presentation/hooks/use-load-customer-detail'
import useGetCustomerById from '@/presentation/hooks/use-get-customer-by-id'

type Props = {
  customers: LoadCustomerListResponse[]
}

const CustomerSection = () => {
  const useLoadDetail = useLoadCustomerDetail()
  const { customer } = useGetCustomerById(useLoadDetail.activeId)

  return (
    <>
      {customer ? (
        <ObjectPage
          key={customer.ID}
          style={{
            height: '80vh',
          }}
          headerContent={
            <DynamicPageHeader>
              <FlexBox alignItems="Center" wrap="Wrap">
                <FlexBox direction="Column">
                  <Link>{customer.phoneNumber}</Link>
                  <Link href="mailto:ui5-webcomponents-react@sap.com">
                    {customer.mailingAddress}
                  </Link>
                </FlexBox>
                <FlexBox direction="Column" style={{ padding: '10px' }}>
                  <Label>{customer.homeAddress}</Label>
                </FlexBox>
              </FlexBox>
            </DynamicPageHeader>
          }
          headerContentPinnable
          headerTitle={
            <DynamicPageTitle
              breadcrumbs={
                <Breadcrumbs>
                  <BreadcrumbsItem>Manager Cockpit</BreadcrumbsItem>
                  <BreadcrumbsItem>My Customers</BreadcrumbsItem>
                  <BreadcrumbsItem>Customer Details</BreadcrumbsItem>
                </Breadcrumbs>
              }
              expandedContent={
                <MessageStrip>
                  Information (only visible if header content is expanded)
                </MessageStrip>
              }
              header={`${customer.firstName} ${customer.lastName}`}
              showSubHeaderRight
              snappedContent={
                <MessageStrip>
                  Information (only visible if header content is
                  collapsed/snapped)
                </MessageStrip>
              }
              subHeader={customer.jobPosition}
            ></DynamicPageTitle>
          }
          image="https://sap.github.io/ui5-webcomponents-react/assets/Person-eb847016.png"
          imageShapeCircle
          onPinnedStateChange={function ka() {}}
          onSelectedSectionChange={function ka() {}}
          onToggleHeaderContent={function ka() {}}
          selectedSectionId="goals"
          showHideHeaderButton
        >
          <ObjectPageSection aria-label="Goals" id="goals" titleText="Goals">
            <Form
              columnsL={3}
              columnsM={2}
              columnsXL={3}
              labelSpanL={6}
              labelSpanM={6}
              labelSpanXL={6}
              style={{
                alignItems: 'baseline',
              }}
            >
              <div
                style={{
                  marginTop: '10px',
                  width: '300px',
                }}
              >
                <FlexBox direction="Row">
                  <FormItem label="Goals">
                    <Text
                      style={{
                        paddingLeft: '5px',
                      }}
                    >
                      {customer.goals}
                    </Text>
                  </FormItem>
                </FlexBox>
              </div>
            </Form>
          </ObjectPageSection>
          <ObjectPageSection
            aria-label="Personal"
            id="personal"
            titleText="Personal"
          >
            <ObjectPageSubSection
              aria-label="Connect"
              id="personal-connect"
              titleText="Connect"
              actions={
                <>
                  <Button design="Emphasized" style={{ minWidth: '120px' }}>
                    Edit
                  </Button>
                </>
              }
            >
              <Form
                columnsL={4}
                columnsXL={4}
                style={{
                  alignItems: 'baseline',
                }}
              >
                <FormGroup titleText="First Name & Last Name">
                  <FormItem label="First">
                    <Text>{customer.firstName}</Text>
                  </FormItem>
                  <FormItem label="Last">
                    <Text>{customer.lastName}</Text>
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Date Of Birth & Age">
                  <FormItem label="Date Of Birth">
                    <Text>{customer.dateOfBirth}</Text>
                  </FormItem>
                  <FormItem label="Age">
                    <Text>{customer.age}</Text>
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Phone Number">
                  <FormItem label="Home">
                    <Text>{customer.phoneNumber}</Text>
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Social Accounts">
                  <FormItem label="LinkedIn">
                    <Text>{customer.socialAccounts}</Text>
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Addresses">
                  <FormItem label="Home Address">
                    <Text>{customer.homeAddress}</Text>
                  </FormItem>
                </FormGroup>
                <FormGroup titleText="Mailing Address">
                  <FormItem label="Work">
                    <Text>{customer.mailingAddress}</Text>
                  </FormItem>
                </FormGroup>
              </Form>
            </ObjectPageSubSection>
          </ObjectPageSection>
        </ObjectPage>
      ) : (
        <div
          style={{
            height: '40vh',
            marginTop: '80px',
          }}
        >
          <text
            style={{
              fontWeight: 'bold',
              color: 'white',
              fontSize: '25px',
            }}
          >
            No data or interaction with the cards
          </text>
        </div>
      )}
    </>
  )
}

export default CustomerSection
