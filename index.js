let form = document.querySelector("form");
let userName = document.querySelector("#UserName");
let check = document.querySelector(".check");
let tmams = document.querySelectorAll(".tmam");
let wrongs = document.querySelectorAll(".wrong");
let email = document.querySelector("#Email");
let password = document.querySelector("#password");
let repassword = document.querySelector("#repassword");
let submit = document.querySelector("#SignUp");
let EmailInvalid = document.querySelector(".EmailInvalid");
let passwordCheck = document.querySelector(".passwordCheck");
let pass = document.querySelectorAll(".pass");
let wpass = document.querySelectorAll(".wpass");
// let login = document.querySelector(".login");

let data = [];

let stateUserName = false;
let stateEmail = false;
let statePassword = false;
let stateRepassword = false;

window.onload = function () {
  data = JSON.parse(localStorage.getItem("Data"));
  if (data == null) data = [];
};

//userName.oninput = checkUserName;
userName.addEventListener("input", checkUserName);
//userName.onblur = outUserName;
userName.addEventListener("blur", outUserName);
//email.oninput = checkEmail;
email.addEventListener("input", checkEmail);
//password.oninput = checkPassword;
password.addEventListener("input", checkPassword);
//password.onblur = outPass;
password.addEventListener("blur", outPass);
//repassword.oninput = Confirm;
repassword.addEventListener("input", Confirm);
function outUserName() {
  check.style.display = "none";
}

function outPass() {
  passwordCheck.style.display = "none";
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (stateUserName && stateEmail && statePassword && stateRepassword) {
    let obj = {
      userName: userName.value.trim(),
      email: email.value.trim(),
      password: password.value.trim()
    };
    data.push(obj);
    localStorage.setItem("Data", JSON.stringify(data));
    //  login.style.display = "none";
    setTimeout(() => {
      window.location = "./login.html";
    }, 1000);
  } else {
    //  login.style.display = "block";
  }
});

// check User Name
function checkUserName() {
  check.style.display = "block";
  let userNameVal = userName.value.trim();
  //console.log(userNameVal.match(/^[A-Z]/));
  //console.log(userNameVal.length);
  if (/^[A-Z]/.test(userNameVal)) {
    tmams[1].style.display = "inline";
    wrongs[1].style.display = "none";
  } else {
    tmams[1].style.display = "none";
    wrongs[1].style.display = "inline";
  }
  if (userNameVal.length >= 5 && userNameVal.length <= 30) {
    tmams[0].style.display = "inline";
    wrongs[0].style.display = "none";
  } else {
    tmams[0].style.display = "none";
    wrongs[0].style.display = "inline";
  }
  if (
    /^[A-Z]/.test(userNameVal) &&
    userNameVal.length >= 5 &&
    userNameVal.length <= 30
  ) {
    stateUserName = true;
    userName.style.borderColor = "rgb(20, 224, 20)";
    //console.log(check);
    check.style.borderColor = "rgb(20, 224, 20)";
  } else {
    stateUserName = false;
    userName.style.borderColor = "rgb(190, 10, 10);";
  }
}

function checkEmail() {
  let emailVal = email.value.trim();
  console.log(emailVal);

  let reqex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (reqex.test(emailVal)) {
    email.style.borderColor = "rgb(20, 224, 20)";
    stateEmail = true;
  } else {
    email.style.borderColor = "rgb(190, 10, 10)";
    stateEmail = false;
  }
}

function checkPassword() {
  let num = 0;
  let passwordVal = password.value.trim();
  passwordCheck.style.display = "block";
  if (/[A-Z]/.test(passwordVal)) {
    pass[1].style.display = "inline";
    wpass[1].style.display = "none";
    num++;
  } else {
    pass[1].style.display = "none";
    wpass[1].style.display = "inline";
  }
  if (/[a-z]/.test(passwordVal)) {
    pass[2].style.display = "inline";
    wpass[2].style.display = "none";
    num++;
  } else {
    pass[2].style.display = "none";
    wpass[2].style.display = "inline";
  }
  if (/[0-9]/.test(passwordVal)) {
    pass[3].style.display = "inline";
    wpass[3].style.display = "none";
    num++;
  } else {
    pass[3].style.display = "none";
    wpass[3].style.display = "inline";
  }
  if (/\w{8,50}/.test(passwordVal)) {
    pass[0].style.display = "inline";
    wpass[0].style.display = "none";
    num++;
  } else {
    pass[0].style.display = "none";
    wpass[0].style.display = "inline";
  }
  if (num == 4) {
    statePassword = true;
    passwordCheck.style.borderColor = "rgb(20, 224, 20)";
    password.style.borderColor = "rgb(20, 224, 20)";
  } else {
    statePassword = false;
    password.style.borderColor = "rgb(190, 10, 10)";
  }
}

function Confirm() {
  let repasswordVal = repassword.value.trim();
  if (repasswordVal == password.value) {
    repassword.style.borderColor = "rgb(20, 224, 20)";
    stateRepassword = true;
  } else {
    repassword.style.borderColor = "rgb(190, 10, 10)";
    stateRepassword = false;
  }
}

