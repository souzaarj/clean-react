import { EmailValidation, RequiredFieldValidation, ValidationBuilder as sut } from '@/validation/validators'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const validation = sut.field('any_field').required().build()
    expect(validation).toEqual([new RequiredFieldValidation('any_field')])
  })
  test('should return EmailValidation', () => {
    const validation = sut.field('any_field').email().build()
    expect(validation).toEqual([new EmailValidation('any_field')])
  })
})
