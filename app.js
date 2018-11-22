/**
 + © 2018-19
 +
 + load dependencies
 */

const restify = require('restify');

/**
 + application setup
 */

const server = restify.createServer();
const PORT = process.env.PORT || 8080;
/**
 * sample endpoint
 */
server.get('/', (req, res, next) => {
  res
    .send(
      {
        status: 'OK',
        time: new Date().getTime()
      }
    );
});

/**
 * start server
 */
server.listen(PORT, () => {
  console.log(`${server.name} listening at ${server.url}`);
});