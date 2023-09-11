import cds from '@sap/cds'
import { Handler, Req, Param, Action } from 'cds-routing-handlers'
import { CustomerService } from '../domain/entities/customer'
import { IUpdateCustomerDTO, ICustomerResponse } from '../domain/entities/dtos/customer-dto'

/**
 * Function handler.
 *
 * @export
 * @class UpdateCustomer
 */
export class UpdateCustomer {
  // The @Param decorator imports a url-parameter defined in your function definition
  // The @Req decorator import the current request object
  @Action(CustomerService.ActionUpdateCustomer.name)
  public async execute(
    @Param(CustomerService.ActionUpdateCustomer.paramCustomer) customerId: CustomerService.ICustomer["ID"],
    @Req() req: IUpdateCustomerDTO
  ): Promise<ICustomerResponse> {
    console.log(`Action ${CustomerService.ActionUpdateCustomer.name} called`)
    return await cds.update(CustomerService.SanitizedEntity.Customer).with({ req }).where({ ID: customerId })
  }
}