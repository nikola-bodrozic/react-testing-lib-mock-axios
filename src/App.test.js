import { render, screen, fireEvent, cleanup, waitFor, getAllByTestId } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios')

const getApiResponse = {
  data: [
    { id: 1, name: "testLeanne" },
    { id: 2, name: "testName" }
  ]
}

describe('App component', () => {
  test('it displays a row for each user', async () => {

    const mockCall = axios.get.mockResolvedValue(getApiResponse);
    const { debug, getByTestId, getAllByTestId } = render(<App />);
    expect(getByTestId('loader')).toBeInTheDocument()
    //debug() // print initial DOM
    // wait for DOM to update after axios get
    await waitFor(() => getByTestId('user-list'))
    //debug() // print new DOM
    const fakeUsers = getAllByTestId('user-item')
    expect(fakeUsers).toHaveLength(2)
    // The mock function is called once
    expect(mockCall.mock.calls.length).toBe(1);
    // first argument of the first call
    expect(mockCall.mock.calls[0][0]).toBe('https://jsonplaceholder.typicode.com/users')

  });
});
