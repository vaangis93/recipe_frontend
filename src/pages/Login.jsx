import React, { useState } from "react";
import facade from "../apiFacade";

function Login({ setLoggedIn }) {
    const [loginCredentials, setLoginCredentials] = useState({ username: "", password: "" });
  
    const performLogin = (evt) => {
      evt.preventDefault();
      facade.login(loginCredentials.username, loginCredentials.password).then(() => {
        setLoggedIn(true); // Ensure this line runs after a successful login
      });
    };
  
    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value });
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={performLogin}>
          <input placeholder="User Name" id="username" onChange={onChange} value={loginCredentials.username} />
          <input placeholder="Password" id="password" onChange={onChange} value={loginCredentials.password} />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
  export default Login;
  