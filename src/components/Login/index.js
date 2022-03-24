import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex justify-content-center">
      <h1 className="text-center">Login</h1>
      <form className="flex justify-content-center col-6">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeHandler}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            name="password"
            id="exampleInputPassword1"
            onChange={onChangeHandler}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
