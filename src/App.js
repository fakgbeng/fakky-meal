import React, { Fragment, useState } from 'react';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = function () {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
