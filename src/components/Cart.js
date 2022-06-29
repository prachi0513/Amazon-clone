import "../styles/cart.css";
import list from "../object.js";
import React from "react";
export default function Cart({ input }) {
  //  const [data , setData] = React.useState(list)
  // console.log(input.addToCart);
  let filterData = list.filter((ele) =>
    ele.type.includes(input.input.toLowerCase())
  );

  return (
    <>
      <div className="cart-box">
        {filterData.length === 0
          ? list.map((ele) => {
              return (
                <>
                
                  <div className="cart" key={ele.id}>
                    <p className="cart-name">{ele.name}</p>
                    <img src={`${ele.product}`} className="img" />
                    <strong className="cart-price">Rs.{ele.price}</strong>
                    <div>
                      <button
                        className="add-to-cart"
                        onClick={() => input.addToCart(ele)}
                      >
                        Add to Cart
                      </button>
                      {ele.totalQuants === 0 && (
                        <button className="nostock-btn">Out of stocks</button>
                      )}
                    </div>
                  </div>
                </>
              );
            })
          : filterData.map((ele) => {
              return (
                <>
               
                  <div className="cart" key={ele.id}>
                    <p className="cart-name">{ele.name}</p>
                    <img src={`${ele.product}`} className="img" />
                    <strong className="cart-price">Rs.{ele.price}</strong>
                    <div>
                      <button
                        className="add-to-cart"
                        onClick={() => input.addToCart(ele)}
                      >
                        {" "}
                        Add to Cart
                      </button>
                      {ele.totalQuants === 0 && (
                        <button className="nostock-btn">Out of stocks</button>
                      )}
                    </div>
                  </div>
                </>
              );
            })}
      </div>
    </>
  );
}
