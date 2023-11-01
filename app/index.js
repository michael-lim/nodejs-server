"use strict"

//모듈
const express = require("express");
const app = express();

const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

//앱셋팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); //미들웨어를 구동시켜주는 메서드

// app.get("/", (req, res) => {
//   // res.send("여기는 루트입니다");
//   res.render("home/index");  
// })

// app.get("/login", (req, res) => {
//   //res.send("여기는 로그인화면입니다");
//   res.render("home/login");  
// })

app.listen(PORT, function() {
  console.log("서버가동");
})

// module.exports = app;





//express를 쓰지않고 코딩하는 예
// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, {"content-type": "text/html; charset=utf8"});
//   if(req.url === "/") {
//     res.end("여기는 루트입니다");
//   } else if (req.url === "/login") {
//     res.end("여기는 로그인화면입니다");
//   }
// });

// app.listen(3000, () => {
//   console.log("http로 가동된 서버입니다");
// })

