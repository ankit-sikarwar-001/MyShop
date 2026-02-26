import { useDispatch, useSelector } from "react-redux";
import { addItems, removeItem } from "../Redux/slice";
import { useEffect } from "react";
import { fetchProducts } from "../Redux/productSlice";
import toast from "react-hot-toast";

const ProductCard = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    const productSelector = useSelector((state) => state.products.items)
    console.log(productSelector)
    const cartSelector = useSelector((state) => state.cart.item)


    return (
        <div className="flex justify-around flex-wrap items-center gap-y-5">
            {
                productSelector.length && productSelector.map((items, index) => (
                    <div key={index} className="max-w-sm bg-white shadow-lg rounded-2xl p-5 hover:shadow-xl transition duration-300">
                        <img
                            src={items.thumbnail}
                            alt="Product"
                            className="rounded-xl mb-4"
                        />

                        <h2 className="text-xl font-semibold text-gray-800">
                            {items.title}
                        </h2>

                        <p className="text-gray-600 mt-2">
                            {items.description}
                        </p>

                        <div className="flex justify-between items-center mt-4">
                            <span className="text-lg font-bold text-blue-600">₹{Math.floor(items.price * 90.91)}</span>
                        </div>

                        <div className="flex gap-3 mt-4">
                            {
                                cartSelector.find(cardItem => cardItem.id === items.id) ? <button onClick={() => { dispatch(removeItem(items)); toast.success("Item removed successfully") }} className="flex-1 bg-red-400 hover:bg-red-500 py-2 rounded-xl cursor-pointer font-medium">
                                    Remove from cart
                                </button> : <button onClick={() => { dispatch(addItems(items)); toast.success("Item added successfully") }} className="flex-1 bg-gray-300 hover:bg-gray-400 py-2 rounded-xl cursor-pointer font-medium">
                                    Add to Cart
                                </button>
                            }
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default ProductCard;