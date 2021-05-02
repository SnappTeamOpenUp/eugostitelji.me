import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";

export const main = handler(async (event) => {
  const { content } = event.arguments;

  const params = {
    TableName: process.env.tableName,
    Item: {
      userId: "1", // The id of the author
      noteId: uuid.v1(), // A unique uuid
      content: content, // Parsed from request body
    },
  };
  await dynamoDb.put(params);
  return params.Item;
});
