import algoliasearch from "algoliasearch";
import { SSM } from "aws-sdk";

const ssm = new SSM();

export const getKeys = async () => {
  const [res1, res2] = await Promise.all([
    ssm.getParameter({ Name: "ALGOLIA_APP_ID" }).promise(),
    ssm
      .getParameter({ Name: "ALGOLIA_API_KEY", WithDecryption: true })
      .promise(),
  ]);

  const appId = res1.Parameter.Value;
  const apiKey = res2.Parameter.Value;

  return {
    appId,
    apiKey,
  };
};

export const initIndex = (appId, apiKey, indexName) => {
  const client = algoliasearch(appId, apiKey);
  return client.initIndex(indexName);
};
