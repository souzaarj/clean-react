import { HttpStatusCode, HttpPostClient } from '@/data/protocols/http'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  result: HttpPostClient.Result= {
    statusCode: HttpStatusCode.noContent
  }

  async post (params: HttpPostClient.Params): Promise<HttpPostClient.Result> {
    this.url = params.url
    this.body = params.body
    return this.result
  }
}
