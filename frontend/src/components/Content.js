import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <div className=" shadow-xl flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img
          src="https://source.unsplash.com/random"
          alt="image1"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Object 1</h2>
          <p className="mb-2">Description Description</p>
          <Link className="py-6 px-10 bg-purple-500 rounded-full text-xl hover:bg-purple-300 transition duration-300 ease-in-out flex items-center">
            Update
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </Link>
        </div>
      </div>

      <div className=" shadow-xl flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img
          src="https://source.unsplash.com/random"
          alt="image2"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Object 2</h2>
          <p className="mb-2">Description</p>
          <Link className="py-6 px-10 bg-purple-500 rounded-full text-xl hover:bg-purple-300 transition duration-300 ease-in-out flex items-center">
            Update
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
