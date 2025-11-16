import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryConatiner = () => {
  const movies = useSelector(store => store.movies)
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.addNowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.addNowPlayingMovies} />
      <MovieList title={"Upcoming"} movies={movies.addNowPlayingMovies} />
      <MovieList title={"Horror"} movies={movies.addNowPlayingMovies} />
    </div>
  )
}

export default SecondaryConatiner
