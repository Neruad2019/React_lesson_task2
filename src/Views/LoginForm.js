import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import AddNews from "../Views/AddNews";

function LoginForm(props) {
  const [Email, setEmail] = React.useState("");
  const [Password, setPassword] = React.useState("");

  function emailHandler(event) {
    event.preventDefault();

    setEmail(event.target.value);
  }

  function passwordHandler(event) {
    event.preventDefault();

    setPassword(event.target.value);
  }

  function Authorization(event) {
    event.preventDefault();
    setEmail("");
    setPassword("");

    const Users = props.Users;
    let f = true;
    for (let int = 0; int < Users.length; int++) {
      if (Users[int].email === Email && Users[int].password === Password) {
        f = !f;
        props.setOnline(Users[int].id)
        
        break;
      }
    }
    if (f) {
      alert(`No such User!`);
    }
  }

  return (
    <div className="container mt-lg-5 d-flex ">
      <form className="col-3 mx-auto" onSubmit={Authorization}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={Email}
            onChange={emailHandler}
            className="form-control"
            id="exampleInputEmail1"
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={Password}
            onChange={passwordHandler}
            className="form-control"
            id="exampleInputPassword1"
            required
          />
        </div>
        <div className="form-group form-check my-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#013799" }}
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
