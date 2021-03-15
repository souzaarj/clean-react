import { MinLengthValidation } from '@/validation/validators'
import { MinLengthError } from '@/validation/errors'

describe('MinLengthValidation', () => {
  test('should return error if values is invalid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new MinLengthError())
  })
})
