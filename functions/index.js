$ = e => {
  return document.querySelector(e);
};

var userInfo = {
  name: "RUPINDER PAL SINGH",
  profession: "WEB DEVELOPER",
  description: "...welcome to my lair...",
  img: "../assets/download.png"
};

$(".main-content .introduction h1").innerText = userInfo.name;
$(".main-content .introduction h3").innerText = userInfo.profession;
$(".main-content .introduction h4").innerText = userInfo.description;
$(".main-content .introduction img").src = userInfo.img;

$(".inn-left").onclick = function() {
  var menuLeft = $(".menu-left-content").style;
  menuLeft.display = "block";
};

$(".inn-right").onclick = function() {
  var menuRight = $(".menu-right-content").style;
  menuRight.display = "block";
};

$(".menu-left .close").onclick = function() {
  var menuLeft = $(".menu-left-content").style;
  menuLeft.display = "none";
};

$(".menu-right .close").onclick = function() {
  var menuRight = $(".menu-right-content").style;
  menuRight.display = "none";
};

$(".menu-right-content ul li").onclick = function() {
  var slideRight = $(".slide-right");
  if (!slideRight.classList.contains("slide-right-action")) {
    slideRight.classList.add("slide-right-action");
  } else {
    slideRight.classList.remove("slide-right-action");
  }
};

$(".menu-left-content ul li").onclick = function() {
  var slideRight = $(".slide-left");
  if (!slideRight.classList.contains("slide-left-action")) {
    slideRight.classList.add("slide-left-action");
  } else {
    slideRight.classList.remove("slide-left-action");
  }
};
