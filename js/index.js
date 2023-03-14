var header = document.querySelector("header");
var headerHight = parseFloat(window.getComputedStyle(header).height);

var nav = document.querySelector("nav");

window.onscroll = function () {
  if (scrollY > headerHight / 2) {
    // $(nav).hide();
    $(nav).fadeOut("normal");
  } else {
    // $(nav).show();
    $(nav).fadeIn("normal");
  }
};

var navLink = document.querySelectorAll(".nav-item");

for (let index = 0; index < navLink.length - 1; index++) {
  navLink[index].onclick = function () {
    scrollTo(index * headerHight + "px");
  };
}
