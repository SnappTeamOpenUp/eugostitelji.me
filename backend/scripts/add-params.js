#!/usr/bin/env node

require("dotenv").config();

const aws = require("aws-sdk");

const ssm = new aws.SSM();

(() => {
  const args = process.argv.slice(2);

  const params = [];

  for (const arg of args) {
    let secret = false;
    if (arg === "--secret") {
      secret = true;
      continue;
    }
    const value = process.env[arg];
    if (value) {
      params.push({
        Name: arg,
        Type: secret ? "SecureString" : "String",
        Value: value,
      });
    } else {
      throw new Error(`Param ${arg} is not available in the environment`);
    }
  }

  Promise.allSettled(
    params.map((param) => ssm.putParameter(param).promise())
  ).then((results) => {
    results.forEach((res, index) => {
      if (res.status === "fulfilled") {
        console.log(`${params[index].Name} was added to parameter store`);
      } else {
        console.log(
          `Failed to add ${params[index].Name} to parameter store - Reason: ${res.reason.code}`
        );
      }
    });
  });
})();
