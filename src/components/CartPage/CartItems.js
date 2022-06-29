import React,{useEffect } from "react";
import "../../styles/cartItems.css";
export default function CartItems({ cartItems }) {
  
 const [total , setTotal] = React.useState(0)
  let items = cartItems.cartItems;
  

  function totalPrice() {
    let total = 0;
    items.forEach(ele => {
      total = total + ele.price* ele.quantity
    });
    setTotal(total);
    console.log(total);
    
  }
  
  useEffect(() => {
    totalPrice();
  }, [items]);

  return (
    <>
      <div className="cartItems-container">
        <div className="cartItems-container-inner">
          <div className="cartItems-shopping-cart">
            <p className="cartItems-shopping-cart-title">Shopping Cart</p>
            <div>
              <button
                className="cartItems-shopping-button"
                onClick={() => cartItems.deleteAll()}
              >
                Deselect all items
              </button>
            </div>
          </div>
          <hr className="cartItems-line"></hr>
          {/* -------------------------------- here i'll map the cart items */}
          {cartItems.cartItems.length === 0
            ?<div className="nocartItems-container">
                <div className="nocartItems-container-inner">Your Amazon Cart is empty.</div>
               
            </div>
            : cartItems.cartItems.map((ele) => {
                return (
                  <div>
                    <div className="cartItems-items-container">
                      <div className="cartItems-items-img">
                        <img
                          src={ele.product}
                          alt=""
                          style={{ height: "190px", width: "190px" }}
                        />
                      </div>
                      <div className="cartItems-items-name">
                        <p style={{ margin: " 30px 10px 10px 3px" }}>
                          {ele.name}
                        </p>

                        <p
                          style={{
                            fontSize: "10px",
                            color: "green",
                            margin: "3px",
                          }}
                        >
                          {" "}
                          In Stock
                        </p>
                        <p
                          style={{
                            fontSize: "10px",
                            margin: "4px",
                            color: "#565959F",
                          }}
                        >
                          Eligible for free shipping
                        </p>
                        <div style={{ display: "flex" }}>
                          <select
                            name="qty"
                            id="qty"
                            className="cartItems-select"
                            onChange={(event) =>
                              cartItems.quantityUpdate(ele, event)
                            }
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                          </select>
                          <div>
                            <button
                              className="cartItems-delete-item"
                              onClick={() => cartItems.deleteOne(ele)}
                            >
                              | Delete | See more Like this
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="cartItems-price">
                        <p>{ele.price * ele.quantity}</p>
                      </div>
                    </div>
                    <hr className="cartItems-line"></hr>
                  </div>
                );
              })}
          <div className="cartItems-total-price" >
           SubTotal : {total}
          </div>
        </div>
      </div>
    </>
  );
}
