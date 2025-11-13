import React from "react";
import Netflix_Logo_PMS from "../assets/Netflix_Logo_PMS.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigate('/')
    })
    .catch((error) => {
      navigate('/error')
    });
  };
  return (
    <div className="w-full flex justify-between absolute px-8 py-2 bg-[linear-gradient(180deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.7889)_8.333%,rgba(0,0,0,0.7556)_16.67%,rgba(0,0,0,0.7)_25%,rgba(0,0,0,0.6222)_33.33%,rgba(0,0,0,0.5222)_41.67%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.2778)_58.33%,rgba(0,0,0,0.1778)_66.67%,rgba(0,0,0,0.1)_75%,rgba(0,0,0,0.04444)_83.33%,rgba(0,0,0,0.01111)_91.67%,rgba(0,0,0,0)_100%)]">
      <img className="w-45" src={Netflix_Logo_PMS} alt="logo" />
      <button onClick={handleSignOut} className="text-white cursor-pointer">Sign Out</button>
    </div>
  );
};

export default Header;
