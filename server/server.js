const http = require('http');
const httpProxy = require('http-proxy');


class Server {

    constructor() {

    }

    async init() {

        var proxy = httpProxy.createServer({
            auth: 'lum-customer-hl_e65b55fa-zone-static-ip-178.171.88.167:ub5cdtoo31n6',
            target: {
                host: 'zproxy.lum-superproxy.io',
                port: 22225
            },
            toProxy: true
        });

        proxy.listen(5050);

        console.log('starting');

    }

}

module.exports = Server;