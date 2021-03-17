import { ValidationBuilder, ValidationComposite } from '@/validation/validators'
import { makeLoginValidationComposite } from '@/main/factories/pages/login-validation-composite-factory'

describe('LoginValidationFactory', () => {
  test('should make ValidationComposite with correct validations', () => {
    const composite = makeLoginValidationComposite()
    expect(composite).toEqual(ValidationComposite.build([
      ...ValidationBuilder.field('email').required().email().build(),
      ...ValidationBuilder.field('password').required().min(3).build()
    ]))
  })
})
