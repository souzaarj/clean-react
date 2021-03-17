import { EmailValidation, MinLengthValidation, RequiredFieldValidation, ValidationBuilder as sut } from '@/validation/validators'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const field = faker.database.column()
    const validation = sut.field(field).required().build()
    expect(validation).toEqual([new RequiredFieldValidation(field)])
  })

  test('should return EmailValidation', () => {
    const field = faker.database.column()
    const validation = sut.field(field).email().build()
    expect(validation).toEqual([new EmailValidation(field)])
  })

  test('should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.random.number()
    const validation = sut.field(field).min(length).build()
    expect(validation).toEqual([new MinLengthValidation(field, length)])
  })

  test('should return a list of validations', () => {
    const field = faker.database.column()
    const length = faker.random.number()
    const validation = sut.field(field).required().min(length).email().build()
    expect(validation).toEqual(
      [
        new RequiredFieldValidation(field),
        new MinLengthValidation(field, length),
        new EmailValidation(field)
      ]
    )
  })
})
