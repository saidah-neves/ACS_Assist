const DiscoveryV1 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV1({
  version: '2019-04-30',
  authenticator: new IamAuthenticator({
    apikey: 'CMfoTLs3yHLDTVBqCWnhbJntlj3io-Ojg4QdEdGfuKQ6',
  }),
  url: 'https://api.us-south.discovery.watson.cloud.ibm.com/instances/3b5bd372-ed9b-4bbb-bce9-a93526329807',
});