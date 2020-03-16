var prjCount = 0;

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

const projects = [
  {
    name: "WHATSAPP-REPLICA",
    img: "./assets/cooking.jpg",
    desc: "TRIVIA was developed by me as my final project for the course of Advanced Object Oriented Programming. This project helped me to learn the concept of classes and objects very well.",
    link: "https://whatsapp-replica-2b8a7.firebaseapp.com/"
  },
  {
    name: "MUSEUM",
    img: "./assets/education.png",
    desc: "Museum is a music player made with android studio as a course project. Used Figma for design and java for coding. This app is being developed as a part of my course Android Development.",
    link: "https://whatsapp-replica-2b8a7.firebaseapp.com/"

  },
  {
    name: "E-COMMERCE",
    img: "./assets/travelling.jpg",
    desc: "This website was developed by me as my final project for the course of Web Development. This was my first full project made in JS.",
    link: "https://whatsapp-replica-2b8a7.firebaseapp.com/"

  },
  {
    name: "E-COMMERCE",
    img: "./assets/trivia.jpg",
    desc: "This website was developed by me as my final project for the course of Web Development. This was my first full project made in JS.",
    link: "https://whatsapp-replica-2b8a7.firebaseapp.com/"

  }
];

$('.prjName').innerText = projects[0].name;
$('.prjPic').style = "background-image: url(" + projects[0].img + ")";
$('.prjDesc span').innerText = projects[0].desc;

$('.name').innerText = userInfo.name;
$('.profession').innerText = userInfo.profession;



$('.changeProject').onclick = () => {
  prjCount = prjCount + 1;
  if (prjCount == projects.length - 1) {
    prjCount = 0;
  }
  // setTimeout(()=>{

  // })
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
