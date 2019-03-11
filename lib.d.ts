import * as React from 'react';
import { render, wait } from 'react-testing-library';

// extends
import 'react-testing-library/extend-expect';
interface ExtendedMatchers extends jest.Matchers<void> {
  toHaveTextContent: (htmlElement: string) => object;
  toBeInTheDOM: () => void;
}
