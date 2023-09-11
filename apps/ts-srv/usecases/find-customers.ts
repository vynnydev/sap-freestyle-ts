import cds from '@sap/cds'
import { Action } from 'cds-routing-handlers'
import { CustomerService } from '../domain/entities/customer'
import { ICustomerResponse } from '../domain/entities/dtos/customer-dto'

/**
 * Function handler.
 *
 * @export
 * @class CreateCustomer
 */
export class CreateCustomer {
  // The @Param decorator imports a url-parameter defined in your function definition
  // The @Req decorator import the current request object
  @Action(CustomerService.ActionCreateUser.name)
  public async execute(): Promise<ICustomerResponse> {
    console.log(`Action ${CustomerService.ActionCreateUser.name} called`)
    return await cds.read(CustomerService.SanitizedEntity.User)
  }
}