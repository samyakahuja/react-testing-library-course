import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {BrowserRouter} from 'react-router-dom'
import {Main} from '../main'

// 💯 create a helper render function to decrease duplicate code

test('main renders about and home and I can navigate to those pages', () => {
  // 🐨 load the home page by default
  // 🐨 verify that we are on the home page
  // 🐨 navigate to the about page
  // 🐨 verify that we are on the about page
})

test('landing on a bad page shows no match component', () => {
  // 🐨 load a bad page
  // 🐨 verify that no match component is shown
})

// disabled for the purpose of this lesson.
/*
eslint
  jest/prefer-todo: "off",
  no-unused-vars: "off"
*/
