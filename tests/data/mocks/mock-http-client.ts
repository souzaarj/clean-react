import { HttpStatusCode, HttpPostClient } from '@/data/protocols/http'
import faker from 'faker'
export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  result: HttpPostClient.Result<any>= {
    statusCode: HttpStatusCode.ok,
    body: faker.random.uuid()
  }

  async post (params: HttpPostClient.Params<T>): Promise<HttpPostClient.Result<R>> {
    this.url = params.url
    this.body = params.body
    return this.result
  }
}
