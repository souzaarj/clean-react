import React from 'react'
import { render } from '@testing-library/react'
import Login from '@/presentation/pages/login'

describe('Name of the group', () => {
  test('should start with initial state', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(errorWrap.childElementCount).toBe(0)
    expect(submitButton.disabled).toBeTruthy()
  })
})
