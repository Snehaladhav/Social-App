import React, { useEffect, useState } from "react";
import { auth, provider } from "./Config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";

function SignInGoogle() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div>
      {value ? (
        <Home />
      ) : (
        <button onClick={handleClick}>
          Signin with{" "}
          <a href="#" className="social">
            <i style={{ color: "blue" }} className="fab fa-google-plus-g"></i>
          </a>
        </button>
      )}
    </div>
  );
}

export default SignInGoogle;
