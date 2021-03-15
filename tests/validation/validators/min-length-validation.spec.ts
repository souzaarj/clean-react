import { MinLengthValidation } from '@/validation/validators'
import { MinLengthError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (): MinLengthValidation => new MinLengthValidation(faker.random.word(), 5)

describe('MinLengthValidation', () => {
  test('should return error if values is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new MinLengthError())
  })

  test('should return null if value is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})
