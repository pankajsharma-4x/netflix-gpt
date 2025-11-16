import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12 absolute'>
      <h1 className='text-6xl text-white'>{title}</h1>
      <p className='py-6 font-bold w-1/4 text-white'>{overview}</p>
      <div>
        <button className='bg-gray-500 p-2 px-12 text-white text-xl bg-opacity-50 rounded-lg'>Play</button>
        <button className='bg-gray-500 text-white p-2 px-12 mx-2  text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;
