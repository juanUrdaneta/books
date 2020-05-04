import React, { useState, useEffect } from "react";
import defthumb from '../img/book_def.jpg'

// const mockData = {
//   title: "frank and further",
//   publishedDate: "25-march-2010",
//   author: "jane jacobs",
//   thumbnail: "https://images-na.ssl-images-amazon.com/images/I/71Yqsl7jXvL.jpg",
//   link: "https://www.google.com",
// };

const bookDef = '../img/book_def.jpg'

const Card = ({info}) => {
  const [hovered, toggleHover] = useState(false);
  const [loaded, toggleLoaded] = useState(false);
  console.log(loaded);

  useEffect(()=>{
    toggleLoaded(false);
  },[info]);

  return (
    <div
      className={`card ${loaded ? "card--visible":""} ${info.imageLinks ? "" : "card--visible"}`}
      onMouseEnter={() => {
        toggleHover(true);
      }}
      onMouseLeave={() => {
        toggleHover(false);
      }}
    >
      <img
        src={info.imageLinks ? info.imageLinks.thumbnail : defthumb}
        alt=""
        className={`
          card__thumbnail
          ${hovered ? "card__thumbnail--covered" : ""}
          `}
        onLoad={()=>toggleLoaded(true)}
      />
      <div
        className={`
          card__info
          ${hovered ? "card__info--show" : ""}
          `}
      >
        <p className="card__title">{info.title}</p>
        <div>
          <p className="card__author">{info.author}</p>
          <p className="card__published-date">{info.publishedDate}</p>
        </div>
        <a href={info.infoLink} target="_blank" className="card__visit-page">
          ->
        </a>
      </div>
    </div>
  );
};

export default Card;
