const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


var sidemenu = document.getElementById("sidemenu");

function openMenu() {
  sidemenu.style.right = "0px";
}

function closeMenu() {
  sidemenu.style.right = "-200px";
}