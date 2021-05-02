import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";
import { v4 as uuidv4 } from "uuid";

export const main = handler(async (event) => {
  // const { id } = event.arguments;

  const params = {
    TableName: process.env.searchTable,
    Item: {
      userId: "1", // The id of the author
      pib: uuidv4(), // A unique uuid
      // pib: id, // Parsed from request body
    },
  };
  await dynamoDb.put(params);
  return params.Item;
});
