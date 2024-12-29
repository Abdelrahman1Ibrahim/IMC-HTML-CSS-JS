let button = document.querySelector(".fa-list");
console.log(button);
let unorderList = document.querySelector(".unorderList");
console.log(unorderList);
let wrong = document.querySelector(".wrong");
console.log(wrong);
// mouseover
let state = false;
window.addEventListener("resize", checkWidth);
button.addEventListener("click", function () {
  unorderList.style.display = "block";
  unorderList.style.backgroundColor = "eee";
  unorderList.style.boxShadow = "0 0 40px rgba(148, 142, 142, 0.7)";
  state = true;
  checkWidth();
});

wrong.onclick = function () {
  unorderList.style.display = "none";
  state = false;
};
function checkWidth() {
  if (window.innerWidth > 768) {
    unorderList.style.display = "flex";
    unorderList.style.boxShadow = "0 0 0 0 ";
    wrong.style.display = "none";
    unorderList.style.position = "static";
  } else {
    unorderList.style.display = "none";
    wrong.style.display = "none";
    if (state) {
      unorderList.style.position = "absolute";
      unorderList.style.display = "block";
      unorderList.style.boxShadow = "0 0 40px rgba(148, 142, 142, 0.7)";
      wrong.style.display = "block";
    }
  }
}
