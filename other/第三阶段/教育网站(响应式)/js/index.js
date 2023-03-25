// 注册mixitup组件的两种方法
// let options = document.querySelector("#options");
// let mixer = mixitup(options);

let mixer = mixitup($("#options"));

let menuOptions = document.querySelectorAll(".menu li");
for (let i = 0; i < menuOptions.length; i++) {
  menuOptions[i].onclick = function () {
    for (let j = 0; j < menuOptions.length; j++) {
      menuOptions[j].classList.remove("active");
    }
    this.classList.add("active");
  };
}
