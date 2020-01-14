import React, { Component } from "react";
import { CartContext } from "./CartContext";

class Shop extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {context => {
          return (
            <div>
              <div className="card">
                <img
                  src="https://dummyimage.com/200x100/000/ced0f5"
                  alt="Avatar"
                />
                <div className="container">
                  <h4>
                    <b>DVD</b>
                  </h4>
                  <p>Music</p>
                </div>
                <button data-testid="add" onClick={context.incr}>add</button>
              </div>
            </div>
          );
        }}
      </CartContext.Consumer>
    );
  }
}

export default Shop;
