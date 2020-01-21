import React from "react";
import { render, wait } from '@testing-library/react';
import RestShop from './restshop'
import axios from 'axios';

jest.mock('axios') 

describe('gets users from mock', () => {
  it('fetches successfully data from mock', async () => {
    const mockCall = axios.get.mockResolvedValue({data:[{id:1, name:"testLeanne"}]});
    const { debug, getByText, getByTestId } = render(<RestShop />);
    // debug() // print DOM
    // wait for DOM to update
    await wait(() => getByTestId('resolved'))
    // debug()
    const firstUser = getByText('testLeanne')
    expect(firstUser).toBeDefined()
    // The mock function is called once
    expect(mockCall.mock.calls.length).toBe(1);
    // first argument of the first call
    expect(mockCall.mock.calls[0][0]).toBe('https://jsonplaceholder.typicode.com/users')
  });
});
