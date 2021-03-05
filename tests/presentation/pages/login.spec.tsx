import React from 'react'
import { render } from '@testing-library/react'
import Login from '@/presentation/pages/login'

describe('Name of the group', () => {
  test('should not render spinner and error on start', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})
