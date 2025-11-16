import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.addNowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];

    const {original_title, overview,movieId} = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} /> 
      <VideoBackground movieId={movieId}  />
    </div>
  )
}

export default MainContainer
