import React, { useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handlesubmit = () => {
    const message = authUser
      ? checkValidation(email, password)
      : checkValidation(email, password, name);
    setErrorMessage(message);

    if (message) return;
    // Sign up logic
    if (!authUser) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ "" +errorMessage)
        });
    }
  };

  const handlesignup = () => {
    setAuthUser(!authUser);
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-white flex flex-col border-b-black shadow-black bg-black rounded-xl"
      >
        <p className="text-2xl font-bold p-4">
          {authUser ? "Sign in" : "Sign Up"}
        </p>
        {!authUser && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 m-3 bg-gray-600 rounded-xl"
            onChange={(event) => setName(event.target.value)}
          />
        )}
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
        <p className="pl-4 text-red-600">{errorMessage}</p>
        <button
          onClick={handlesubmit}
          className="p-3 m-3 bg-red-600 rounded-xl cursor-pointer"
        >
          {authUser ? "Sign in" : "Sign Up"}
        </button>
        <p className="p-4 0">
          {authUser ? " New to Netflix?" : "Already a member?"}
          <span className="cursor-pointer ml-2" onClick={handlesignup}>
            {authUser ? "Sign up now" : "Sign In"}
          </span>
        </p>
        <p className="pl-4 pb-4 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
