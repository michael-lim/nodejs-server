"user strict"

// const { login } = require("../../../routes/home/home.ctrl");

// console.log("hello");

const id = document.querySelector("#id"),
      psword = document.querySelector("#psword"),
      confirmPsword = document.querySelector("#confirm-psword"),
      registerBtn = document.querySelector("#register-button");

      // console.log(id);

      registerBtn.addEventListener("click", register);

      function register() {
        // console.log(id.value);

        if(!id.value) return alert("아이디를 입력해주세요.");
        if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

        const req = {
          id: id.value,
          psword: psword.value,
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





$(".email-signup").hide();
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