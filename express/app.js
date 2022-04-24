const App = require("./index")
const express = require("express");
const cors = require("cors");

const appConfig = {
    port: 5000,
    routes: [
        // 라우터들을 여기에 작성한다.
        authController,
        cafeController,
        commentController,
        likeController
    ],
    middlewares: [
        // 미들웨어를 여기에 작성한다.
        cors(corsConfig),
        express.json(),
        express.urlencoded({ extended: false }),
        cookieParser()
    ]
}


const app = new App(appConfig.port, appConfig.middlewares, appConfig.routes)
app.listen();
