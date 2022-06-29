import React from "react";
import list from "../../object";
export default function GiftIdeas({ gift }) {
  console.log(list);
  let giftFiltered = list.filter((ele) => ele.type === "gift");
  console.log(giftFiltered);

  return (
    <>
      <div className="cart-box">
        {giftFiltered.map((ele) => {
          return (
            <>
              <div className="cart">
                <p className="cart-name">{ele.name}</p>
                <img src={`${ele.product}`} className="img" />
                <strong className="cart-price">{ele.price}</strong>
                <div>
                  <button className="add-to-cart" onClick={() => gift(ele)}>
                    {" "}
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
