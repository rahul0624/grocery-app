import React from "react";

const Product = (props) => {

  const {
    quantity,
    description,
    productName,
    image,
    unit,
    price,
    mrp
  } = props.data;

  return (
    <div className="col-sm-4">
      <div className="card bg-light mb-4 h-70">
        <div className="card-body">
          <img src={'http://rjtmobile.com/grocery/images/'+image} alt="" className="card-img-top"/>
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">Rs.{price}</p>
          <p className="card-text">Description: {description}</p>
          <p className="card-text">Quantity: {quantity}</p>
          <p className="card-text">Unit: {unit}</p>
          <button className="btn btn-danger">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
