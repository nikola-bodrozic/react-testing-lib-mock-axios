import React, { Component } from 'react';
import { CartContext } from './CartContext'
class Navbar extends Component {
  static contextType = CartContext

  render() {
    return (
      <CartContext.Consumer>
        {(context) => {
          const { numOfPrducts } = this.context;
          return (
            <nav>
              <ul>
                <li>your cart has <span data-testid="cart">{numOfPrducts}</span> items</li>
              </ul>
            </nav>
          )
        }
        }
      </CartContext.Consumer>
    );
  }
}

export default Navbar;