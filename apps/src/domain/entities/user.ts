export namespace sap.cap.devs {
  export interface IUser extends IManaged {
    ID: number
    firstName: string
    lastName: string
    dateOfBirth: string
    age: number
    address: string
  }
}

export interface IManaged {
  createdAt?: Date
  createdBy?: string
  modifiedAt?: Date
  modifiedBy?: string
}