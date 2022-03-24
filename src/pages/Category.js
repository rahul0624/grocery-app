import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ProductList from "../components/ProductList";
import Sidebar from "../components/Sidebar";
import SubCategory from "../components/SubCategory";

const CategoryPage = () => {

    const [category, setCategory ] = useState({});

    const {id} = useParams();
    
    useEffect(()=>{
        axios.get('https://apolis-grocery.herokuapp.com/api/category/'+id)
        .then(resp => {
            setCategory(resp.data.data[0]);
        })
        .catch(err => console.log(err));
    },[])

  return (
    <div>
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <SubCategory/>
          </div>
          <div className="col-10">
            <h2 className="text-center">{category.catName}</h2>
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
