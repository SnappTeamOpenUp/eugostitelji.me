import { DynamoDB } from "aws-sdk";

import { initIndex, getKeys } from "../libs/algolia";

const prepareServiceProviderForAlgolia = (streamServiceProvider) => {
  const { id, ...rest } = DynamoDB.Converter.unmarshall(streamServiceProvider);
  return {
    ...rest,
    objectID: id,
  };
};

export const addServiceProviders = async ({ Records }) => {
  const toRemove = [];
  const toSave = [];

  for (const record of Records) {
    if (record.eventName === "REMOVE") {
      const { objectID } = prepareServiceProviderForAlgolia(
        record.dynamodb.OldImage
      );
      toRemove.push(objectID);
    } else {
      toSave.push(prepareServiceProviderForAlgolia(record.dynamodb.NewImage));
    }

    if (toRemove.length === 0 && toSave.length === 0) {
      return;
    }

    const { appId, apiKey } = await getKeys();

    const index = initIndex(
      appId,
      apiKey,
      process.env.ALGOLIA_SERVICE_PROVIDER_INDEX_NAME
    );

    if (toRemove.length > 0) {
      // TODO: error handling
      await index.deleteObjects(toRemove);
    }

    if (toSave.length > 0) {
      try {
        await index.setSettings({
          searchableAttributes: ["title", "city", "country", "address", "tags"],
          attributesForFaceting: ["tags", "city", "country"],
        });

        await index.saveObjects(toSave);
      } catch (err) {
        console.log(err.errorMessage);
      }
    }
  }
};
