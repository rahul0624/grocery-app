import React from "react";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import SubCategory from "../components/SubCategory";

const Products = () => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <SubCategory />
          </div>
          <div className="col-10">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
