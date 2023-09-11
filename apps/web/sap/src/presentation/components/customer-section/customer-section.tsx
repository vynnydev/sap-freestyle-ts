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

const CustomerSection: React.FC = () => {
  return (
    <ObjectPage
      style={{
        height: '80vh',
      }}
      headerContent={
        <DynamicPageHeader>
          <FlexBox alignItems="Center" wrap="Wrap">
            <FlexBox direction="Column">
              <Link>+33 6 4512 5158</Link>
              <Link href="mailto:ui5-webcomponents-react@sap.com">
                DeniseSmith@sap.com
              </Link>
            </FlexBox>
            <FlexBox direction="Column" style={{ padding: '10px' }}>
              <Label>San Jose</Label>
              <Label>California, USA</Label>
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
          header="Denise Smith"
          showSubHeaderRight
          snappedContent={
            <MessageStrip>
              Information (only visible if header content is collapsed/snapped)
            </MessageStrip>
          }
          subHeader="Senior UI Developer"
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
                  SAP management and development training
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
                <Text>Vinicius</Text>
              </FormItem>
              <FormItem label="Last">
                <Text>Prudencio</Text>
              </FormItem>
            </FormGroup>
            <FormGroup titleText="Date Of Birth & Age">
              <FormItem label="Date Of Birth">
                <Text>04/04/1997</Text>
              </FormItem>
              <FormItem label="Age">
                <Text>26</Text>
              </FormItem>
            </FormGroup>
            <FormGroup titleText="Phone Number">
              <FormItem label="Home">
                <Text>+1 234-567-8901</Text>
              </FormItem>
            </FormGroup>
            <FormGroup titleText="Social Accounts">
              <FormItem label="LinkedIn">
                <Text>/DeniseSmith</Text>
              </FormItem>
            </FormGroup>
            <FormGroup titleText="Addresses">
              <FormItem label="Home Address">
                <Text>2096 Mission Street</Text>
              </FormItem>
            </FormGroup>
            <FormGroup titleText="Mailing Address">
              <FormItem label="Work">
                <Text>DeniseSmith@sap.com</Text>
              </FormItem>
            </FormGroup>
          </Form>
        </ObjectPageSubSection>
      </ObjectPageSection>
    </ObjectPage>
  )
}

export default CustomerSection
