import classes from "./Header.module.css";
import { Fragment } from 'react';
import mealImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImg} alt="table full of delicous food" />
        </div>
    </Fragment>
}

export default Header;