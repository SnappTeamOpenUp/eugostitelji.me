import React from "react";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Dropdown />
      <div className="max-w-sm rounded overflow-hidden shadow-xl">
        <img
          src="https://source.unsplash.com/random"
          alt="Objekat 1"
          className=""
        />
        <div className="px-6 py-4">
          <div className="font-bold text-yellow-600 text-xl mb-2">
            {" "}
            Titograd
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
