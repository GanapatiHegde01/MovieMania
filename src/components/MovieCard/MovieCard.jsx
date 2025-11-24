import React from "react";
import "./MovieCard.css";

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://m.media-amazon.com/images/I/81dae9nZFBS._SY741_.jpg"
        alt=""
        className="movie_poster"
      />
      <div className="movie_details">
        <h6 className="movie_name">Movie Name</h6>
        <div className="movie_date_rate">
          <p>10-10-2025</p>
          <p>9.0⭐</p>
        </div>
        <div className="movie_description">
          <p>
            Lorem ipsum,, atque eos voluptates est fdsadf unde porro aspernatur laborum.
          </p>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
