"user strict"

// const { login } = require("../../../routes/home/home.ctrl");

// console.log("hello");

const id = document.querySelector("#id"),
      psword = document.querySelector("#psword"),
      confirmPsword = document.querySelector("#confirm-psword"),
      registerBtn = document.querySelector("#registerBtn");

      // console.log(id);

      registerBtn.addEventListener("click", register);

      function register() {
        // console.log(id.value);
        const req = {
          id: id.value,
          psword: psword.value,
          confirmPsword: confirmPsword.value,
        }

        console.log(req);
        console.log(JSON.stringify(req));
        fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req),
        }).then((res) => res.json())
          .then((res) => {
            if(res.success) {
              location.href = "/login";
            } else {
              alert(res.msg);
            }
          })
          .catch((err) =>{
            console.error("회원가입중 에러 발생");
          });
      }





$(".email-login").hide();
$("#signup-box-link").click(function(){
  $(".email-login").fadeOut(100);
  $(".email-signup").delay(100).fadeIn(100);
  $("#login-box-link").removeClass("active");
  $("#signup-box-link").addClass("active");
});
$("#login-box-link").click(function(){
  $(".email-login").delay(100).fadeIn(100);;
  $(".email-signup").fadeOut(100);
  $("#login-box-link").addClass("active");
  $("#signup-box-link").removeClass("active");
});