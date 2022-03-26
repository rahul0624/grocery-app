import React from "react";

const Header = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Grocery App</h1>
      <p className="lead">
        Shop for Grocery
      </p>
      <hr className="my-4" />
      <p>
        Very good Deals
      </p>
      <a className="btn btn-primary btn-lg active" href="/about" role="button">
        Learn more
      </a>
    </div>
  );
};

export default Header;