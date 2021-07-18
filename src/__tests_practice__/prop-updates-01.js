import * as React from 'react'
import user from '@testing-library/user-event'
import {render, screen} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  // 🐨 you'll need the rerender function from the object returned by render method.
  render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i)
  user.type(input, '10')
  expect(screen.getByRole('alert')).toHaveTextContent(/the number is invalid/i)

  // 🐨 call rerender with the FavoriteNumber and a max prop of 10.
  // 🐨 verify that the 'error-message' node is not rendered.
})
