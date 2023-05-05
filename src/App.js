import React, { useState } from "react";

import Login from "./Components/Login";
import QuizApp from "./Components/QuizApp";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username, password) => {
    // handle login logic here
    setUser(username);
  };

  const handleLogout = () => {
    // handle logout logic here
    setUser(null);
  };

  return (
    <div className="app-container">
      {user ? (
        <>
          <QuizApp />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;

