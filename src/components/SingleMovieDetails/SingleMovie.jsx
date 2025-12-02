import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
  const { movieId } = useParams();
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`).then((res) => {
      const data = res.json();
      return data;
    }).then((data)=>console.log(data)
    )
  }, [movieId]);
  return <div>Coming soon ....</div>;
};

export default SingleMovie;
