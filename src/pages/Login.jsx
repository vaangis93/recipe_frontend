import React, { useState } from "react";
import facade from "../apiFacade";
import LoggedIn from "../components/LoggedIn";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const performLogin = (evt) => {
    evt.preventDefault();
    facade
      .login(loginCredentials.username, loginCredentials.password)
      .then(() => {
        setLoggedIn(true); // Set loggedIn state to true after a successful login
      })
      .catch((error) => {
        console.error("Login failed", error); // Handle errors appropriately
      });
  };

  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      {loggedIn ? (
        <div>
          <LoggedIn />{" "}
          {/* This component is displayed after a successful login */}
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <form onSubmit={performLogin}>
            <input
              placeholder="User Name"
              id="username"
              onChange={onChange}
              value={loginCredentials.username}
            />
            <input
              placeholder="Password"
              id="password"
              type="password"
              onChange={onChange}
              value={loginCredentials.password}
            />
            <button type="submit">Login</button>
          </form>
          
          <br />
          <h2>Create User </h2>
          <form onSubmit="">
            <input type="text" placeholder="Write your new user name" id="WriteUserName"/>
            <input type="password" placeholder="Write your new password" id="NewPassword" />
            <button type="submut">Create User</button>






          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
