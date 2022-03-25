import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/index.css";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState(false);

  const [loginFail, setLoginFail] = useState(false);

  useEffect(() => {
    console.log();
  }, [loginStatus, loginFail]);

  const onChangeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://apolis-grocery.herokuapp.com/api/auth/login", user)
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          setLoginStatus(true);
          setLoginFail(false);
          sessionStorage.setItem("token", response.data.token);
        }
      })
      .catch((err) => {
        setLoginStatus(false);
        setLoginFail(true);
      });
  };

  return (
    <div className="flex justify-content-center" id="login-form-wrap">
      <h1 className="text-center">Login</h1>
      {loginStatus && (
        <div className="alert alert-primary" role="alert">
          Logged In Successfully!
        </div>
      )}
      {loginFail && (
        <div className="alert alert-danger" role="alert">
          Incorrect Credentials!
        </div>
      )}
      <form
        id="login-form"
        className="flex justify-content-center"
        onSubmit={onSubmitHandler}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={onChangeHandler}
          />
        </div>

        <button id="login" type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
