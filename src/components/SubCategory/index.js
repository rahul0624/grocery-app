import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/index.css"

const SubCategory = () => {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://apolis-grocery.herokuapp.com/api/subcategory")
      .then((response) => {
        setSubCategories(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="sub-cat-list">
      <ul class="list-group bg-light">
        {subCategories.map((sub) => (
          <li key={sub.subId} class="list-group-item bg-light">
            <Link to={'/products?subCat='+sub.subId+'&subName='+sub.subName}>{sub.subName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubCategory;
