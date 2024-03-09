import React from "react";
import "./index.css";
function Card(props) {
  const { author, country, imageLink, language, link, pages, title, year } =
    props.data;
  let color = "green";
  if (year < 1600) {
    color = "red";
  }
  return (
    <div className="wrapper">
      <h3 className="author">{author}</h3>
      <p className="country">{country}</p>
      <p className="imageLink">{imageLink}</p>
      <p className="language">{language}</p>
      <a className="link" href={link}>
        Website Link
      </a>
      <p className="pages">{pages}</p>
      <p className="title">{title}</p>
      <p className="year" style={{ backgroundColor: color }}>
        {year}
      </p>
    </div>
  );
}

export default Card;
