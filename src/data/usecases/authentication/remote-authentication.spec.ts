import { HttpPostClientSpy } from './../../tests/mocks/mock-http-client'
import { RemoteAuthentication } from '../../tests/usecases/remote-authentication'

type SutTypes ={
  httpPostClientSpy: HttpPostClientSpy
  sut: RemoteAuthentication
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('should call HttpClient with correct url', async () => {
    const url = 'any_url'
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
