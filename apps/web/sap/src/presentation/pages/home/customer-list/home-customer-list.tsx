/* eslint-disable react-hooks/rules-of-hooks */
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

import { useErrorHandler } from '@/presentation/hooks'

import LoadCustomerDetails from '@/presentation/components/load-customer-details/load-customer-details'
import LoadCustomerList from '@/presentation/components/load-customer-list/load-customer-list'
import Header from '@/presentation/components/header/header'

import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme'

import Error from '@/presentation/components/error/error'

import useLoadCustomer from '@/presentation/hooks/use-load-customer'

type Props = {
  loadCustomerList: ILoadCustomerList
}

export const HomeCustomerList: React.FC<Props> = ({
  loadCustomerList,
}: Props) => {
  const resetCustomerListState = useResetRecoilState(customerListState)
  const [state, setState] = useRecoilState(customerListState)

  const handleError = useErrorHandler((error: Error) => {
    setState((old) => ({ ...old, error: error.message }))
  })

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
      .catch(handleError)
  }, [state.reload])

  const useCustomer = useLoadCustomer(state.customers)

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
                    <LoadCustomerList
                      onClick={(id: number) => useCustomer(id)}
                      customers={state.customers}
                    ></LoadCustomerList>
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
                {state.error ? (
                  <Error error={state.error} reload={reload} />
                ) : (
                  <LoadCustomerDetails />
                )}
              </SplitterElement>
            </SplitterLayout>
          </FlexBox>
        </SplitterElement>
      </SplitterLayout>
    </>
  )
}
