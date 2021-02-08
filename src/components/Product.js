import React from "react";
import "../style/Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
            {/* create an array with a length passed in from prop rating */}
            {/* fill the length, map other each i */}
            {/* return and fill the array with # of star emoji's */}
            {Array(rating).fill().map((_, i) => (
                <p>⭐</p>
            ))}
          
          
        </div>
      </div>

      <img src={image} alt="" />

      <button>Add To Basket</button>
    </div>
  );
}

export default Product;
