import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enterName = nameInputRef.current.value;
    const enterStreet = streetInputRef.current.value;
    const enterPostal = postalInputRef.current.value;
    const enterCity = cityInputRef.current.value;

    const enterNameIsValid = !isEmpty(enterName);
    const enterStreetIsValid = !isEmpty(enterStreet);
    const enterPostalIsValid = !isEmpty(enterPostal);
    const enterCityIsValid = isFiveChars(enterCity);

    setFormInputValidity({
      name: enterNameIsValid,
      street: enterStreetIsValid,
      city: enterCityIsValid,
      postalCode: enterPostalIsValid,
    });

    const formIsValid =
      enterNameIsValid &&
      enterStreetIsValid &&
      enterPostalIsValid &&
      enterCityIsValid;
    if (!formIsValid) {
      return;
    }
  };

  const nameControlClasse = `${classes.control} ${formInputValidity.name ? '': classes.invalid}`
  const streetControlClasse = `${classes.control} ${formInputValidity.street ? '': classes.invalid}`
  const postalControlClasse = `${classes.control} ${formInputValidity.postalCode ? '': classes.invalid}`
  const cityControlClasse = `${classes.control} ${formInputValidity.city ? '': classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasse}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasse}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p>Please enter a valid street!</p>}

      </div>
      <div className={postalControlClasse}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputValidity.postalCode && <p>Please enter a valid postal!</p>}

      </div>
      <div className={cityControlClasse}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputValidity.city && <p>Please enter a valid city!</p>}

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
