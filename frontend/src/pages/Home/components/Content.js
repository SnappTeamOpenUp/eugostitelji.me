import React from "react";
import { Item } from "./Item";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const ListServiceProviders = gql`
  query {
    listServiceProviders {
      pib
      coverImg
      title
      workingHours
    }
  }
`;
const renderItems = (data) => {
  return data.listServiceProviders.map((details) => (
    <Item
      key={details.pib}
      pib={details.pib}
      coverImg={details.coverImg}
      title={details.title}
      workingHours={details.workingHours}
    />
  ));
};

export const Content = () => {
  const { loading, error, data } = useQuery(ListServiceProviders);

  if (error) return `Error! ${error.message}`;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-md mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none md:mb-6 group">
          <p className="flex mb-1 sm:mb-4 items-center">
            <span>Recently added</span>
            <span className="inline-block px-3 ml-2 py-px text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              NEW
            </span>
          </p>

          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
      </div>
      {loading ? (
        "Loading..."
      ) : error ? (
        "Failed"
      ) : (
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          {renderItems(data)}
        </div>
      )}
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
};
