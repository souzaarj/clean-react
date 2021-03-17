import { ValidationBuilder, ValidationComposite } from '@/validation/validators'

export const makeLoginValidationComposite = (): ValidationComposite => {
  return ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(3).build()
  ])
}
