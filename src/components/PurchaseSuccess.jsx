import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/slice";

const PurchaseSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Clear cart after purchase
        dispatch(clearCart());

        // Auto redirect after 5 seconds
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, [dispatch, navigate]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-6">
            <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg w-full">

                <div className="text-green-500 text-6xl mb-4">✔</div>

                <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    Purchase Successful!
                </h2>

                <p className="text-gray-600 mb-6">
                    Thank you for shopping with us.
                    Your order has been placed successfully.
                </p>

                <button
                    onClick={() => navigate("/")}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                    Continue Shopping
                </button>

                <p className="text-sm text-gray-500 mt-4">
                    Redirecting to home page in 5 seconds...
                </p>
            </div>
        </div>
    );
};

export default PurchaseSuccess;