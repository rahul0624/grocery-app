import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <ul class="list-group">
        {subCategories.map((sub) => (
          <li key={sub.subId} class="list-group-item">
            <Link to={'/products?subCat='+sub.subId+'&subName='+sub.subName}>{sub.subName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubCategory;
