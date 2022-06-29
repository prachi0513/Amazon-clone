function Login() {
   
    return (
        <div className="Login">
          <div className="main-login">
              <p className="login-title">Login To Your Account</p>
              <label className="email">Email</label>
              <input type="text" className="email-input" ></input>
              <label className="password">Password</label>
              <input type="password" className="password-input"></input>
              <button type="submit" className="submit">Sign In</button>     
          </div>
        </div>
    );
}

export default Login;