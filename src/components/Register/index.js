import axios from "axios";
import React, { useEffect, useState } from "react";


const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [registerStatus, setRegisterStatus] = useState(false);

  const [registerFail, setRegisterFail ] = useState(false);

  const onChangeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(()=>{
    console.log('status Changed');
  },[registerStatus,registerFail]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("https://apolis-grocery.herokuapp.com/api/auth/register", user)
      .then((response) => {
        console.log(response);
        if (!response.error) {
          setRegisterStatus(true);
          setRegisterFail(false);
        }
      })
      .catch((error) => {
        setRegisterFail(true);
        setRegisterStatus(false);
        console.log(error);
      });
  };

  return (
    <div id="reg-form-wrap">
      <h1 className="text-center">Register</h1>
      {registerStatus && (
        <div className="alert alert-primary" role="alert">
          Registered Successfully Please Login!
        </div>
      )}
      {registerFail && (
        <div className="alert alert-danger" role="alert">
          Registraion Failed! User already Exists.
        </div>
      )}
      <form onSubmit={onSubmitHandler} id="login-form">
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
