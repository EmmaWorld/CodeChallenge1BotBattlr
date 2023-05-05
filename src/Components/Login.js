import React, { useState } from "react";
import QuizApp from "./QuizApp";
import './QuizLogin.css'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username === "user" && password === "pass") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  if (isLoggedIn) {
    return <QuizApp />;
  } else {
    return (
      <div className="login-container"> {/* add a class name to the container */}
        <h2>Login</h2>
        <form>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="button" onClick={handleLogin}>Login</button> {/* add a type attribute to the button */}
          <p><b>Username: </b> user</p>
        <p><b>Password: </b> pass</p>
        </form>
      </div>
    );
  }
}

export default Login;