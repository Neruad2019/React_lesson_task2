import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blog from "./Blog";

function BlogList(props) {
  return (
    <div>
      <h3>Blogs</h3>
      {props.Blogs.map((blog) => {
        return <Blog blog={blog} />;
      })}
    </div>
  );
}

export default BlogList;
