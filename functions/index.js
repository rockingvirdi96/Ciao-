$ = e => {
  return document.querySelector(e);
};

$$ = e => {
  return document.querySelectorAll(e);
}

const userInfo = {
  name: "RUPINDER PAL SINGH",
  profession: "FULL STACK DEVELOPER",
  address: "rupindervirdi96@gmail.com",
  phone: "+1(438)998-1746"
};

const education = {
  Course: ["Bachelors in Computer Science", "Information Technology Programmer Analyst"],
  Institute: ["D.A.V College", "LaSalle College"],
  Location: ["Jalandhar,India", "Montreal,Quebec"],
  Duration: ["04/2014-04/2017", "01/2019 - 04/2020"]
};

const experience = {
  status: [],
  Company: [],
  Location: ["Jalandhar,India", "Montreal,Quebec"],
  Duration: ["04/2014-04/2017", "01/2019 - 04/2020"],
  Description: []
}

const projects = {
  TRIVIA: {
    img: "",
    desc: "TRIVIA was developed by me as my final project for the course of Advanced Object Oriented Programming. This project helped me to learn the concept of classes and objects very well."
  }
}


$('.name').innerText = userInfo.name;
$('.profession').innerText = userInfo.profession;


var height = $('.projects').offsetWidth;

$('.projects .rotator').style.width = height + "px";
$('.projects .rotator').style.height = height + "px";

// $('.education').onclick = () => {
//   $('.rotator').style.transform = "rotate (" + rotate + ")deg";
//   rotate += 90;
// }




































//setHeight
// var height1 = $('.intro').offsetHeight;
// var height2 = $('.about').offsetHeight;
// console.log(height1);
// console.log(height2);
// var height = height1 + height2;

// $('.info').style.height = "calc(100vh - " + height + "px)";
// $('.info .innerSection').style.height = "calc(100vh - " + height + "px)";
// var link = "./functions/heightSettings.js"

// window.addEventListener('resize', () => {
//   $('.scriptHeight').src = "";
//   $('.scriptHeight').src = link;
// });
