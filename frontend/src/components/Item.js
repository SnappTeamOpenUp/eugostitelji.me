import React from "react";

export const Item = ({ name, pib, userId, updatePibs }) => {
  return (
    <div className=" shadow-xl flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
      <img
        src="https://source.unsplash.com/random"
        alt="image1"
        className="h-full rounded mb-20 shadow"
      />
      <div className="center-content">
        <h2 className="text-2xl mb-2">{name}</h2>
        <p>User ID: {userId}</p>
        <p className="mb-2">PIB: {pib}</p>
        <button
          onClick={() => updatePibs(pib)}
          className="py-6 px-10 bg-purple-500 rounded-full text-xl hover:bg-purple-300 transition duration-300 ease-in-out flex items-center"
        >
          Update
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
