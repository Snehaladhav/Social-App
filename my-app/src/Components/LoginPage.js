import React from 'react'

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row">
      <div className="col-sm-6">
    </div>
     <div className="col-sm-6">
      <div className="right-column text-container">
        <h1>SocialWorld</h1>
        <h4>Sign up to see photos and videos from your friends. </h4>
        <button className="login">  <i className="fa-brands fa-facebook-f"> </i>   Log in with Facebook</button>
        <p className="or">OR</p>
        <form>
          <div className="form-group">
            <input type="text" placeholder=" Email or Mobile Number"></input>
          </div>
          <div className="form-group">
            <input type="text" placeholder=" Full name"></input>
          </div>
          <div className="form-group">
            <input type="text" placeholder=" Username "></input>
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password"></input>
          </div>
          <div className="text">
            <p>People who use our service may have uploaded your contact information to SocialWorld.<a href="#">Learn More</a></p>
            <p>By sigining up, you agree to our <a href='#'>Terms, Privacy Policy.</a></p>
          </div>
          <button className="signup">Sign up</button><br/>
        </form>
      </div>
     </div>
      </div>
    </div>
  )
}

export default LoginPage