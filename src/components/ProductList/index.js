import React, { useEffect, useState } from "react";

import axios from "axios";
import Product from "../Product";
import { useLocation, useParams } from "react-router-dom";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  const useQuery = () => {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  const subCatId = useQuery().get("subCat");

  const subName = useQuery().get('subName');

  console.log(subCatId);

  useEffect(() => {
    let url = "https://apolis-grocery.herokuapp.com/api/products";

    if (id) {
      let catId = "";

      axios
        .get("https://apolis-grocery.herokuapp.com/api/category/" + id)
        .then((resp) => {
          catId = resp.data.data[0].catId;
          url =
            "https://apolis-grocery.herokuapp.com/api/products/cat/" + catId;
          console.log(catId);
          axios
            .get(url)
            .then((response) => {
              setProducts(response.data.data);
            })
            .catch((error) => console.log(error));
        })
        .catch((err) => console.log(err));
    } else if (subCatId) {
      url = "https://apolis-grocery.herokuapp.com/api/products/sub/" + subCatId;
      axios
        .get(url)
        .then((response) => {
          setProducts(response.data.data);
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .get(url)
        .then((response) => {
          setProducts(response.data.data);
        })
        .catch((error) => console.log(error));
    }
  }, [subCatId]);

  return (
    <div className="text-center">
      {subName||id?<h2>{subName}</h2>:<h2>All Products</h2>}
      <div className="row">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
