import React from "react";

import list from "../../object.js";

export default function Phones({ phones }) {
  let phoneFilter = list.filter((ele) => ele.type === "phones");
  console.log(phones);
  return (
    <>
      <div className="cart-box">
        {phoneFilter.map((ele) => {
          return (
            <>
              <div className="cart" key={ele.id}>
                <p className="cart-name">{ele.name}</p>
                <img src={`${ele.product}`} className="img" />
                <strong className="cart-price">{ele.price}</strong>
                <div>
                  <button className="add-to-cart" onClick={() => phones(ele)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
