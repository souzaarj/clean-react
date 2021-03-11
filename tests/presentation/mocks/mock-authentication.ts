import { mockAccountModel } from '@/tests/domain/mocks'
import { Authentication } from '@/domain/usecases/authentication'

export class AuthenticationSpy implements Authentication {
  params: Authentication.Params
  result = mockAccountModel()
  async auth (params: Authentication.Params): Promise<Authentication.Result> {
    this.params = params
    return this.result
  }
}
