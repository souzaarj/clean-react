import { HttpPostClient } from '@/data/protocols/http-post-client'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: object
  async post (params: HttpPostClient.Params): Promise<void> {
    this.url = params.url
    this.body = params.body
  }
}
