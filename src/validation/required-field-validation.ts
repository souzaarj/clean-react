import { RequiredFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/filed-validation'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (value: string): Error {
    return new RequiredFieldError()
  }
}
