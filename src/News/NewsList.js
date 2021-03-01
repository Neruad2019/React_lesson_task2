import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import News from "./News";

function NewsList(props) {
  console.log(props.News.filter((newss) => newss.categories === "politics"));
  return (
    <div>
      <h3>{props.Title}</h3>
      {props.Title === "All News"
        ? props.News.map((news) => {
            return <News news={news} />;
          })
        : props.News.filter(
            (newss) => newss.categories === props.Title.toLowerCase()
          ).map((news) => {
            return <News news={news} />;
          })}
    </div>
  );
}

export default NewsList;
