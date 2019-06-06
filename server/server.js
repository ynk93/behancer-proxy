var fs = require('fs');
const httpProxy = require('http-proxy');


class Server {

    constructor() {

    }

    async init() {

        var server1 = '13.69.75.191:3128';
        var server2 = '178.62.231.71:8080';

        var proxy = httpProxy.createServer({
            target: {
                protocol: 'https:',
                host: '178.62.231.71',
                port: '8080',
                pfx: fs.readFileSync('cert/user1-cert.p12'),
                passphrase: 'ziplzipl'
            },
            changeOrigin: true,
            toProxy: true
        });

        proxy.listen(8080);

        console.log('starting');

    }

}

module.exports = Server;