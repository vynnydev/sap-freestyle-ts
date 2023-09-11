import { CustomerModel } from '@/domain/models'

export type LoadCustomerListResponse = {
  ID: number
  firstName: string
  lastName: string
  dateOfBirth: string
  age: number
  phoneNumber: string
  socialAccounts: string
  cpf: string
  homeAddress: string
  mailingAddress: string
  goals: string
  jobPosition: string
}

export interface ILoadCustomerList {
  loadAll: () => Promise<LoadCustomerListResponse[]>
}
