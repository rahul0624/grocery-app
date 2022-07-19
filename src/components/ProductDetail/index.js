import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./styles/index.css"

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    let url = "https://apolis-grocery.herokuapp.com/api/products/";

    axios
      .get(url + id)
      .then((response) => {
        setProduct(response.data.data);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div class="product-detail-container" id="product-section">
      <div class="row">
        <div class="col-md-6">
          <img className="product-image" src={'http://rjtmobile.com/grocery/images/'+product.image} alt="product-img" />
        </div>
        <div class="col-md-6 product-meta">
          <h2>{product.productName}</h2>
          <div className="product-description">
            <h5>Description: </h5>
            <p>{product.description}</p>
          </div>
          <div className="product-price">
            <h5>Price: </h5>
            <p>{product.price}</p>
          </div>
          <div className="product-mrp">
            <h5>MRP: </h5>
            <p>{product.mrp}</p>
          </div>
          <div className="product-stock">
            <h5>Units in Stock: </h5>
            <p>{product.quantity}</p>
          </div>
          <button className="product-add-to-cart btn btn-danger">Add to Cart</button>
          <button className="product-buy-now btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
