import handler from "../libs/handler-lib";
import dynamoDb from "../libs/dynamodb-lib";
import { v4 as uuidv4 } from "uuid";

export const main = handler(async (event) => {
  const { title, logoImg, workingHours, coverImg } = event.arguments;

  const params = {
    TableName: process.env.searchTable,
    Item: {
      pib: uuidv4(), // A unique uuid
      userId: "1", // The id of the author
      dateCreated: Date.now(),
      title,
      logoImg,
      workingHours,
      coverImg,
    },
  };
  await dynamoDb.put(params);
  return params.Item;
});
