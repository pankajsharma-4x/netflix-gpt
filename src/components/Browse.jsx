import React, { useEffect } from 'react'
import Header from './Header'
import {API_OPTIONS} from "../utils/constants";
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import MainContainer from './MainContainer';
import SecondaryConatiner from './SecondaryConatiner';

const Browse = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  };

  useEffect(() => {
   getNowPlayingMovies();
  },[])

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryConatiner />
    </div>
  )
}

export default Browse
