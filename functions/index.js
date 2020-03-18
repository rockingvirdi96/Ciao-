var prjCount = 0;

$ = e => {
  return document.querySelector(e);
};

$$ = e => {
  return document.querySelectorAll(e);
}
// alert("Welcome, but its still under progress. Thanks for the visit.");

const userInfo = {
  name: "RUPINDER PAL SINGH",
  profession: "FULL STACK DEVELOPER",
  address: "rupindervirdi96@gmail.com",
  phone: "+1(438)998-1746",
  about: "Hello from a striving full stack developer with keen interest in programming and designing. Currently i am looking for an internship which could also(^_^ hopefully) evolve into a full time Job. Up until now i have been making projects for myself and my education as listed below and on Github."
};

const education = {
  Course: ["Bachelors in Computer Science", "Information Technology Programmer Analyst"],
  Institute: ["D.A.V College", "LaSalle College"],
  Location: ["Jalandhar,India", "Montreal, Quebec"],
  Duration: ["04/2014-04/2017", "01/2019 - 04/2020"]
};

const experience = {
  status: ["Dispatcher", "Cook"],
  Company: ["KS Transport"],
  Location: ["Jalandhar,India", "Montreal,Quebec"],
  Duration: ["04/2014-04/2017", "01/2019 - 04/2020"],
  Description: []
}

const projects = [
  {
    name: "WHATSAPP-REACT",
    img: "./assets/whatsapp.png",
    desc: "TRIVIA was developed by me as my final project for the course of Advanced Object Oriented Programming. This project helped me to learn the concept of classes and objects very well.",
    link: "https://whatsapp-replica-2b8a7.firebaseapp.com/"
  },
  {
    name: "MUSEUM",
    img: "./assets/museum.png",
    desc: "Museum is a music player made with android studio as a course project. Used Figma for design and java for coding. This app is being developed as a part of my course Android Development.",
    link: "https://github.com/rupindervirdi96/museum"

  },
  {
    name: "E-COMMERCE",
    img: "./assets/e-commerce.png",
    desc: "This website was developed by me as my final project for the course of Web Development. This was my first full project made in JS.",
    link: "https://rupindervirdi96.github.io/My-Website/login.html"

  }
];

//Initialize Projects
$('.prjName').innerText = projects[0].name;
$('.prjPic').style = "background-image: url(" + projects[0].img + ")";
$('.prjDesc span').innerText = projects[0].desc;
$('.projectLink').href = projects[0].link

//Initialize User
$('.name').innerText = userInfo.name;
$('.profession').innerText = userInfo.profession;
$('.about .info').innerText = userInfo.about;


$('.changeProject').onclick = () => {
  prjCount = prjCount + 1;
  if (prjCount == projects.length) {
    prjCount = 0;
  }
  $('.prj-container').classList.add('gayab');
  setTimeout(() => {
    $('.prjName').innerText = projects[prjCount].name;
    $('.prjPic').style = "background-image: url(" + projects[prjCount].img + ")";
    $('.prjDesc span').innerText = projects[prjCount].desc;
    $('.projectLink').href = projects[prjCount].link
    $('.prj-container').classList.remove('gayab');
  }, 500)
}

































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
