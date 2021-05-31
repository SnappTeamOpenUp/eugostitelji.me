import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { Navbar } from "../../components/Navbar";
import { UserPool } from "../../config/cognito";
import { useAccount } from "../../components/Accounts";

export const Signup = () => {
  const { loggedIn } = useAccount();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
    });
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="relative z-10 w-screen bg-white">
        <Navbar />
      </div>
      <div className="fixed bottom-0 top-0 left-0 right-0 bg-gray-50 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto">
          <h1 className="text-center font-medium text-xl">SIGN UP</h1>
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
              autoComplete="new-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue rounded-md text-white text-sm"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
