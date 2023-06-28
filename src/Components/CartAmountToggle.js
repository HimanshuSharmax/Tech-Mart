import React from "react";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() => setDecrease()}>
          <AiFillMinusSquare />
        </button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setIncrease()}>
          <AiFillPlusSquare />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;