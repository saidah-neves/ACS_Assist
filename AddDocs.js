const DISCOVERY_ENVIRONMENT_ID = 'system';
const DISCOVERY_COLLECTION_ID = 'news';

const fs = require('fs');
const DiscoveryV1 = require('ibm-watson/discovery/v1');

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  url: 'https://api.us-south.discovery.watson.cloud.ibm.com/instances/3b5bd372-ed9b-4bbb-bce9-a93526329807',
});

const addDocumentParams = {
  environmentId: DISCOVERY_ENVIRONMENT_ID,
  collectionId: DISCOVERY_COLLECTION_ID,
  file: fs.createReadStream('./test-doc4.html'),
};

discovery.addDocument(addDocumentParams)
  .then(response => {
    const documentAccepted = response.result;
    console.log(JSON.stringify(documentAccepted, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });
