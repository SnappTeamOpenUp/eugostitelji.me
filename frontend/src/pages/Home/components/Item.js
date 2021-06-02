import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ id, coverImg, title, workingHours }) => {
  return (
    <Link to={`/serviceprovider/${id}`} aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 rounded shadow-lg  hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={coverImg}
          alt=""
        />
        <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75 transform  translate-y-12 hover:translate-y-0 transition-transform	">
          <p className="text-sm font-medium tracking-wide text-white">
            {title}
          </p>
          <p className="text-sm font-medium tracking-wide text-white my-4">
            {workingHours}
          </p>
        </div>
      </div>
    </Link>
  );
};
