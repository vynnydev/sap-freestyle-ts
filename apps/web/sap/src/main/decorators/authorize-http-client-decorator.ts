/* eslint-disable no-useless-constructor */
import { IHttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'

export class AuthorizeHttpClientDecorator implements IHttpClient {
  constructor(private readonly httpClient: IHttpClient) {}

  async request(data: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.httpClient.request(data)
    return httpResponse
  }
}
