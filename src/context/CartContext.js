import React, { Component, createContext } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {

  state = {
    numOfPrducts: 0
  }
  incr = () => {
    this.setState({numOfPrducts:this.state.numOfPrducts+1})
  }

  render() { 
    return (
      <CartContext.Provider value={{...this.state, incr:this.incr}}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
 
export default CartContextProvider;