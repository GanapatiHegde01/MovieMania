import { React, useEffect, useState } from "react";
import _ from "lodash";
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";
import FilterGroup from "./FilterGroup";
import Loader from "../../Common/Loader";

const MovieList = ({ type, title }) => {
  const [movieData, setMovieData] = useState([]);
  const [filteredMovieData, setFilteredMovieData] = useState([]);
  const [minRating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  const ratings = [0, 7, 6, 5];

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      const movieDetails = await response.json();
      setMovieData(movieDetails.results);
      setFilteredMovieData(movieDetails.results);
      setIsLoading(false);
    };
    fetchMovie();
  }, [type]);

  useEffect(() => {
    const sortedData = _.orderBy(filteredMovieData, sort.by, sort.order);
    setFilteredMovieData(sortedData);
  }, [sort]);

  const handleRating = (rate) => {
    setRating(rate);
    const fitleredMovies = movieData.filter(
      (movie) => movie.vote_average >= rate
    );
    setFilteredMovieData(fitleredMovies);
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };
  console.log(sort);
 if(isLoading) return <Loader />
  return (
    <div className="movie_list" id={type}>
      <header className="list_header">
        <h1>{title} {type==="popular"?'🔥':'🌟'}</h1>
        <div className="movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onFilterRating={handleRating}
            ratings={ratings}
          />
          <select
            name="by"
            value={sort.by}
            className="movie_sorting"
            onChange={handleSort}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            value={sort.order}
            className="movie_sorting"
            onChange={handleSort}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards_container">
        {filteredMovieData.map((data, index) => {
          return (
            <MovieCard
              key={index}
              movieData={data}
              filteredMovieData={filteredMovieData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
