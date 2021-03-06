import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { searchAlgolia } from "../../../services/search";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [autocompleteData, setAutocompleteData] = useState([]);
  // const [loading, setLoading] = useState(false);

  const handleSearch = async (term) => {
    // setLoading(true);
    try {
      const res = await searchAlgolia(term, {});
      setAutocompleteData(res.serviceProviders);
    } catch (e) {
      console.log(e);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    }
  }, [searchTerm]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
        <div className="text-center relative">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                OPEN UP
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="b039bae0-fdd5-4311-b198-8557b064fce0"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">A</span>
              </span>{" "}
              recipe is a story that ends with a good meal
            </h2>
          </div>
          <div className="flex flex-col items-center w-full  md:flex-row md:px-16">
            <input
              placeholder="Find restaurants, delivery, takeout..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            <button
              onClick={() => handleSearch(searchTerm)}
              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Search
            </button>
          </div>
          <div className="flex flex-col absolute w-full">
            {autocompleteData &&
              autocompleteData.length > 0 &&
              autocompleteData.map((item) => (
                <Link to={`/service-provider/${item.id}`} key={item.id}>
                  <div className="flex flex-row h-16 justify-between items-center	border-b p-2 hover:bg-gray-100">
                    <span>{item.title}</span>
                    <img
                      className="h-full"
                      src={item.logoImg}
                      alt="logo_image"
                    />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
