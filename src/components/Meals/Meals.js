import React, { Fragment } from "react";
import AvailablesMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = () => {
    return <Fragment>
        <MealsSummary/>
        <AvailablesMeals/>
    </Fragment>
}

export default Meals