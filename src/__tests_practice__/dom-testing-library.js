import * as React from 'react'
import ReactDOM from 'react-dom'
// 🐨 you'll need the getQueriesForElement function from 'dom-testing-library'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  // use getQueriesForElement with the `div` to get the "getByLabelText" query
  // use the "getByLabelText" query to get the input, then you can
  // remove the assertion on the label. (💯 use case-insensitive matching)
  expect(div.querySelector('input')).toHaveAttribute('type', 'number')
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number')
})

// disabled for the purpose of this lesson.
/*
eslint
  testing-library/no-dom-import: "off",
  testing-library/prefer-screen-queries: "off"
*/
