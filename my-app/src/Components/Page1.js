// import React, { useState } from "react";

// const Post = () => {
//   const [isSignUpActive, setIsSignUpActive] = useState(true);

//   const toggleForm = () => {
//     setIsSignUpActive(!isSignUpActive);
//   };

//   return (
//     <div>
//       <div
//         className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
//         id="container"
//       >
//         <div className="form-container sign-up-container">
//           <form action="#">
//             <h1>Create Account</h1>
//             <div className="social-container">

//               <a href="#" className="social">
//                 <i className="fa-brands fa-facebook-f"></i>
//               </a>
//               <a href="#" className="social">
//                 <i className="fab fa-google-plus-g"></i>
//               </a>

//             </div>
//             <span>or use your email for registration</span>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <button id="btn1" className="button-content">Sign Up</button>
//           </form>
//         </div>
//         <div className="form-container sign-in-container">
//           <form action="#">
//             <h1>Log in</h1>
//             <div className="social-container">

//               <a href="#" className="social">
//                 {" "}
//                 <i className="fa-brands fa-facebook-f"> </i>
//               </a>
//               <a href="#" className="social">
//                 {" "}
//                 <i className="fa-brands fa-google-plus-g"></i>
//               </a>

//             </div>
//             <span>or use your account</span>
//             <input type="email" placeholder="Email" className="email" />
//             <input type="password" placeholder="Password"  className="password"></input>
//             <a href="#">Forgot your password?</a>
//             <button id="btn1" >Log in</button>
//           </form>
//         </div>
//         <div className="overlay-container">
//           <div className="overlay">
//             <div
//               className={`overlay-panel overlay-left ${
//                 isSignUpActive ? "" : "hidden"
//               }`}
//             >
//               <h1>Welcome Back!</h1>
//               <p>
//                 To keep connected with us please login with your personal info
//               </p>
//               <button id="btn1" onClick ={toggleForm}className="ghost" >
//                 Sign In
//               </button>
//             </div>
//             <div
//               className={`overlay-panel overlay-right ${
//                 isSignUpActive ? "hidden" : ""
//               }`}
//             >
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start the journey with us</p>
//               <button  id="btn1" className="ghost" onClick={toggleForm}>
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// import { FacebookLoginComponent }from "./FacebookLoginComponent";

import { SnackbarProvider, useSnackbar } from "notistack";

import { Link } from "react-router-dom";
import { auth } from "./googleSignin/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Page1 = ({ onSignup }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant) => () => {
    enqueueSnackbar("Registration Succesful!", { variant });
  };
  const handleFacebookLogin = (facebookData) => {
    // Handle the Facebook login data here and potentially link it to your registration process.
    console.log("Facebook Login Data:", facebookData);
    // ...perform any additional actions here
  };

  const data = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("This is required field"),
      email: Yup.string()
        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/, {
          message: "Invalid email address",
        })
        .required("This is required field"),
      password: Yup.string().required("This is required field"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("This is a required field"),
    }),
    onSubmit: (values, action) => {
      if (data.isValid) {
        enqueueSnackbar("Registration Successful!", { variant: "success" });
        action.resetForm();
      }

      if (!values.username || !values.password || !values.email) {
        setErrorMsg("Fill in all fields");
        return;
      }
      setErrorMsg(" ");
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log("Error: " + error.message);
        });

      // Pass the password to the onSignup function
      onSignup(values.password);
    },
  });

  return (
    <div>
      <div>
        <div
          className="form-container sign-up-container"
          style={{ width: "100%" }}
        >
          <form onSubmit={data.handleSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </div>
            <input
              type="text"
              placeholder="Username"
              id="username"
              style={{ borderRadius: "5px", width: "300px" }}
              value={data.values.username}
              onChange={data.handleChange}
              onBlur={data.handleBlur}
            />
            {data.touched.username && data.errors.username && (
              <p style={{ color: "red", margin: "0" }}>
                {data.errors.username}
              </p>
            )}

            <input
              type="email"
              placeholder="Email"
              id="email"
              style={{ borderRadius: "5px", width: "300px" }}
              value={data.values.email}
              onChange={data.handleChange}
              onBlur={data.handleBlur}
            />
            {data.touched.email && data.errors.email && (
              <p style={{ color: "red", margin: "0" }}>{data.errors.email}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              id="password"
              style={{ borderRadius: "5px", width: "300px" }}
              value={data.values.password}
              onChange={data.handleChange}
              onBlur={data.handleBlur}
            />
            {data.touched.password && data.errors.password && (
              <p style={{ color: "red", margin: "0" }}>
                {data.errors.password}
              </p>
            )}

            <input
              type="password"
              placeholder="Confirm Password"
              id="confirm_password"
              style={{ borderRadius: "5px", width: "300px" }}
              value={data.values.confirm_password}
              onChange={data.handleChange}
              onBlur={data.handleBlur}
            />
            {data.touched.confirm_password && data.errors.confirm_password && (
              <p style={{ color: "red", margin: "0" }}>
                {data.errors.confirm_password}
              </p>
            )}

            <button
              id="btn2"
              type="submit"
              //    onClick={handleClickVariant}
            >
              Sign Up
            </button>
            <p>
              Already have an Account?{" "}
              <span>
                <Link
                  to="/login"
                  style={{
                    color: "#ff4b2b",
                    letterSpacing: "1px",
                    fontWeight: "bold",
                  }}
                >
                  Login
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// export default Page1;

export { Page1 };

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Page1 />
    </SnackbarProvider>
  );
}
