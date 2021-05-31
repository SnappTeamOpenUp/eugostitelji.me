import dynamoDb from "../libs/dynamodb";

export const main = async (event) => {
  const params = {
    TableName: process.env.searchTable,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": "1",
    },
  };

  const result = await dynamoDb.query(params);
  return result.Items;
};
