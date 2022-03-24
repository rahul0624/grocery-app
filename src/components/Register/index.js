import axios from "axios";
import React, { useState } from "react";

const Register = () => {

    const [user, setUser] = useState({
        firstName: '',
        email: '',
        mobile: '',
        password: ''
    })

    const onChangeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
      event.preventDefault();
      axios.post('https://apolis-grocery.herokuapp.com/api/auth/register',user)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
    }

  return (
    <div className="flex justify-content-center">
        <h1 className="text-center">Register</h1>
      <form className="col-6" onSubmit={onSubmitHandler}>
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
          <label >Mobile</label>
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
          <label >Password</label>
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