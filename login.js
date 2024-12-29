let form = document.querySelector("form");
let email = document.querySelector("#Email");
let passwrod = document.querySelector("#password");
let submit = document.querySelector("#SignUp");
let empty = document.querySelector(".empty");
let errorData = document.querySelector(".errorData");


let statePass = false;
let stateEmail = false;

passwrod.oninput = function () {
  let passVal = passwrod.value.trim("");
  if (passVal.length >= 1) statePass = true;
  if (statePass && stateEmail) empty.style.display = "none";
};
email.oninput = function () {
  let emailVal = email.value.trim("");
  if (emailVal.length >= 1) stateEmail = true;
  if (statePass && stateEmail) empty.style.display = "none";
};
let data = [];

window.onload = function () {
  data = JSON.parse(localStorage.getItem("Data"));
  if (data == null || data == undefined) data = [];
};

submit.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("submit");
  let emailVal = email.value.trim("");
  let passVal = passwrod.value.trim("");

  let state = false;
  if (emailVal == "" || passVal == "") {
    empty.style.display = "block";
  } else {
    empty.style.display = "none";
    for (let i = 0; i < data.length; i++) {
      if (data[i].email == emailVal && data[i].password == passVal) {
        state = true;
        break;
      }
    }
    if (state == true) {
      errorData.style.display = "none";
      // signUp.style.display = "none";
      // login.style.display = "none";
      // tologout.style.display = "block";
      setTimeout(() => {
        window.location = "./index.html";
      }, 1000);
    } else {
      errorData.style.display = "block";
      // signUp.style.display = "block";
    }
    email.value = "";
    passwrod.value = "";
  }
});


