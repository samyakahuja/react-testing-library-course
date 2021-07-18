import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i)

  // 🐨 let's use userEvent.type instead of fireEvent.change
  fireEvent.change(input, {target: {value: '10'}})
  expect(screen.getByRole('alert')).toHaveTextContent(/the number is invalid/i)
})
