import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../img/2.jpg";
import slider from "../img/1.jpg";
import NewsList from "../News/NewsList";
import BlogList from "../News/BlogList";

function Content(props) {
  return (
    <div className="container">
      <div
        id="carouselExampleCaptions"
        className="mt-lg-5 h-50 carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slider}
              className="d-block w-100"
              style={{ maxHeight: "500px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="src\img\1.jpg"
              className="d-block w-100"
              style={{ maxHeight: "500px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="src\img\2.jpg"
              className="d-block w-100"
              style={{ maxHeight: "500px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
      <div className="row mt-lg-5">
        <div className="col-7">
          <NewsList News={props.News} Title={props.Title}/>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-5">
          <BlogList Blogs={props.Blogs} />

          <div className="card text-white bg-info mb-3">
            <div className="card-header">Subscribe to our blogs</div>
            <div className="card-body">
              <h5 className="card-title">Follow the news on HABAR.COM</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
