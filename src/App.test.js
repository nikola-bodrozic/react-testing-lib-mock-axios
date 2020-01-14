import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

test('renders number of items in cart', () => {
  const { getByText, getByTestId } = render(<App />);
  expect(getByTestId("cart")).toBeInTheDocument();
  expect(getByTestId('cart')).toHaveTextContent('0')
  expect(getByText(/your cart has/i)).toBeInTheDocument();
  fireEvent.click(getByTestId('add'));
  expect(getByTestId('cart')).toHaveTextContent('1')
});

// bad use mock
// it('gets users from api', async () => {
//   const { getByText, getByTestId } = render(<App />);
//   await wait(() => getByText('Leanne Graham'))
//   const firstUser = getByText('Leanne Graham')
//   expect(firstUser).toBeDefined()
// })

