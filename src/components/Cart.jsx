import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart, updateQuant } from "../Redux/slice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader } from "lucide-react";

const Cart = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)
    const cartSelector = useSelector(
        (state) => state.cart.item
    );

    const dispatch = useDispatch();

    if (cartSelector.length === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center text-gray-600 text-xl">
                Your cart is empty 🛒
            </div>
        );
    }
    let totalPrice = 0
    let totalItems = 0
    cartSelector.map((item) => {
        totalPrice += item.price * (item.quantity ? item.quantity : 1) * 90.91
        totalItems = item.quantity ? totalItems += item.quantity : totalItems += 1
    })

    const updateQuantity = (id, q) => {
        const quantity = parseInt(q) > 1 ? parseInt(q) : 1;
        dispatch(updateQuant({ id, quantity }));
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex justify-between items-center  "><h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
                <button
                    onClick={() => { dispatch(clearCart()); toast("cart is empty now") }}
                    className="w-50 py-2 cursor-pointer bg-gray-800 text-white  rounded-xl hover:bg-gray-900"
                >
                    Clear Cart
                </button>
            </div>

            <div className="space-y-4">
                {cartSelector.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center bg-white shadow-md rounded-xl p-4"
                    >
                        <div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-600">₹{Math.floor(item.price * (item.quantity ? item.quantity : 1) * 90.91)}</p>
                            <p className="text-gray-500">Qty: {item.quantity}</p>
                        </div>
                        <div className="flex gap-2">
                            <input
                                className="outline-1 rounded-md p-2 px-5 w-32"
                                onChange={(e) => updateQuantity(item.id, e.target.value)}
                                value={item.quantity ? item.quantity : 1}
                                type="number" />

                            <button
                                onClick={() => dispatch(removeItem(item))}
                                className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary Section */}
            <div className="mt-8 bg-white shadow-lg rounded-xl p-6">
                <div className="flex justify-between mb-2">
                    <span>Total Items:</span>
                    <span>{totalItems}</span>
                </div>

                <div className="flex justify-between mb-4">
                    <span className="font-semibold">Total Price:</span>
                    <span className="font-bold text-blue-600">
                        ₹{(totalPrice).toFixed(2)}
                    </span>
                </div>
                <button
                    onClick={() => {
                        setLoader(true);
                        setTimeout(() => {
                            navigate("/success");
                        }, 5000);
                    }}
                    disabled={loader}
                    className="w-full cursor-pointer bg-gray-800 text-white py-2 rounded-xl hover:bg-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loader ? (
                        <Loader className="animate-spin mx-auto" size={20} />
                    ) : (
                        "Buy Now"
                    )}
                </button>

            </div>
        </div>
    );
};

export default Cart;