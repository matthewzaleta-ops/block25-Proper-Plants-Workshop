const Cart = ({ cart, addToCart, removeFromCart }) => {
  return (
    <div>
      {cart.length === 0 ? (
        <h3>Your cart is empty</h3>
      ) : (
        <div>
          <h3>Your Cart</h3>
          {cart.map((cartItem) => {
            return (
              <div key={cartItem.id}>
                <li>
                  {cartItem.name}

                  <div>
                    Quantity: {cartItem.quantity}
                    <button
                      onClick={() => {
                        addToCart(cartItem);
                      }}
                    >
                      +
                    </button>
                    <button
                      onClick={() => {
                        removeFromCart(cartItem);
                      }}
                    >
                      -
                    </button>
                  </div>
                </li>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
