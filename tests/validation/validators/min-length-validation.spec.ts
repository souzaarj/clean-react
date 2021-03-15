import { MinLengthValidation } from '@/validation/validators'
import { MinLengthError } from '@/validation/errors'
import faker from 'faker'

describe('MinLengthValidation', () => {
  test('should return error if values is invalid', () => {
    const sut = new MinLengthValidation(faker.random.word(), 5)
    const error = sut.validate('123')
    expect(error).toEqual(new MinLengthError())
  })

  test('should return null if value is valid', () => {
    const sut = new MinLengthValidation(faker.random.word(), 5)
    const error = sut.validate('12345')
    expect(error).toBeFalsy()
  })
})
