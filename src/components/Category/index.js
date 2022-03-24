import React from "react";

const Category = (props) => {
  const{ catName, catImage} = props.data;
  return (
    <div className="col-sm-6">
      <div className="card bg-primary mb-4">
        {/* <img src={'http://rjtmobile.com/grocery/images/'+catImage} alt="" className="card-img-top"/> */}
        <div className="card-body">
          <h5 className="card-title">{catName}</h5>
        </div>
      </div>
    </div>
  );
};

export default Category;