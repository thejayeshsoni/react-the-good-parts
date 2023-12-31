import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // always subscribe to the small portion/ specific portion of the store.
  const cartItems = useSelector((store) => store?.cart?.items);

  /**
   * Never do like - because there is no sense in subscribing, the whole store in one go.
   *  const store = useSelector((store)=>store);
   *  const cartItems = store.cart.items;
   */

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="px-4 py-1 bg-green-100 m-4 rounded-xl hover:shadow-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="text-2xl">
          Your cart is Empty. Please add some Items to cart.
        </h1>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
