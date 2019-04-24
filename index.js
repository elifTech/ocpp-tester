const { Nuxt, Builder } = require('nuxt');
const { createServer } = require('./api/centralSystem');

const http = require('http')
const fs = require('fs')
const isProd = (process.env.NODE_ENV === 'production')
const port = process.env.PORT || 3000

// We instantiate nuxt.js with the options
const config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config);

// Render every route with Nuxt.js

// Build only in dev mode with hot-reloading
if (config.dev) {
  new Builder(nuxt).build()
    .then(listen)
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}
else {
  listen()
}

function listen() {
  const options = {};

  const server = http.createServer(options, nuxt.render);
  const centralSystem = createServer(server);

  server.listen(port)

  console.log(`Server listening on localhost:${port}`)
}
