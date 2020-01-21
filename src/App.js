import React from 'react';
import './App.css';

import Shop from './components/shop';
import Header from './components/header';
import RestShop from './components/restshop'

import CartContextProvider from './context/CartContext';

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
