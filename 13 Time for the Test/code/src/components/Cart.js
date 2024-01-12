import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MenuItemList from "../components/MenuItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cartItems.length == 0 ? (
        <h2 className="m-4 font-bold">No items Found in Cart</h2>
      ) : (
        <div className="w-6/12 m-auto">
          <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
            Clear Cart
          </button>
          <MenuItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
