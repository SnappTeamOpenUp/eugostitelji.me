import React from "react";
import { GraphiQL } from "graphiql";
import gql from "graphql-tag";

import "graphiql/graphiql.min.css";
import "./graphiql-overrides.css";

import { Navbar } from "../../components/Navbar";
import { useAccount } from "../../components/Accounts";

function Api() {
  const { getSession } = useAccount();

  return (
    <>
      <Navbar />
      <div className="fixed top-20 bottom-0 left-0 right-0 border-t-2">
        <GraphiQL
          fetcher={async (graphQLParams) => {
            // TODO: support multiple operations
            // TODO: check token for expiry and refresh it if necessary before sending a request
            const headers = {};

            if (graphQLParams.operationName === "IntrospectionQuery") {
              headers["x-api-key"] = "da2-qwrvbsamwvglhctuvup2f24z4a";
            } else {
              const query = gql(graphQLParams.query);
              if (query.definitions[0].operation === "mutation") {
                const session = await getSession();
                if (session) {
                  headers["authorization"] = session.idToken.jwtToken;
                }
              } else {
                headers["x-api-key"] = "da2-qwrvbsamwvglhctuvup2f24z4a";
              }
            }

            const data = await fetch(
              "https://g6g7iddmsjegloznxy3ybaxnkq.appsync-api.eu-central-1.amazonaws.com/graphql",
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json; charset=utf-8",
                  ...headers,
                },
                body: JSON.stringify(graphQLParams),
                credentials: "same-origin",
              }
            );

            return data.json().catch(() => data.text());
          }}
        />
      </div>
    </>
  );
}

export default Api;
