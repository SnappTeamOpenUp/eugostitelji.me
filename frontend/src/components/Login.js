import React, { useContext, useState } from "react";
import { AccountContext } from "./Accounts";

export const Login = () => {
  const { authenticate, loggedIn, logout } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    authenticate(email, password)
      .then(data => {
        console.log("Logged in!", data);
      })
      .catch(err => {
        console.log("Failed to login!", err);
      });
  };

  return (
    <div className="App">
      <div>
        {loggedIn ? (
          <>
            <h1>YOU ARE LOGGED IN</h1>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          "YOU ARE NOT LOGGED IN"
        )}
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
