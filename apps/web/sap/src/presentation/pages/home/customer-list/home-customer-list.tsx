import React, { useEffect } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import {
  SplitterLayout,
  SplitterElement,
  FlexBox,
  Title,
} from '@ui5/webcomponents-react'

import { customerListState } from './components'
import { ILoadCustomerList } from '@/domain/application/usecases'

import CustomerSection from '@/presentation/components/customer-section/customer-section'
import CustomerList from '@/presentation/components/customer-list/customer-list'
import Header from '@/presentation/components/header/header'

import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme'

import Error from '@/presentation/components/error/error'

type Props = {
  loadCustomerList: ILoadCustomerList
}

export const HomeCustomerList: React.FC<Props> = ({
  loadCustomerList,
}: Props) => {
  const resetCustomerListState = useResetRecoilState(customerListState)
  const [state, setState] = useRecoilState(customerListState)

  const reload = (): void =>
    setState((old) => ({
      customers: [],
      error: '',
      reload: !old.reload,
    }))

  useEffect(() => resetCustomerListState(), [])
  useEffect(() => {
    loadCustomerList
      .loadAll()
      .then((customers) => setState((old) => ({ ...old, customers })))
  }, [state.reload])
  console.log(state.customers)

  setTheme('sap_horizon_dark')
  return (
    <>
      <SplitterLayout
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <SplitterElement size="100%">
          <FlexBox
            direction="Column"
            style={{
              height: '100%',
              width: '100%',
            }}
          >
            <div
              style={{
                background: '#1d232a',
                height: '8vh',
                width: '100%',
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
                size="40%"
                style={{
                  background: '#12171c',
                }}
              >
                <FlexBox direction="Column">
                  <Title
                    style={{
                      paddingLeft: '40px',
                      paddingTop: '20px',
                      paddingBottom: '20px',
                    }}
                  >
                    Customers
                  </Title>

                  {state.error ? (
                    <Error error={state.error} reload={reload} />
                  ) : (
                    <CustomerList customers={state.customers}></CustomerList>
                  )}
                </FlexBox>
              </SplitterElement>

              <SplitterElement
                size="60%"
                style={{
                  background: '#12171c',
                  paddingTop: '80px',
                  paddingLeft: '25px',
                  paddingRight: '55px',
                }}
              >
                <CustomerSection />
              </SplitterElement>
            </SplitterLayout>
          </FlexBox>
        </SplitterElement>
      </SplitterLayout>
    </>
  )
}
