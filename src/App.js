import React from 'react';
import './App.css';

import Shop from './shop';
import Header from './header';
import RestShop from './restshop'

import CartContextProvider from './CartContext';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Header />
        <Shop />
        <RestShop />
      </CartContextProvider>
    </div>
  );
}

export default App;
