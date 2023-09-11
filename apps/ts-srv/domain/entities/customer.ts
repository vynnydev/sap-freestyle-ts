export namespace sap.cap.devs {
  export interface IUser extends IManaged {
    ID: number
    firstName: string
    lastName: string
    dateOfBirth: string
    age: number
    address: string
  }

  export enum Entity {
    User = "sap.cap.devs.User",
  }

  export enum SanitizedEntity {
    User = "User"
  }
}

export namespace CustomerService {
  export interface IUser {
    ID: number
    firstName: string
    lastName: string
    dateOfBirth: string
    age: number
    address: string
  }

  export enum ActionCreateUser {
    name = "createUser",
  }

  export enum ActionUpdateUser {
    name = "updateUser",
    paramUser = "customer",
    paramID = "id",
  }

  export interface IUpdateUserParams {
    customer: IUser;
    id: number;
  }

  export enum Entity {
    User = "sap.cap.devs.User",
  }

  export enum SanitizedEntity {
    User = "User"
  }
}

export interface IManaged {
  createdAt?: Date
  createdBy?: string
  modifiedAt?: Date
  modifiedBy?: string
}

export interface ITemporal {
  validFrom: Date;
  validTo: Date;
}

export enum Entity {
  Cuid = "cuid",
  Managed = "managed",
  Temporal = "temporal",
}

export enum SanitizedEntity {
  Cuid = "Cuid",
  Managed = "Managed",
  Temporal = "Temporal",
}