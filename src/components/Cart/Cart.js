import React from "react";
import Modal from "../General UI/Modal";
import classes from "./Cart.module.css";

const cartItem = (
  <ul className={classes["cart-items"]}>
    {[{ id: "c3", name: "shushi", amount: "2", price: "12.45" }].map((item) => {
      return <li>{item.name}</li>;
    })}
  </ul>
);

const Cart = (props) => {
  return (
    <Modal onClose={props.onCloseCart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>34.34</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button-all"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
