import classes from "./HeaderCartButton.module.css";
import { Fragment } from 'react';
import mealImg from "../../assets/meals.jpg";
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = props => {
    return <button className={classes.button}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            3
        </span>
    </button>
}

export default HeaderCartButton;