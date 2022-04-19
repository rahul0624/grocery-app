import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "../Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([1, 2]);

  useEffect(() => {
    axios
      .get("https://apolis-grocery.herokuapp.com/api/category")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="text-center ">
      <h3>Categories</h3>
      <hr />
      <div className="row">
        {categories.map((category) => (
          <Category data={category} />
        ))}
      </div>
    </div>
  );
};
/**
 * lol
 */
export default CategoryList;
