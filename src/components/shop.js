import React, { Component } from "react";
import Product from "./product";

class Shop extends Component {
  render() {
    return (
	    <div>
	      <Product name="DVD" id="1"/>
	      <Product name="Mouse" id="2"/>
	    </div>
    );
  }
}

export default Shop;
