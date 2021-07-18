import * as React from 'react'
import {render, screen} from '@testing-library/react'
// 🐨 you'll need to import the fireEvent utility from react-testing-library

import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  render(<FavoriteNumber />)
  const input = screen.getByLabelText(/favorite number/i)

  // 🐨 let's use fireEvent.change to fire a change event on the input to change the value to 10

  // 🐨 assert that the message that number is invalid is shown.
})

// disabled for the purpose of this lesson.
/*
eslint
  no-unused-vars: "off"
*/
