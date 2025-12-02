import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
import { Route, Routes } from "react-router-dom";
import SingleMovie from "./components/SingleMovieDetails/SingleMovie";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<MovieList type={"popular"} title={"Popular"} />}
        />
        <Route
          path="/top_rated"
          element={<MovieList type={"top_rated"} title={"Top Rated"} />}
        />
        <Route
          path="/upcoming"
          element={<MovieList type={"upcoming"} title={"Upcoming"} />}
        />
        <Route path="/movie/:movieId" element={<SingleMovie />}/>
      </Routes>
    </div>
  );
};

export default App;
