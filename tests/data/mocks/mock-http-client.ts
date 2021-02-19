import { HttpStatusCode, HttpPostClient } from '@/data/protocols/http'

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  result: HttpPostClient.Result<R>= {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostClient.Params<T>): Promise<HttpPostClient.Result<R>> {
    this.url = params.url
    this.body = params.body
    return this.result
  }
}
