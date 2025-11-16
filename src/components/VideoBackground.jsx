import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentVideoTrailer } from '../utils/moviesSlice';

const VideoBackground = () => {
    const dispatch = useDispatch();
    const trailerId = useSelector(store => store.movies?.trailerVideo);

    const getMovieVideos = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/976573/videos?language=en-US",
      API_OPTIONS
      );
      const json = await data.json();

      const filterData = json.results.filter((video) => video.type === "Trailer")
      const trailer = filterData[0];

      dispatch(addCurrentVideoTrailer(trailer.key))
    };

    useEffect(() => {
     getMovieVideos();
    },[])

  return (
    <div>
       <iframe 
           className='w-screen aspect-video'
           src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=1`}
           allowFullScreen
       >
       </iframe>
    </div>
  )
}

export default VideoBackground;
