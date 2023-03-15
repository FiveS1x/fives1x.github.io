// 把hero.js的数据渲染进网页

// 选项数据相关
// html结构
/* <li data-type="0" class="current">
    <span class="ms-radio"><i class="i"></i></span>全部
</li> */
var heroTypeUl = document.querySelectorAll(".type-ms");

for (var x = 0; x < heroTypes.length; x++) {
  var newTypeLi = document.createElement("li");
  newTypeLi.dataset.type = heroTypes[x].id;
  if (heroTypes[x].id == 0) {
    newTypeLi.classList.add("current");
  }
  newTypeLi.innerHTML =
    '<span class="ms-radio"><i class="i"></i></span>' + heroTypes[x].type;
  heroTypeUl[1].appendChild(newTypeLi);
  allTypeBtn = document.querySelectorAll(".type-ms li");
}

for (var x = 0; x < pTypes.length; x++) {
  var newTypeLi = document.createElement("li");
  newTypeLi.dataset.type = pTypes[x].id;
  newTypeLi.innerHTML =
    '<span class="ms-radio"><i class="i"></i></span>' + pTypes[x].ptype;
  heroTypeUl[0].appendChild(newTypeLi);
  allTypeBtn = document.querySelectorAll(".type-ms li");
}

// 英雄数据相关

// 一个英雄的数据
// {
// 	"ename": 105,
// 	"cname": "廉颇",
// 	"title": "正义爆轰",
// 	"new_type": 0,
// 	"hero_type": 3,
// 	"skin_name": "正义爆轰|地狱岩魂"
// }

// 英雄数据html结构
/* <li>
  <a href="https://pvp.qq.com/web201605/herodetail/545.shtml" target="_blank">
    <img
      src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/545/545.jpg"
      alt="莱西奥"
    />
    莱西奥
  </a>
</li> */

var allHeroUl = document.querySelector(".herolist-content ul");

// 循环整个英雄表(倒着循环)
// 并把数据放进网页
for (var i = heroList.length - 1; i >= 0; i--) {
  var newHeroLi = document.createElement("li");
  // li里面的结构
  newHeroLi.innerHTML =
    '<a href="https://pvp.qq.com/web201605/herodetail/' +
    heroList[i].ename +
    '.shtml" target="_blank">' +
    '<img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/' +
    heroList[i].ename +
    "/" +
    heroList[i].ename +
    '.jpg" "/>' +
    heroList[i].cname +
    "</a>";
  allHeroUl.appendChild(newHeroLi);
}

var allTypeBtn;

// 定义一个刷新英雄的方法
function refreshHero(typeIndex, typeNameInArr1, typeNameInArr2) {
  // 清除当前所有的英雄 不需要参数
  var nowAllLi = document.querySelectorAll(".herolist-content li");
  for (var j = 0; j < nowAllLi.length; j++) {
    allHeroUl.removeChild(nowAllLi[j]);
  }
  // 重新加载hero_type==type的英雄  需要一个this.dataset.type
  for (var i = heroList.length - 1; i >= 0; i--) {
    if (heroList[i][typeNameInArr1] == typeIndex) {
      var newHeroLi = document.createElement("li");
      // li里面的结构
      newHeroLi.innerHTML =
        '<a href="https://pvp.qq.com/web201605/herodetail/' +
        heroList[i].ename +
        '.shtml" target="_blank">' +
        '<img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/' +
        heroList[i].ename +
        "/" +
        heroList[i].ename +
        '.jpg" "/>' +
        heroList[i].cname +
        "</a>";
      allHeroUl.appendChild(newHeroLi);
    } else if (typeNameInArr2 != null) {
      if (heroList[i][typeNameInArr2] == typeIndex) {
        var newHeroLi = document.createElement("li");
        // li里面的结构
        newHeroLi.innerHTML =
          '<a href="https://pvp.qq.com/web201605/herodetail/' +
          heroList[i].ename +
          '.shtml" target="_blank">' +
          '<img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/' +
          heroList[i].ename +
          "/" +
          heroList[i].ename +
          '.jpg" "/>' +
          heroList[i].cname +
          "</a>";
        allHeroUl.appendChild(newHeroLi);
      }
    }
  }
}

// 一个按钮点击事件
for (var n = 0; n < allTypeBtn.length; n++) {
  allTypeBtn[n].onclick = function () {
    // 排他添加current
    for (var z = 0; z < allTypeBtn.length; z++) {
      allTypeBtn[z].classList.remove("current");
    }
    this.classList.add("current");

    if (this.dataset.type == 0) {
      //  type=0 全部英雄
      refreshHero(this.dataset.type, "new_type");
    } else if (this.dataset.type >= 10) {
      refreshHero(this.dataset.type, "pay_type");
    } else {
      // 其他类型
      refreshHero(this.dataset.type, "hero_type", "hero_type2");
    }
  };
}

// 输入框输入事件
var input = document.querySelector("input");
console.log(input);

input.onclick = function () {
  // 排他 给"全部"添加current
  for (var z = 0; z < allTypeBtn.length; z++) {
    allTypeBtn[z].classList.remove("current");
  }
  allTypeBtn[2].classList.add("current");
  refreshHero("new_type", 0);
};

input.oninput = function () {
  // 排他 给"全部"添加current
  for (var z = 0; z < allTypeBtn.length; z++) {
    allTypeBtn[z].classList.remove("current");
  }
  allTypeBtn[2].classList.add("current");

  var inputValue = input.value;
  // console.log(inputValue);
  // 清除当前所有的英雄
  var nowAllLi = document.querySelectorAll(".herolist-content li");
  for (var j = 0; j < nowAllLi.length; j++) {
    allHeroUl.removeChild(nowAllLi[j]);
  }
  // 重新加载hero_type==type的英雄
  for (var i = heroList.length - 1; i >= 0; i--) {
    if (String(heroList[i].cname).includes(inputValue)) {
      var newHeroLi = document.createElement("li");
      // li里面的结构
      newHeroLi.innerHTML =
        '<a href="https://pvp.qq.com/web201605/herodetail/' +
        heroList[i].ename +
        '.shtml" target="_blank">' +
        '<img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/' +
        heroList[i].ename +
        "/" +
        heroList[i].ename +
        '.jpg" "/>' +
        heroList[i].cname +
        "</a>";
      allHeroUl.appendChild(newHeroLi);
    }
  }
};
