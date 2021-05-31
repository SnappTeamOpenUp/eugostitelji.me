import { CognitoUserPool } from "amazon-cognito-identity-js";

export const poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_COGNTIO_APP_CLIENT_ID,
};

export const UserPool = new CognitoUserPool(poolData);
