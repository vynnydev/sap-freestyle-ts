export type RemoteSaveCustomerParams = {
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
  cpf?: string
  homeAddress?: string
  mailingAddress?: string
  goals?: string
  jobPosition?: string
}
