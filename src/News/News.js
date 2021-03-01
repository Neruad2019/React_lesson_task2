import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../img/1.jpeg'

function News({news}) {
  return (
    <div>
      
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 p-2">
            <img src={logo} className="w-100" alt="No" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{news.title}</h5>
              <p className="card-text">{news.details}
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small><br/>
                <small className="text-muted">{news.categories.toUpperCase()}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default News;
