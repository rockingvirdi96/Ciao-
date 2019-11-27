$ = e => {
  return document.querySelector(e);
};

var userInfo = {
  name: "RUPINDER PAL SINGH",
  profession: "WEB DEVELOPER",
  description: ".Ca va bien?."
};
var education = {
  Course: ["Higher Secondary School", "Bachelors in Computer Science", "AEC Diploma I.T Programmer Analyst"],
  Institute: ["C.T Public School", "D.A.V College", "La Salle College"],
  Location: ["Jalandhar,India", "Jalandhar,India", "Montreal,Quebec"],
  Duration: ["till 2014", "2014-2017", "Current"]
};
var projects = {};
var skills = {};

$(".main-content .introduction h1").innerText = userInfo.name;
$(".main-content .introduction h3").innerText = userInfo.profession;

$(".inn-left").onclick = function () {
  var menuLeft = $(".menu-left-content");
  var slideLeft = $(".slide-left");
  if (!menuLeft.classList.contains("menu-content-animation")) {
    menuLeft.classList.add("menu-content-animation");
    slideLeft.classList.add("slide-opacity-action");
  }
};

$(".inn-right").onclick = function () {
  var menuRight = $(".menu-right-content");
  var slideRight = $(".slide-right");
  if (!menuRight.classList.contains("menu-content-animation")) {
    menuRight.classList.add("menu-content-animation");
    slideRight.classList.add("slide-opacity-action");
  }
};

$(".menu-left-content .close").onclick = function () {
  var menuLeft = $(".menu-left-content");
  var slideLeft = $(".slide-left");
  if (menuLeft.classList.contains("menu-content-animation")) {
    setTimeout(function () {
      menuLeft.classList.remove("menu-content-animation");
    }, 300);
    setTimeout(function () {
      slideLeft.classList.remove("slide-opacity-action");
    }, 200);
    slideLeft.classList.remove("slide-left-action");
  }
};

$(".menu-right-content .close").onclick = function () {
  var menuRight = $(".menu-right-content");
  var slideRight = $(".slide-right");
  if (menuRight.classList.contains("menu-content-animation")) {
    if (slideRight.classList.contains("slide-right-action")) {
      setTimeout(function () {
        menuRight.classList.remove("menu-content-animation");
      }, 300);
      setTimeout(function () {
        slideRight.classList.remove("slide-right-action");
        slideRight.classList.remove("slide-opacity-action");
      }, 200);
    } else {
      setTimeout(function () {
        menuRight.classList.remove("menu-content-animation");
      }, 100);
      slideRight.classList.remove("slide-opacity-action");
    }
  }
};

listt = $(".menu-right-content ul").children;
for (i = 0; i < listt.length; i++) {
  listt[i].onclick = function () {
    var slideRight = $(".slide-right");
    if (!slideRight.classList.contains("slide-right-action")) {
      slideRight.classList.add("slide-right-action");
    } else {
      slideRight.classList.remove("slide-right-action");
      setTimeout(function () {
        slideRight.classList.toggle("slide-right-action");
      }, 200);
    }
  };
}

for (var x = 0; x < education.Course.length; x++) {
  $(".slides .slide-left .left-slide-content").innerHTML += `<ul type="none" class="course-module"><li>${education.Course[x]}</li><li>${education.Institute[x]}</li><li>${education.Location[x]}</li><li>${education.Duration[x]}</li></ul>`;
};
list = $(".menu-left-content ul").children;
for (i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    x = true;
    var slideLeft = $(".slide-left");
    if (!slideLeft.classList.contains("slide-left-action")) {
      slideLeft.classList.add("slide-left-action");
    }
    else {
      slideLeft.classList.remove("slide-left-action");
      $(".slides .slide-left .left-slide-content").style.display = "none";
      setTimeout(function () {
        slideLeft.classList.toggle("slide-left-action");
        $(".slides .slide-left .left-slide-content").style.display = "";
      }, 300);
    }
  };
}
