export interface ICreateCustomerDTO {
  ID: number
  firstName: string
  lastName: string
  dateOfBirth: string
  age: number
  address: string
}

export interface IUpdateCustomerDTO {
  firstName?: string
  lastName?: string
  dateOfBirth?: string
  age?: number
  address?: string
} 

export interface ICustomerResponse {
  ID: number
  firstName: string
  lastName: string
  dateOfBirth: string
  age: number
  address: string
}