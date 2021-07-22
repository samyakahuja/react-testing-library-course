// 🐨 use jest.mock to mock the '../api' module and return a fake `loadGreeting`:

// 👀 notice this as an async test:
test('loads greeting on click', async () => {
  // 🐨 make an assertion that your mocked loadGreeting function was called once
  // and that it was called with the value you set to the name input's value.
  //
  // 🐨 use react-testing-library's `waitFor` utility to wait until the `greeting`
  // node has the correct text content.
})

// disabled for the purpose of this lesson.
/*
eslint
  jest/prefer-todo: "off",
*/
