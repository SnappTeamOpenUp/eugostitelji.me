import { v4 as uuidv4 } from "uuid";

import dynamoDb from "../libs/dynamodb";

export const main = async (event) => {
  const { title, logoImg, workingHours, coverImg } = event.arguments;

  const params = {
    TableName: process.env.searchTable,
    Item: {
      id: uuidv4(),
      dateCreated: Date.now(),
      title,
      logoImg,
      workingHours,
      coverImg,
    },
  };

  await dynamoDb.put(params);

  return params.Item;
};
