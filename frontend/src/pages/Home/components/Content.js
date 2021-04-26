import React from "react";
import axios from "axios";
import { Item } from "./Item";

import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

const ListServiceProviders = gql`
  query {
    listServiceProviders {
      pib
      userId
    }
  }
`;

const Content = ({ items }) => {
  const updatePibs = (pib) => {
    axios
      .put(
        `https://f14iah3bhi.execute-api.us-east-2.amazonaws.com/dev/places/${pib}`
      )
      .then((res) => {
        console.log(res);
        console.log("Updated;");
        // fetchPlaces();
      })
      .catch((err) => console.log(err));
  };

  const renderItems = (arr) => {
    return arr.map((el) => (
      <Item
        key={el.pib}
        name={el.lastUpdated}
        pib={el.pib}
        userId={el.userId}
        updatePibs={updatePibs}
      />
    ));
  };

  return (
    <div>
      {items.length ? (
        renderItems(items)
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          brtt...
        </div>
      )}
    </div>
  );
};

export default compose(
  graphql(ListServiceProviders, {
    options: {
      fetchPolicy: "cache-and-network",
    },
    props: (props) => ({
      items: props.data.listServiceProviders
        ? props.data.listServiceProviders
        : [],
    }),
  })
)(Content);
