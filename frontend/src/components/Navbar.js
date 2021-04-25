import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AccountContext } from "./Accounts";

export const Navbar = ({ toggle }) => {
  const { loggedIn, logout } = useContext(AccountContext);
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        eUgostitelji
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block  hidden">
        {/* <Link to="/add" className="p-4">
          Add
        </Link> */}
        {/* <Link to="/api" className="p-4">
          API
        </Link> */}
        <Link to="/about" className="p-4">
          About us
        </Link>
        <Link to="/contact" className="p-4">
          Contact
        </Link>
        {loggedIn ? (
          <button className="p-4" onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/app/login" className="p-4">
              Login
            </Link>
            <Link to="/app/signup" className="p-4">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};
