import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movieData }) => {
  return (
    <a
      href={`https://www.themoviedb.org/movie/${movieData.id}`}
      target="_blank"
      className="movie_card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        alt=""
        className="movie_poster"
      />
      <div className="movie_details">
        <h6 className="movie_name">
          {movieData.title.length > 40
            ? movieData.title.slice(0, 40) + "..."
            : movieData.title}
        </h6>
        <div className="movie_date_rate">
          <p>{movieData.release_date}</p>
          <p>{movieData.vote_average}⭐</p>
        </div>
        <div className="movie_description">
          <p>
            {movieData.overview.length > 70
              ? movieData.overview.slice(0, 70) + "..."
              : movieData.overview}
          </p>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
