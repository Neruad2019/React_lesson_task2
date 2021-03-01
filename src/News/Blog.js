import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../img/2.jpg";

function Blog({ blog }) {
  return (
    <div>
      <div
        className="card mb-3"
        style={{ maxWidth: "540px", backgroundColor: "lightblue" }}
      >
        <div className="row g-0">
          <div className="col-md-4 p-2">
            <img src={logo} className="w-100" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.details}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
