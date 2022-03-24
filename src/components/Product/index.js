import React from "react";

const Product = (props) => {
  return (
    <div className="col-sm-4">
      <div className="card bg-primary mb-4">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">MRP: {props.mrp}</p>
          <p className="card-text">Rs.{props.price}</p>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">Quantity: {props.quantity}</p>
          <p className="card-text">Unit: {props.unit}</p>
          <button className="btn btn-danger">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
