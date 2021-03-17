import { FieldValidation } from '@/validation/protocols/filed-validation'

export class FieldValidationSpy implements FieldValidation {
  constructor (readonly field: string) {}
  error: Error = null
  validate (value: string): Error {
    return this.error
  }
}
