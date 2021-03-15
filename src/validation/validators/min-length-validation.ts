import { MinLengthError } from '@/validation/errors/MinLengthError'
import { FieldValidation } from '@/validation/protocols/filed-validation'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (value: string): Error {
    return value.length >= this.minLength ? null : new MinLengthError()
  }
}
