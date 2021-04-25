import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AccountContext } from "../../components/Accounts";
import { Navbar } from "../../components/Navbar";

export const Login = () => {
  const history = useHistory();
  const { authenticate } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    authenticate(email, password)
      .then((data) => {
        console.log("Logged in!", data);
        history.push("/");
      })
      .catch((err) => {
        console.log("Failed to login!", err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-center font-medium text-xl">LOGIN</h1>
          {/* {loggedIn ? (
          <>
            <h1 className="text-center font-medium text-xl">
              YOU ARE LOGGED IN
            </h1>
            <button className="text-lg text-gray-900" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <h1 className="text-center font-medium text-xl">
            YOU ARE NOT LOGGED IN
          </h1>
        )} */}
        </div>
        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form onSubmit={onSubmit} className="space-y-6">
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-1"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded mt-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue rounded-md text-white text-sm"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
