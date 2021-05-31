#!/usr/bin/env node

require("dotenv").config();

const fs = require("fs");
const path = require("path");

const aws = require("aws-sdk");

const dynamoClient = new aws.DynamoDB();

(async () => {
  // Takes args of form table_name fixture table_name fixture table_name ...
  const args = process.argv.slice(2);

  if (args.length % 2) {
    process.exit(1);
  }

  for (let i = 0; i < args.length; i += 2) {
    const tableName = args[i];

    const fixturePath = path.resolve(args[i + 1]);
    const fixtureContents = fs.readFileSync(fixturePath).toString();
    const { Items: fixtureObjects } = JSON.parse(fixtureContents);

    const requestItems = fixtureObjects.map((fo) => {
      return {
        PutRequest: {
          Item: fo,
        },
      };
    });

    for (let i = 0; i < requestItems.length; i += 25) {
      // TODO: it would be faster not to await but push to array and then Promise.all
      const res = await dynamoClient
        .batchWriteItem({
          RequestItems: {
            [tableName]: requestItems.slice(i, i + 25),
          },
        })
        .promise();
      console.log(res);
    }
  }
})();
