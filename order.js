export default [
  {
    title: 'Render a React Component for Testing',
    src: ['./src/favourite-number.js'],
    practice: ['./src/__tests_practice__/react-dom.js'],
    final: ['./src/__tests__/react-dom.js'],
    links: ['https://reactjs.org/docs/react-dom.html#render'],
  },
  {
    title: 'Use Jest DOM for Improved Assertions',
    src: ['./src/favourite-number.js'],
    practice: ['./src/__tests_practice__/jest-dom.js'],
    final: ['./src/__tests__/jest-dom.js'],
    links: [
      'https://github.com/testing-library/jest-dom',
      './src/tests/setup-env.js',
    ],
  },
  {
    title: 'Use DOM Testing Library to Write More Maintainable React Tests',
    src: ['./src/favourite-number.js'],
    practice: ['./src/__tests_practice__/dom-testing-library.js'],
    final: ['./src/__tests__/dom-testing-library.js'],
    links: ['https://testing-library.com/docs/dom-testing-library/intro'],
  },
  {
    title: 'Use React Testing Library to Render and Test React Components',
    src: ['./src/favourite-number.js'],
    practice: ['./src/__tests_practice__/react-testing-library.js'],
    final: ['./src/__tests__/react-testing-library.js'],
    links: ['https://testing-library.com/docs/react-testing-library/intro'],
  },
  {
    title:
      'Test React Component Event Handlers with fireEvent from React Testing Library',
    src: ['./src/favourite-number.js'],
    practice: ['./src/__tests_practice__/state.js'],
    final: ['./src/__tests__/state.js'],
    links: [
      'https://testing-library.com/docs/dom-testing-library/api-events/#fireevent',
    ],
  },
  {
    title: 'Improve Test Confidence with the User Event Module',
    src: ['./src/favourite-number.js'],
    practice: ['./src/__tests_practice__/state-user-event.js'],
    final: ['./src/__tests__/state-user-event.js'],
    links: [
      'https://testing-library.com/docs/ecosystem-user-event/',
      'https://testing-library.com/docs/guide-events/',
    ],
  },
  {
    title: 'Test Prop Updates with React Testing Library',
    src: ['./src/favourite-number.js'],
    practice: ['./src/__tests_practice__/prop-updates-01.js'],
    final: ['./src/__tests__/prop-updates-01.js'],
    links: ['https://testing-library.com/docs/example-update-props'],
  },
  {
    title: 'Assert That Something is NOT Rendered with React Testing Library',
    src: ['./src/favourite-number.js'],
    practice: ['./src/__tests_practice__/prop-updates-02.js'],
    final: ['./src/__tests__/prop-updates-02.js'],
    links: [],
  },
  {
    title: 'Mock HTTP Requests with jest.mock in React Component Tests',
    src: ['./src/greeting-loader-01-mocking.js'],
    practice: ['./src/__tests_practice__/http-jest-mock.js'],
    final: ['./src/__tests__/http-jest-mock.js'],
    links: [
      'https://testing-library.com/docs/dom-testing-library/api-async#waitfor',
      'https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning',
    ],
  },
  {
    title: 'Test React Components that Use the react-router Router Provider',
    src: ['./src/main.js'],
    practice: ['./src/__tests_practice__/react-router-03.js'],
    final: ['./src/__tests__/react-router-03.js'],
    links: [
      'https://reactrouter.com/web/api/BrowserRouter',
      'https://developer.mozilla.org/en-US/docs/Web/API/History/pushState',
    ],
  },
  {
    title: 'The End',
    src: [],
    practice: [],
    final: [],
    links: [
      'https://kentcdodds.com/blog/common-mistakes-with-react-testing-library',
    ],
  },
]
