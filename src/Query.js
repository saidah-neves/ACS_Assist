require('dotenv').config()
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const discovery = new DiscoveryV1({
  version: '2019-04-30'
});
const queryParams = {
  environmentId: process.env.DISCOVERY_ENVIRONMENT_ID,
  collectionId: process.env.DISCOVERY_COLLECTION_ID,
};

discovery.query(queryParams)
  .then(queryResponse => {
    console.log(JSON.stringify(queryResponse, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });