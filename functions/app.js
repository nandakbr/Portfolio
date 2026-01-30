const app = require('../app');
const serverless = require('serverless-http');

// We use the exported handler from app.js if it exists, 
// otherwise we wrap the app here.
module.exports.handler = app.handler || serverless(app);
