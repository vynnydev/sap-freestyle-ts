/* eslint-disable no-useless-constructor */
import { IHttpClient, HttpStatusCode } from '../protocols/http'
import { ISaveCustomer } from '@/domain/application/usecases'
import { AccessDeniedError, UnexpectedError } from '@/domain/application/errors'
import { RemoteSaveCustomerParams, RemoteSaveCustomerResponse } from './dtos'

export class RemoteSaveCustomer implements ISaveCustomer {
  constructor(
    private readonly url: string,
    private readonly httpClient: IHttpClient<RemoteSaveCustomerResponse>,
  ) {}

  async save(
    params: RemoteSaveCustomerParams,
  ): Promise<{ value: RemoteSaveCustomerResponse } | undefined> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'put',
      body: params,
    })

    const remoteCustomerResult = httpResponse?.body?.value
    switch (httpResponse.statusCode) {
      case HttpStatusCode.noContent:
        return { value: {} }
      case HttpStatusCode.ok:
        return remoteCustomerResult
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      default:
        throw new UnexpectedError()
    }
  }
}
