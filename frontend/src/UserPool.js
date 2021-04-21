import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolDate = {
  UserPoolId: "us-east-1_oUrV0k4xW",
  ClientId: "349s7jttpneq664glf98trf37q",
};

export const UserPool = new CognitoUserPool(poolDate);
