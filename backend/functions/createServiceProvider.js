import { v4 as uuidv4 } from "uuid";

import dynamoDb from "../libs/dynamodb";

export const main = async (event) => {
  const { title, logoImg, workingHours, coverImg, city, country, address } =
    event;

  const params = {
    TableName: process.env.SERVICE_PROVIDER_TABLE,
    Item: {
      id: uuidv4(),
      dateCreated: new Date().toISOString(),
      title,
      logoImg,
      workingHours,
      coverImg,
      city,
      country,
      address,
      published: 0,
    },
  };

  await dynamoDb.put(params);

  return params.Item;
};
