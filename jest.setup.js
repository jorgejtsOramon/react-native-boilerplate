// jest.setup.js

// add some helpful assertions
require('jest-extended');
require('jest-dom/extend-expect');

// this is basically: afterEach(cleanup)
require('react-testing-library/cleanup-after-each');
