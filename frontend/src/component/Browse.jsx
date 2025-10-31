import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchMovies from "./SearchMovies";

const Browse = () => {
  const user = useSelector((state) => state.app.user);
  const toggle = useSelector((state)=>state.movie.toggle)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //options

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <Header />
      <div>
        {
          toggle ? <SearchMovies/> : <><MainContainer />
        <MovieContainer/></>
        }
        
      </div>
    </div>
  );
};

export default Browse;
