import { makeApiUrl } from '@/main/factories/http'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/decorators'
import { ILoadCustomerList } from '@/domain/application/usecases'
import { RemoteLoadCustomerList } from '@/data/usecases'

export const makeRemoteLoadCustomerList = (): ILoadCustomerList =>
  new RemoteLoadCustomerList(
    makeApiUrl('/customer/User'),
    makeAuthorizeHttpClientDecorator(),
  )
