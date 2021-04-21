import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  // const data = JSON.parse(event.body);
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
});
