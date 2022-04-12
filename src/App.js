import React, { useState } from "react";
import Amazon from "../src/Components/Cart/Amazon";
import Navbar from "../src/Components/Cart/Navbar";
import Cart from "../src/Components/Cart/Cart";


const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1)
      return 0;
    setCart([...cart, item]);
    console.log(cart())
  };


  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </>
  );
};

export default App;