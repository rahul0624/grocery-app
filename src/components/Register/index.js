import React, { useState } from "react";

const Register = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const onChangeHandler = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value
        })
    }

  return (
    <div className="flex justify-content-center">
        <h1 className="text-center">Register</h1>
      <form className="col-6">
      <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="email"
            class="form-control"
            name="name"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeHandler}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeHandler}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={onChangeHandler}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;