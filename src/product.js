import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Product({name,id}) {
  const value = useContext(CartContext);
  const tid = `${name}-${id}`
  return (<div className="card">
    <h3>{name}</h3>
    <button data-testid={tid} onClick={value.incr}>add to cart</button>
  </div>)
}


