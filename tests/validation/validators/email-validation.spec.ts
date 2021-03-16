import { InvalidEmailError } from '@/validation/errors/InvalidEmailError'
import { EmailValidation } from '@/validation/validators'
import faker from 'faker'

const makeSut = (): EmailValidation => new EmailValidation(faker.database.column())

describe('EmailValidation', () => {
  test('should return error if e-mail is invalid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.word())
    expect(error).toEqual(new InvalidEmailError())
  })

  test('should return null if e-mail is valid', () => {
    const sut = makeSut()
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })
})
