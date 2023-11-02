"use strict"

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

//앱셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended: true}));

app.use("/", home); //미들웨어를 구동시켜주는 메서드

app.listen(PORT, function() {
  console.log("서버가동");
})

// module.exports = app;