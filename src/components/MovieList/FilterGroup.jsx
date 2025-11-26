import React from "react";

const FilterGroup = ({ minRating, onFilterRating, ratings }) => {
  return (
    <ul className="movie_filter">
      {ratings.map((rate, index) => (
        <li
          key={index}
          className={
            minRating === rate
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          onClick={() => onFilterRating(rate)}
        >
          {rate > 0 ? `${rate}+Stars` : "All"}
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
