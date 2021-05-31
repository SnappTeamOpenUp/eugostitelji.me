import dynamoDb from "../libs/dynamodb";

export const main = async (event) => {
  const params = {
    TableName: process.env.searchTable,
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
