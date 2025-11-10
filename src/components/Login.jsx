import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  const handlesubmit = (event) => {
    event.preventDefault()
    console.log('user email->',email)
    console.log('user password->',password)
  }

  return (
    <div>
      <Header />
      <div>
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg"
          alt="backgrond"
        />
      </div>
      <form className="w-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white flex flex-col border-b-black shadow-black bg-black rounded-xl">
        <p className="text-2xl font-bold p-4">Sign In</p>
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-3 m-3 bg-gray-600 rounded-xl"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-3 bg-gray-600 rounded-xl"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handlesubmit} className="p-3 m-3 bg-red-600 rounded-xl cursor-pointer">
          Sign In
        </button>
        <p className="p-4 0">
          New to Netflix?
          <span className="cursor-pointer ml-2">Sign up now</span>
        </p>
        <p className="pl-4 pb-4 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
         
        </p>
      </form>
    </div>
  );
};

export default Login;
