import { makeApiUrl } from '@/main/factories/http'
import { makeAuthorizeHttpClientDecorator } from '@/main/factories/decorators'
import { ISaveCustomer } from '@/domain/application/usecases'
import { RemoteSaveCustomer } from '@/data/usecases'

export const makeRemoteSaveCustomer = (id: string): ISaveCustomer =>
  new RemoteSaveCustomer(
    makeApiUrl(`/customer/User/${id}`),
    makeAuthorizeHttpClientDecorator(),
  )
