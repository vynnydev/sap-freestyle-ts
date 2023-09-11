export type SaveCustomerParams = {
  firstName?: string
  lastName?: string
  dateOfBirth?: string
  age?: number
  phoneNumber?: string
  socialAccounts?: string
  cp?: string
  homeAddress?: string
  mailingAddress?: string
  goals?: string
  jobPosition?: string
}

export type RemoteSaveCustomerResponse = {
  ID?: number
  firstName?: string
  lastName?: string
  dateOfBirth?: string
  age?: number
  phoneNumber?: string
  socialAccounts?: string
  cp?: string
  homeAddress?: string
  mailingAddress?: string
  goals?: string
  jobPosition?: string
}

export interface ISaveCustomer {
  save: (
    params: SaveCustomerParams,
  ) => Promise<{ value: RemoteSaveCustomerResponse } | undefined>
}
