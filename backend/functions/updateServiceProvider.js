import dynamoDb from "../libs/dynamodb";

export const main = async (event) => {
  const params = {
    TableName: process.env.SERVICE_PROVIDER_TABLE,
    Key: {
      userId: "1",
      pib: event.pathParameters.id,
    },
    UpdateExpression: "SET lastUpdated = :lastUpdated",
    ExpressionAttributeValues: {
      ":lastUpdated": new Date().toLocaleString(),
    },
    ReturnValues: "ALL_NEW",
  };

  await dynamoDb.update(params);

  return { status: true };
};
