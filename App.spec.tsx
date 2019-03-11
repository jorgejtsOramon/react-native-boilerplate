import * as React from 'react';
import { render } from 'react-testing-library';

import App from './App';

test('renders correctly', () => {
  const { getByText } = render(<App />);
  expect(
    getByText('Open up App.js to start working on your ass!'),
  ).toBeInTheDocument();
});
