import "./App.css";
import AmHeader from "./components/AmHeader";
// import Content from './components/Content';
import React from "react";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SubHeader from "./components/SubHeader";
import GraphicCard from "./components/SubHeaderOpt/GraphicCard";
import Phones from "./components/SubHeaderOpt/Phones";
import GiftIdeas from "./components/SubHeaderOpt/GiftIdeas";
import CartItems from "./components/CartPage/CartItems";
import Login from "./components/LoginSign/Login";
import SignUp from "./components/LoginSign/SignUp";
function App() {
  const [input, setInput] = React.useState("");
  const [cartItems, setCartItems] = React.useState([]);
  console.log(cartItems);

  function addToCart(product) {
    console.log("Product added into the addToCart function");
    console.log(product);
    const productInCart = cartItems.find((ele) => ele.id === product.id);
    if (productInCart) {
      if (productInCart.quantity < productInCart.totalQuants) {
        setCartItems(
          cartItems.map((ele) =>
            ele.id === product.id
              ? { ...productInCart, quantity: productInCart.quantity + 1 }
              : ele
          )
        );
      }
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function deleteAll() {
    console.log("Removing all");
    setCartItems([]);
  }

  function quantityUpdate(product, event) {
    console.log("Updating quantity");
    // console.log(product , "receiving from the children");
    // console.log(event.target.value);
    // product.quantity = event.target.value;

    const findIndex = cartItems.findIndex((ele) => ele.id === product.id);
    //find the id
    //make copy of crat item
    //manipulate the copy items

    const copyCart = [...cartItems];
    copyCart[findIndex].quantity = event.target.value;
    // console.log(copyCart,findIndex);
    setCartItems(copyCart);
    console.log(cartItems);
  }

  function deleteOne(product) {
    console.log("Removing one");
    setCartItems(cartItems.filter((ele) => ele.id !== product.id));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <AmHeader headerProp={{ setInput, cartItems }} />
        <SubHeader />
        {/* <Banner/> */}
        <Routes>
          <Route path="/" element={<Cart input={{ input, addToCart }} />} />
          <Route path="/phones" element={<Phones phones={addToCart} />} />
          <Route
            path="/graphics"
            element={<GraphicCard graphic={addToCart} />}
          />
          <Route path="/giftideas" element={<GiftIdeas gift={addToCart} />} />
          <Route
            path="/cartitems"
            element={
              <CartItems
                cartItems={{ cartItems, deleteAll, deleteOne, quantityUpdate }}
              />
            }
          />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
