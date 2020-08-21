const fs = require('fs');
const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: 'CMfoTLs3yHLDTVBqCWnhbJntlj3io-Ojg4QdEdGfuKQ6',
  }),
  url: 'https://api.us-south.discovery.watson.cloud.ibm.com/instances/3b5bd372-ed9b-4bbb-bce9-a93526329807',
});

const addDocumentParams = {
  environmentId: '32d99835-9310-4873-a29d-b2be6aaa1fad',
  collectionId: 'aabcf357-e6dd-4487-aa2b-d2bfc65876c0',
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

  const queryParams = {
    environmentId: '32d99835-9310-4873-a29d-b2be6aaa1fad',
    collectionId: 'aabcf357-e6dd-4487-aa2b-d2bfc65876c0',
  };
  
  discovery.query(queryParams)
    .then(queryResponse => {
      console.log(JSON.stringify(queryResponse, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
    });
