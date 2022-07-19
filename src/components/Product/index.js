import React from "react";
import "./styles/index.css";

const Product = (props) => {
  const { quantity, description, productName, image, unit, price, mrp, _id } =
    props.data;

  return (
    <div className="col-sm-4">
      <div className="card bg-light mb-4 h-70">
        <div className="card-body">
          <a href={"/product/" + _id}>
            <div className="prod-img-container">
              <img
                src={"http://rjtmobile.com/grocery/images/" + image}
                alt=""
                className="card-img-top"
              />
            </div>
          </a>
          <a href={"/product/" + _id}>
            <h5 className="card-title">{productName}</h5>
          </a>
          <h5 className="card-text">Rs.{price}</h5>
          <button className="product-list-atc btn btn-danger">
            Add to Cart
          </button>
          <button className="product-list-bn btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
