$ = e => {
  return document.querySelector(e);
};

const userInfo = {
  name: "RUPINDER PAL SINGH",
  profession: "WEB DEVELOPER",
  address: "rupindervirdi96@gmail.com",
  phone: "+1(438)998-1746",
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

const about = "Hey there welcome to the profiel of a striving Web Developer and designer. I do full stack development in Web Technologies";

$('.info .innerSection span').innerText = about;

//setHeight
var height1 = $('.intro').offsetHeight;
var height2 = $('.about').offsetHeight;
console.log(height1);
console.log(height2);
var height = height1 + height2;

$('.info').style.height = "calc(100vh - " + height + "px)";
$('.info .innerSection').style.height = "calc(100vh - " + height + "px)";
var link = "./functions/heightSettings.js"

window.addEventListener('resize', () => {
  $('.scriptHeight').src = "";
  $('.scriptHeight').src = link;
});




