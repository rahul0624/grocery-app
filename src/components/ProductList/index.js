import React, { useEffect, useState } from "react";

import axios from "axios";
import Product from "../Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('https://apolis-grocery.herokuapp.com/api/products')
    .then(response => {
        setProducts(response.data.data);
    })
    .catch(error => console.log(error));
  },[])

  return (
    <div className="text-center">
      <div className="row">
        {products.map((product) => (
          <Product
            name={product.productName}
            mrp={product.mrp}
            price={product.price}
            description={product.description}
            quantity={product.quantity}
            unit={product.unit}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
