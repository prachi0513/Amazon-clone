//props
//destructuring
import React from "react";
import { Link } from "react-router-dom";
function AmHeader({ headerProp }) {
  function handleChange(event) {
    let val = event.target.value;
    headerProp.setInput(val);
  }

  return (
    <div className="Amheader">
      <Link to='/'>
        <img src="/images/logo.png" className="logo"></img>
      </Link>

      <p id="address">New Delhi 110032</p>
      <div className="search-Box">
        <input id="search-input" type="text" onChange={handleChange} />
        <button id="search">
          <i className="fa">&#xf002;</i>
        </button>
      </div>

      <img src="/images/flag.png" id="flag"></img>
      <p className="header-text">Account & list</p>
      <p className="header-text">Returns & Orders</p>
      {/* <Link to="/login">
        <div>
          <p id="acc">Log In</p>
        </div>
      </Link>

      <Link to="/signup">
        <div>
          <p id="returns">Sign Up</p>
        </div>
      </Link> */}

      <Link to="/cartitems">
        <div className="main-cart">
          <i className="fa fa-shopping-cart"></i>
          <p className="header-cart-name">Cart</p>
          <p className="cart-count">{headerProp.cartItems.length}</p>
        </div>
      </Link>
    </div>
  );
}

export default AmHeader;
