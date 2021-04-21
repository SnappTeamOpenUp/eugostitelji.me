import algolia from "../libs/algolia-lib";

export const main = async (event, context, callback) => {
  console.log("algoliaSync was called");
  const eventData = event.Records[0];
  const serviceProvider = eventData.dynamodb.NewImage;
  console.log(serviceProvider);

  algolia.addServiceProvider(serviceProvider).then((res) => {
    console.log(res);
    callback(null, null);
  });
};
