import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [cardIsShow, setCardIsShow] = useState(false);

  const showCardHandler = () => {
    setCardIsShow(true);
  };
  const hideCardHandler = () => {
    setCardIsShow(false);
  };
  return (
    <Fragment>
      {cardIsShow && <Cart onClose={hideCardHandler}/>}
      <Header onShowCard={showCardHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
