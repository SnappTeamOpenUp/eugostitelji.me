import "./styles/base.css";
import "./styles/index.css";

import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { createAuthLink } from "aws-appsync-auth-link";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AppSync from "./config/app-sync";

const url = AppSync.aws_appsync_graphqlEndpoint;
const region = AppSync.aws_appsync_region;
const auth = {
  type: AppSync.aws_appsync_authenticationType,
  apiKey: AppSync.aws_appsync_apiKey,
};
const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createHttpLink({ uri: url }),
]);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const WithProvider = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(
  <BrowserRouter>
    <WithProvider />
  </BrowserRouter>,
  document.getElementById("root")
);
