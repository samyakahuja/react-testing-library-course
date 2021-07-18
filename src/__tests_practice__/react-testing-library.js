import * as React from 'react'
import ReactDOM from 'react-dom'
import {getQueriesForElement} from '@testing-library/dom'
// 🐨 you'll need to import the render function from 'react-testing-library'
// 💯 import screen and use that instead
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  const {getByLabelText} = getQueriesForElement(div)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')

  // 💯 use screen.debug() and see what happens
})

// disabled for the purpose of this lesson.
/*
eslint
  testing-library/no-dom-import: "off",
  testing-library/prefer-screen-queries: "off"
*/
