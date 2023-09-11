/* eslint-disable no-useless-constructor */
import { IHttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, AccessDeniedError } from '@/domain/application/errors'
import { ILoadCustomerList } from '@/domain/application/usecases'
import { RemoteCustomerListResponse } from './dtos/remote-load-customer-list-dto'

export class RemoteLoadCustomerList implements ILoadCustomerList {
  constructor(
    private readonly url: string,
    private readonly httpClient: IHttpClient<RemoteCustomerListResponse[]>,
  ) {}

  async loadAll(): Promise<RemoteCustomerListResponse[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get',
    })

    const remoteCustomersResult = httpResponse.body?.value?.value || []
    // const response = remoteCustomersResult?.value
    console.log(remoteCustomersResult)
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteCustomersResult
      case HttpStatusCode.noContent:
        return []
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      default:
        throw new UnexpectedError()
    }
  }
}
