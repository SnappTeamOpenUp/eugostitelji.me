const appsyncConfig = {
  aws_appsync_graphqlEndpoint: process.env.REACT_APP_APPSYNC_GRAPHQL_ENDPOINT,
  aws_appsync_region: process.env.REACT_APP_APPSYNC_REGION,
  aws_appsync_authenticationType: process.env.REACT_APP_APPSYNC_AUTH_TYPE,
  aws_appsync_apiKey: process.env.REACT_APP_APPSYNC_API_KEY,
};

export default appsyncConfig;
