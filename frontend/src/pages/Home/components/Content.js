import React from "react";
import { Item } from "./Item";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const ListServiceProviders = gql`
  query {
    listServiceProviders {
      pib
      userId
    }
  }
`;

export const Content = () => {
  const { loading, error, data } = useQuery(ListServiceProviders);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const renderItems = (arr) => {
    return arr.map((el) => (
      <Item
        key={el.pib}
        name={el.lastUpdated}
        pib={el.pib}
        userId={el.userId}
        updatePibs={() => {}}
      />
    ));
  };

  return <div>{renderItems(data.listServiceProviders)}</div>;
};
