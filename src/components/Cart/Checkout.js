import { useRef } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPost = postInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPost,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" required />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" required />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postInputRef} type="text" id="postal" required />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" required />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
