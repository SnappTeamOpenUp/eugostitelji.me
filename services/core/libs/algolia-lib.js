// For the default version
import algoliasearch from "algoliasearch";
// import AWS from "aws-sdk";

// const ssm = AWS.SSM();
// const appIdParams = {
//     Name: '/notes-api/algolia/app-id', /* required */
//     WithDecryption: true || false
//   };

const client = algoliasearch(
  process.env.algoliaAppId,
  process.env.algoliaAdminApiKey
);
const index = client.initIndex(process.env.algoliaIndexName);

export default {
  addServiceProvider: (streamServiceProvider) => {
    const serviceProvider = prepareServiceProviderForAlgolia(
      streamServiceProvider
    );
    console.log(serviceProvider);

    return index.saveObject(serviceProvider);
  },
};

const prepareServiceProviderForAlgolia = (streamServiceProvider) => {
  console.log(streamServiceProvider);
  return {
    objectID: streamServiceProvider.pib.S,
    address: streamServiceProvider.address.S,
    city: streamServiceProvider.city.S,
    contactNumber: streamServiceProvider.contactNumber.S,
    name: streamServiceProvider.name.S,
    region: streamServiceProvider.region.S,
    userId: streamServiceProvider.userId.S,
    latitude: streamServiceProvider.latitude.S,
    longitude: streamServiceProvider.longitude.S,
  };
};
