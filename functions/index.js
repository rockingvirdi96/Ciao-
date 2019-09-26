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
