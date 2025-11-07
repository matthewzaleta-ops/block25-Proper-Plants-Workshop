import Plants from "./Plants/Plants";
import PLANTS from "./data";
import Cart from "./Cart/Cart";
import { useState } from "react";

function App() {
  const [plants, setPlants] = useState(PLANTS);
  const [cart, setCart] = useState([]);

  const addToCart = (plantToAdd) => {
    const itemExists = cart.find((cartItem) => {
      return cartItem.id === plantToAdd.id;
    });

    if (itemExists) {
      const updatedCart = cart.map((cartItem) => {
        return cartItem.id === plantToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem;
      });
      setCart(updatedCart);
    } else {
      const newItem = { ...plantToAdd, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (plantToRemove) => {
    const updateCart = cart.map((cartItem) => {
      return cartItem.id === plantToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
    const filterCart = updateCart.filter((cartItem) => {
      return cartItem.quantity > 0;
    });
    setCart(filterCart);
  };

  return (
    <div>
      <h1>Proper Plants</h1>
      <hr />
      <main>
        <Plants plants={plants} addToCart={addToCart} />
        <hr />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </div>
  );
}

export default App;
