import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [cardIsShow, setCardIsShow] = useState(false);

  const showCardHandler = () => {
    setCardIsShow(true);
  };
  const hideCardHandler = () => {
    setCardIsShow(false);
  };
  return (
    <CartProvider>
      {cardIsShow && <Cart onClose={hideCardHandler} />}
      <Header onShowCard={showCardHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
