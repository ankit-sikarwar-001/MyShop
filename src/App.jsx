import About from "./components/About"
import Cart from "./components/cart"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ProductCard from "./components/ProductCard"
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import PurchaseSuccess from "./components/PurchaseSuccess"


function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />

      <Routes>

        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contact />} />
        {/* <button onClick={() => dispatch(clearCart())} className="p-5 rounded-2xl bg-black text-white m-2 cursor-pointer ">Clear Cart</button>
          <div > */}
        <Route path="/" element={<ProductCard />} />
        <Route path="/success" element={<PurchaseSuccess />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
