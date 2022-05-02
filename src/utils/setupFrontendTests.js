import 'regenerator-runtime/runtime';
import '@testing-library/jest-dom';

import { setupServer } from 'msw/node';
import { setLogger } from 'react-query';

import { handlers } from './requestMock';

// This sets up mocks for rest calls
// see https://tkdodo.eu/blog/testing-react-query
export const server = setupServer(...handlers);

// Establish API mocking before all tests.
beforeAll(() => {
    server.listen();
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
    server.resetHandlers();
});
// Clean up after the tests are finished.
afterAll(() => {
    server.close();
});
// silence react-query errors
setLogger({
    log: console.log,
    warn: console.warn,
    error: () => {}
});