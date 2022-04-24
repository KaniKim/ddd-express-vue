class App {

    applyMiddlewares(middlewares) {
        middlewares.forEach(route => {
            this.app.use(route.url, route.controller);
        })
    }

    applyRoutes(routes) {
        routes.forEach(route => {
            this.app.use(route.url, route.controller);
        })
    }

    constructor(port, middlewares, routes) {
        const express = require("express");
        this.app = express();
        this.port = port;
        this.applyMiddlewares(middlewares);
        this.applyRoutes(routes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`server started on PORT ${this.port}`);
        })
    }
}

module.exports(App);
