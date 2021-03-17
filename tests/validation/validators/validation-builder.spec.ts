import { EmailValidation, MinLengthValidation, RequiredFieldValidation, ValidationBuilder as sut } from '@/validation/validators'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const validation = sut.field('any_field').required().build()
    expect(validation).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('should return EmailValidation', () => {
    const validation = sut.field('any_field').email().build()
    expect(validation).toEqual([new EmailValidation('any_field')])
  })

  test('should return MinLengthValidation', () => {
    const validation = sut.field('any_field').min(5).build()
    expect(validation).toEqual([new MinLengthValidation('any_field', 5)])
  })
})
