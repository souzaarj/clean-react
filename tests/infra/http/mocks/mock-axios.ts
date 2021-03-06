import { HttpPostClient } from '@/data/protocols/http'
import axios from 'axios'
import faker from 'faker'

export const mockHttpResponse = (): any => ({
  data: faker.random.objectElement(),
  status: faker.random.number()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>
  mockedAxios.post.mockResolvedValue(mockHttpResponse)
  return mockedAxios
}

export const mockPostRequest = (): HttpPostClient.Params<any> => ({
  url: faker.internet.url(),
  body: faker.random.objectElement()
})
