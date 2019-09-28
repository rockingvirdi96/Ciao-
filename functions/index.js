$ = e => {
  return document.querySelector(e);
};

var userInfo = {
  name: "RUPINDER PAL SINGH",
  profession: "WEB DEVELOPER",
  description: ".Ca va bien?.",
  img: "../assets/download.png"
};

$(".main-content .introduction h1").innerText = userInfo.name;
$(".main-content .introduction h3").innerText = userInfo.profession;
$(".main-content .introduction img").src = userInfo.img;

$(".inn-left").onclick = function() {
  var menuLeft = $(".menu-left-content");
  if (!menuLeft.classList.contains("menu-content-animation")) {
    menuLeft.classList.add("menu-content-animation");
  }
};

$(".inn-right").onclick = function() {
  var menuRight = $(".menu-right-content");
  if (!menuRight.classList.contains("menu-content-animation")) {
    menuRight.classList.add("menu-content-animation");
  }
};

$(".menu-left .close").onclick = function() {
  var menuLeft = $(".menu-left-content");
  if (menuLeft.classList.contains("menu-content-animation")) {
    menuLeft.classList.remove("menu-content-animation");
  }
};

$(".menu-right-content .close").onclick = function() {
  var menuRight = $(".menu-right-content");
  if (menuRight.classList.contains("menu-content-animation")) {
    menuRight.classList.remove("menu-content-animation");
  }
};

listt = $(".menu-right-content ul").children;
for (i = 0; i < listt.length; i++) {
  listt[i].onclick = function() {
    var slideRight = $(".slide-right");
    if (!slideRight.classList.contains("slide-right-action")) {
      slideRight.classList.add("slide-right-action");
    } else {
      slideRight.classList.remove("slide-right-action");
      setTimeout(function() {
        slideRight.classList.toggle("slide-right-action");
      }, 800);
    }
  };
}

list = $(".menu-left-content ul").children;
for (i = 0; i < list.length; i++) {
  list[i].onclick = function() {
    var slideLeft = $(".slide-left");
    if (!slideLeft.classList.contains("slide-left-action")) {
      slideLeft.classList.add("slide-left-action");
    } else {
      slideLeft.classList.remove("slide-left-action");
      setTimeout(function() {
        slideLeft.classList.toggle("slide-left-action");
      }, 800);
    }
  };
}
