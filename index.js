const Server = require('./server/server');
const server = new Server();

async function start() {

    await server.init();

}

start();