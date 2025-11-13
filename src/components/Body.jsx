import React, { useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Browse from './Browse'
import Login from './Login'
import { auth } from '../utils/firebase';
import {onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        //updating the store
        dispatch(addUser({uid:uid}))
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
      }
    });
  },[])
  
  return <RouterProvider router={approuter} />
}

export default Body
