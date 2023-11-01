"user strict"

// const { login } = require("../../../routes/home/home.ctrl");

// console.log("hello");

const id = document.querySelector("#id"),
      psword = document.querySelector("#psword"),
      loginBtn = document.querySelector("#loginBtn");

      // console.log(id);

      loginBtn.addEventListener("click", login);

      function login() {
        // console.log(id.value);
        const req = {
          id: id.value,
          psword: psword.value,
        }

        console.log(req);
        console.log(JSON.stringify(req));
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req),
        }).then((res) => res.json())
          .then((res) => {
            if(res.success) {
              location.href = "/";
            } else {
              alert(res.msg);
            }
          })
          .catch((err) =>{
            console.error("로그인중 에러 발생");
          });
      }





// $(".email-signup").hide();
// $("#signup-box-link").click(function(){
//   $(".email-login").fadeOut(100);
//   $(".email-signup").delay(100).fadeIn(100);
//   $("#login-box-link").removeClass("active");
//   $("#signup-box-link").addClass("active");
// });
// $("#login-box-link").click(function(){
//   $(".email-login").delay(100).fadeIn(100);;
//   $(".email-signup").fadeOut(100);
//   $("#login-box-link").addClass("active");
//   $("#signup-box-link").removeClass("active");
// });