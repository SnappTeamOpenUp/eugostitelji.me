import algoliasearch from "algoliasearch";

import { algoliaConfig } from "../config/algolia";

function buildFacetFilters(filters) {
  const facetFilters = [];

  for (const filter in filters) {
    if (Array.isArray(filters[filter])) {
      for (const element of filters[filter]) {
        facetFilters.push(`${filter}:${element}`);
      }
    } else {
      facetFilters.push(`${filter}:${filters[filter]}`);
    }
  }

  return facetFilters;
}

export async function searchAlgolia(query, filters, offset = 0, limit = 15) {
  const client = algoliasearch(algoliaConfig.APP_ID, algoliaConfig.SEARCH_KEY);
  const index = client.initIndex(algoliaConfig.INDEX_NAME);

  const res = await index.search(query, {
    facetFilters: buildFacetFilters(filters),
    offset: offset || 0,
    length: limit,
  });

  const hits = res.hits || [];

  const newOffset = offset + limit;

  return {
    serviceProviders: hits.map((hit) => {
      const { objectID: id, ...details } = hit;
      return { id, ...details };
    }),
    nextToken: res.nbHits > newOffset ? newOffset : null,
  };
}
