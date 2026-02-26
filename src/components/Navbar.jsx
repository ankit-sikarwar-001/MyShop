import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const cartSelector = useSelector((state) => state.cart.item)
    let totalItems = 0;
    cartSelector.map((item) => {
        totalItems = item.quantity ? totalItems += item.quantity : totalItems += 1
    })

    // console.log(selector)

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-2xl font-bold text-gray-800">MyShop</h1>
            <div >
                <ul className="flex justify-around w-[20vw] " >
                    <li className="cursor-pointer hover:text-red-300 hover:font-bold"><Link to={"/"}>Home </Link></li>
                    <li className="cursor-pointer hover:text-red-300 hover:font-bold"><Link to={"/about"}>About </Link></li>
                    <li className="cursor-pointer hover:text-red-300 hover:font-bold"><Link to={"/contacts"}>Contacts </Link></li>
                </ul>
            </div>
            <div className="relative cursor-pointer">
                <Link to={"/cart"}>
                    <ShoppingCart size={28} className="text-gray-700 hover:text-blue-600" />
                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                        {totalItems}
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;