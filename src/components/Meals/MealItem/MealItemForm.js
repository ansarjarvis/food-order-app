import React, { useRef } from "react";
import Input from "../../General UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const enteredInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = enteredInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    } else {
      props.onAddCart(enteredAmountNumber);
    }
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        label="Amount"
        ref={enteredInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
