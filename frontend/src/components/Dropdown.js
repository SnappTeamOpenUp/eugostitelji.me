import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/add" className="p-4">
        Add
      </Link>
      <Link to="/api" className="p-4">
        API
      </Link>
      <Link to="/about" className="p-4">
        About us
      </Link>
      <Link to="/contact" className="p-4">
        Contact
      </Link>
      <Link to="/login" className="p-4">
        Login
      </Link>
    </div>
  );
};

export default Dropdown;
