import { SplitterLayout, SplitterElement, FlexBox, Title } from '@ui5/webcomponents-react'
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme'

import Header from './presentation/components/header/header'
import SearchEmployees from './presentation/components/inputs/search-employees'
import UserCard from './presentation/components/user-card/user-card'
import InfoSection from './presentation/components/info-section/info-section'

export default function App() {
  setTheme('sap_horizon_dark')
  return (
    <>
      <SplitterLayout     
        style={{
          height: '100%',
          width: '100%'
        }}
      >
        <SplitterElement size="100%">
          <FlexBox
            direction="Column"
            style={{
              height: '100%',
              width: '100%'
            }}
          >
            <div
              style={{
                background: '#1d232a',
                height: '8vh',
                width: '100%'
              }}
            >
              <Header />
            </div>

            <SplitterLayout
              style={{
                height: '92vh',
              }}
            >
              <SplitterElement
                size='40%'
                style={{
                  background: '#12171c'
                }}
              >
                <FlexBox
                  direction="Column"
                >

                  {/* <Title
                    style={{
                      paddingLeft: '40px',
                      paddingTop: '25px',
                      paddingBottom: '25px'
                    }}
                  >
                    Collaborators
                  </Title> */}

                  <div
                    style={{
                      paddingLeft: '40px',
                      paddingTop: '25px',
                      paddingBottom: '25px'
                    }}
                  >
                    <SearchEmployees />
                  </div>
                  
                  <UserCard />

                </FlexBox>
              </SplitterElement>

              <SplitterElement
                size="60%"
                style={{
                  background: '#12171c',
                  paddingTop: '80px',
                  paddingLeft: '25px',
                  paddingRight: '55px'
                }}
              >
                <InfoSection />
              </SplitterElement>
            </SplitterLayout>
          </FlexBox>
        </SplitterElement>
      </SplitterLayout>
    </>
  )
}
