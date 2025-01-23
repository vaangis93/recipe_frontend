import { useState } from "react";
import facade from "../apiFacade";
import LoggedIn from "../components/LoggedIn";
import CreateUser from "../components/CreateUser";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const performLogin = (evt) => {
    evt.preventDefault(); // Prevent the default means that the form is not submitted in the default way
    facade
      .login(loginCredentials.username, loginCredentials.password) // Call the login function with useState values
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
          <CreateUser/>
  
        </div>
      )}
    </div>
  );
}

export default Login;
