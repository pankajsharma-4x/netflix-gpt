import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Browse from './Browse'
import Login from './Login'

const Body = () => {
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  
  return <RouterProvider router={approuter} />
}

export default Body
