import { mockedAxios } from '@/tests/infra/mocks/http/mock-axios'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import faker from 'faker'

describe('AxiosHttpClient', () => {
  test('should call axios with correct URL', async () => {
    const sut = new AxiosHttpClient()
    const url = faker.internet.url()
    await sut.post({ url: url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
