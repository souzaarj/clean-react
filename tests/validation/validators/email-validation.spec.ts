import { InvalidEmailError } from '@/validation/errors/InvalidEmailError'
import faker from 'faker'
import { EmailValidation } from '@/validation/validators'

describe('EmailValidation', () => {
  test('should return error if e-mail is invalid', () => {
    const sut = new EmailValidation(faker.random.word())
    const error = sut.validate('')
    expect(error).toEqual(new InvalidEmailError())
  })
})
