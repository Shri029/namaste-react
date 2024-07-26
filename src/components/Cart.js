import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const dispatch = useDispatch();

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    //Subscribe to right portion of store, improves performance.
    const cartItems = useSelector((store) => store.cart.items);
    console.log("Carts",cartItems);
    return (
            <div className="text-center m-10 p-10">
                <h1 className="text-2xl font-bold">Cart</h1>
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
                    Clear Cart
                </button>
                { cartItems.length === 0 && <h1> Cart is empty. Add items to cart!!</h1>}
                <div className="w-6/12 m-auto rounded-lg">
                    {cartItems.map((item) => <ItemList items={item}/>)}
                </div>
            </div>
            );
};

export default Cart;