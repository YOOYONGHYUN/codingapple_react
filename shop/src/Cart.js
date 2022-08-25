import React, { useState } from "react";

export default function Cart(props) {
  console.log(props.cart);

  return (
    <div>
      <ul>
        {props.cart.map((cart, i) => (
          <li>
            {cart}
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
