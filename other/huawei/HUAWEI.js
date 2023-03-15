var leftBtn = document.getElementById("left-btn");
var rightBtn = document.getElementById("right-btn");
var moveContent = document.getElementById("content");
var strips = document.getElementsByClassName("long");
var timer = setInterval("right();", 5000);

// 获取屏幕宽度
var htmlWidth = window.getComputedStyle(swiper).width;
htmlWidth = parseFloat(htmlWidth);

var current = 0;
var moveLong = 0;

strips[current].style.opacity = 1;

leftBtn.onclick = function left() {
  if (current === 0) {
    // 如果是现在是图0 把下一张设置为图2
    // 并移动图片
    current = 2;
    moveLong = htmlWidth * current;
    moveContent.style.transform = "translateX( -" + moveLong + "px )";
    for (let index = 0; index < strips.length; index++) {
      strips[index].style.opacity = 0.3;
    }
    strips[current].style.opacity = 1;
  } else {
    current -= 1;
    moveLong = htmlWidth * current;
    moveContent.style.transform = "translateX( -" + moveLong + "px )";
    for (let index = 0; index < strips.length; index++) {
      strips[index].style.opacity = 0.3;
    }
    strips[current].style.opacity = 1;
  }
  // 重置定时器
  clearInterval(timer);
  timer = setInterval("right();", 2000);
};

rightBtn.onclick = function () {
  right();
  // 重置定时器
  clearInterval(timer);
  timer = setInterval("right();", 2000);
};

function right() {
  if (current === 2) {
    // 如果是现在是图2 把下一张设置为图0
    // 并移动图片
    current = 0;
    moveLong = htmlWidth * current;
    moveContent.style.transform = "translateX( -" + moveLong + "px )";
    for (let index = 0; index < strips.length; index++) {
      strips[index].style.opacity = 0.3;
    }
    strips[current].style.opacity = 1;
  } else {
    current += 1;
    moveLong = htmlWidth * current;
    moveContent.style.transform = "translateX( -" + moveLong + "px )";
    for (let index = 0; index < strips.length; index++) {
      strips[index].style.opacity = 0.3;
    }
    strips[current].style.opacity = 1;
  }
}
