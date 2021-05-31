import dynamoDb from "../libs/dynamodb";

export const main = async (event) => {
  const params = {
    TableName: process.env.searchTable,
    Key: {
      userId: "1",
      pib: event.pathParameters.id,
    },
  };
  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }

  return result.Item;
};
