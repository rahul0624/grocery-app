import React from "react";

const Category = (props) => {
  const { catName, catImage, _id } = props.data;
  return (
    <div className="col-sm-3">
      <div className="card bg-light mb-4">
        <a href={'/products/'+_id}>
          <img
            src={"http://rjtmobile.com/grocery/images/" + catImage}
            alt=""
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{catName}</h5>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Category;
