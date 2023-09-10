import { 
  ObjectPage, 
  Bar, 
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
  ObjectStatus,
} from '@ui5/webcomponents-react'

const InfoSection: React.FC = () => {
  return (
    <ObjectPage
      style={{
        height: '80vh'
      }}
      headerContent={
        <DynamicPageHeader>
          <FlexBox alignItems="Center" wrap="Wrap">
            <FlexBox direction="Column">
              <Link>+33 6 4512 5158</Link>
              <Link href="mailto:ui5-webcomponents-react@sap.com">DeniseSmith@sap.com</Link>
              <Link href="https://github.com/SAP/ui5-webcomponents-react">https://github.com/SAP/ui5-webcomponents-react</Link>
            </FlexBox>
            <FlexBox direction="Column" style={{padding: '10px'}}>
              <Label>San Jose</Label>
              <Label>California, USA</Label>
            </FlexBox>
          </FlexBox>
        </DynamicPageHeader>
      }
      headerContentPinnable
      headerTitle={
        <DynamicPageTitle actions={
          <>
            <Button design="Emphasized">Primary Action</Button>
            <Button>Edit</Button>
          </>
        } breadcrumbs={
          <Breadcrumbs>
            <BreadcrumbsItem>Manager Cockpit</BreadcrumbsItem>
            <BreadcrumbsItem>My Team</BreadcrumbsItem>
            <BreadcrumbsItem>customer Details</BreadcrumbsItem>
          </Breadcrumbs>
        } expandedContent={
          <MessageStrip>Information (only visible if header content is expanded)</MessageStrip>
        } header="Denise Smith" showSubHeaderRight snappedContent={
          <MessageStrip>Information (only visible if header content is collapsed/snapped)</MessageStrip>
        } subHeader="Senior UI Developer">
          <ObjectStatus state="Success">employed</ObjectStatus>
        </DynamicPageTitle>
      }
      image="https://sap.github.io/ui5-webcomponents-react/assets/Person-eb847016.png"
      imageShapeCircle
      onPinnedStateChange={function ka(){}}
      onSelectedSectionChange={function ka(){}}
      onToggleHeaderContent={function ka(){}}
      selectedSectionId="goals"
      showHideHeaderButton
    >
      <ObjectPageSection
        aria-label="Goals"
        id="goals"
        titleText="Goals"
      >
        <Form
          columnsL={3}
          columnsM={2}
          columnsXL={3}
          labelSpanL={6}
          labelSpanM={6}
          labelSpanXL={6}
          style={{
            alignItems: 'baseline'
          }}
        >
          <FormItem label="Evangelize the UI framework across the company">
            <Text>
              4 days overdue - Cascaded
            </Text>
          </FormItem>
          <FormItem label="Get trained in development management direction">
            <Text>
              Due Nov, 21
            </Text>
          </FormItem>
          <FormItem label="Mentor junior developers">
            <Text>
              Due Dec, 31 - Cascaded
            </Text>
          </FormItem>
        </Form>
      </ObjectPageSection>
      <ObjectPageSection
        aria-label="Personal"
        id="personal"
        titleText="Personal"
      >
        <ObjectPageSubSection
          actions={
            <>
              <Button design="Emphasized" style={{minWidth: '120px'}}>Custom Action</Button>
              <Button design="Transparent" icon="action-settings" tooltip="settings"/>
              <Button design="Transparent" icon="download" tooltip="download"/>
            </>
          }
          aria-label="Connect"
          id="personal-connect"
          titleText="Connect"
        >
          <Form
            columnsL={4}
            columnsXL={4}
            style={{
              alignItems: 'baseline'
            }}
          >
            <FormGroup titleText="Phone Numbers">
              <FormItem label="Home">
                <Text>
                  +1 234-567-8901
                </Text>
              </FormItem>
              <FormItem label="">
                <Text>
                  +1 234-567-5555
                </Text>
              </FormItem>
            </FormGroup>
            <FormGroup titleText="Social Accounts">
              <FormItem label="LinkedIn">
                <Text>
                  /DeniseSmith
                </Text>
              </FormItem>
              <FormItem label="Twitter">
                <Text>
                  @DeniseSmith
                </Text>
              </FormItem>
            </FormGroup>
            <FormGroup titleText="Addresses">
              <FormItem label="Home Address">
                <Text>
                  2096 Mission Street
                </Text>
              </FormItem>
              <FormItem label="Mailing Address">
                <Text>
                  PO Box 32114
                </Text>
              </FormItem>
            </FormGroup>
            <FormGroup titleText="Mailing Address">
              <FormItem label="Work">
                <Text>
                  DeniseSmith@sap.com
                </Text>
              </FormItem>
            </FormGroup>
          </Form>
        </ObjectPageSubSection>
        <ObjectPageSubSection
          aria-label="Payment Information"
          id="personal-payment-information"
          titleText="Payment Information"
        >
          <Form
            columnsL={4}
            columnsXL={4}
            style={{
              alignItems: 'baseline'
            }}
          >
            <FormGroup titleText="Salary">
              <FormItem label="Bank Transfer">
                <Text>
                  Money Bank, Inc.
                </Text>
              </FormItem>
            </FormGroup>
            <FormGroup titleText="Payment method for Expenses">
              <FormItem label="Extra Travel Expenses">
                <Text>
                  Cash 100 USD
                </Text>
              </FormItem>
            </FormGroup>
          </Form>
        </ObjectPageSubSection>
      </ObjectPageSection>
      <ObjectPageSection
        aria-label="Employment"
        id="employment"
        titleText="Employment"
      >
        <ObjectPageSubSection
          aria-label="Job Information"
          id="employment-job-information"
          titleText="Job Information"
        >
          <Form
            columnsL={4}
            columnsXL={4}
            style={{
              alignItems: 'baseline'
            }}
          >
            <FormItem label="Job Classification">
              <FlexBox direction="Column">
                <Text>
                  Senior UI Developer
                </Text>
                <Label>
                  (UIDEV-SR)
                </Label>
              </FlexBox>
            </FormItem>
            <FormItem label="Job Title">
              <Text>
                Developer
              </Text>
            </FormItem>
            <FormItem label="customer Class">
              <Text>
                customer
              </Text>
            </FormItem>
            <FormItem label="Manager">
              <FlexBox direction="Column">
                <Text>
                  Dan Smith
                </Text>
                <Label>
                  Development Manager
                </Label>
              </FlexBox>
            </FormItem>
            <FormItem label="Pay Grade">
              <Text>
                Salary Grade 18 (GR-14)
              </Text>
            </FormItem>
            <FormItem label="FTE">
              <Text>
                1
              </Text>
            </FormItem>
          </Form>
        </ObjectPageSubSection>
        <ObjectPageSubSection
          aria-label="customer Details"
          id="employment-customer-details"
          titleText="customer Details"
        >
          <Form
            columnsL={4}
            columnsXL={4}
            style={{
              alignItems: 'baseline'
            }}
          >
            <FormItem label="Start Date">
              <Text>
                Jan 01, 2018
              </Text>
            </FormItem>
            <FormItem label="End Date">
              <Text>
                Dec 31, 9999
              </Text>
            </FormItem>
            <FormItem label="Payroll Start Date">
              <Text>
                Jan 01, 2018
              </Text>
            </FormItem>
            <FormItem label="Benefits Start Date">
              <Text>
                Jul 01, 2018
              </Text>
            </FormItem>
            <FormItem label="Company Car Eligibility">
              <Text>
                Jan 01, 2021
              </Text>
            </FormItem>
            <FormItem label="Equity Start Date">
              <Text>
                Jul 01, 2018
              </Text>
            </FormItem>
          </Form>
        </ObjectPageSubSection>
        <ObjectPageSubSection
          aria-label="Job Relationship"
          id="employment-job-relationship"
          titleText="Job Relationship"
        >
          <Form
            columnsL={4}
            columnsXL={4}
            style={{
              alignItems: 'baseline'
            }}
          >
            <FormItem label="Manager">
              <Text>
                John Doe
              </Text>
            </FormItem>
            <FormItem label="Scrum Master">
              <Text>
                Michael Adams
              </Text>
            </FormItem>
            <FormItem label="Product Owner">
              <Text>
                John Miller
              </Text>
            </FormItem>
          </Form>
        </ObjectPageSubSection>
      </ObjectPageSection>
    </ObjectPage>
  )
}

export default InfoSection