var prjCount = 0;

$ = (e) => {
  return document.querySelector(e);
};

$$ = (e) => {
  return document.querySelectorAll(e);
};

const userInfo = {
  name: "RUPINDER PAL SINGH",
  profession: "FULL STACK WEB DEVELOPER",
  address: "rupindervirdi96@gmail.com",
  phone: "+1(438)998-1746",
  about:
    "Hello from a striving full stack web developer with keen interest in designing and creating powerful user experience websites. Currently i am looking for a full time Job as a Full Stack Web Developer. Up until now i have been making projects for myself and my education as listed below and on Github.",
};

const education = {
  Course: [
    "BACHELORS IN COMPUTER SCIENCE",
    "ADVANCED DIPLOMA IT PROGRAMMER ANALYST",
  ],
  Institute: ["Guru Nanak Dev University", "LaSalle College"],
  Location: ["Amritsar,India", "Montreal, Quebec"],
  Duration: ["2017", "2020"],
};

const experience = {
  status: ["Dispatcher"],
  Company: ["KS Transport"],
  Location: ["Jalandhar,India"],
  Duration: ["-- 2014 - 2017 --"],
  Description: [],
};

const skills = {
  CODING: [
    { name: "REACT", percentage: "75" },
    { name: "VUE", percentage: "68" },
    { name: "ANDROID", percentage: "65" },
    { name: "JAVA", percentage: "80" },
    { name: "C++", percentage: "75" },
    { name: "PYTHON", percentage: "60" },
  ],
  DESIGN: [
    { name: "HTML", percentage: "95" },
    { name: "CSS", percentage: "90" },
    { name: "SASS", percentage: "85" },
    { name: "BOOTSTRAP", percentage: "65" },
    { name: "FIGMA", percentage: "80" },
    { name: "ADOBE PHOTOSHOP", percentage: "75" },
    { name: "ADOBE XD", percentage: "75" },
  ],
  BACKEND: [
    { name: "NODE", percentage: "85" },
    { name: "EXPRESS", percentage: "75" },
    { name: "SQL", percentage: "82" },
    { name: "FIREBASE", percentage: "70" },
    { name: "MONGO-DB", percentage: "80" },
  ],
  OTHERTECHS: [
    { name: "GITHUB", percentage: "85" },
    { name: "GIT", percentage: "82" },
    { name: "HEROKU", percentage: "80" },
    { name: "MS EXCEL", percentage: "85" },
    { name: "MS POWERPOINT", percentage: "92" },
    { name: "MS WORD", percentage: "95" },
  ],
};

const projects = [
  {
    name: "FACEBOOK-CLONE",
    img: "./assets/facebook-clone.png",
    desc:
      "Facebook-clone is a website similar to facebook providing some important features as facebook. This app is built by me as my final project for college. This app has similar design to facebook and some of the features are same too.",
    link: "https://facebook-clone-v.herokuapp.com/",
  },
  {
    name: "ISSUES TRACKER",
    img:
      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-32.png",
    desc:
      "Issues tracker is an application that could be a help to the society to improve the condition of roads. This application allows any user to report any potholes or bumps found on the street.",
    link: "https://issuestrackerr.herokuapp.com/",
  },
  {
    name: "MUSEUM",
    img: "./assets/museum.png",
    desc:
      "Museum is a music player made with android studio as a course project. Used Figma for design and java for coding. This app is being developed as a part of my course Android Development.",
    link: "https://github.com/rupindervirdi96/museum",
  },
  {
    name: "REACTOR",
    img:
      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-32.png",
    desc:
      "Reactor is an ultimate idea to sell or promote React components as products online by unlimited number of users throughout the world. Server side has been finished already. Design is currently under development.",
    link: "https://rupindervirdi96.github.io/TRIVIA-GAME/FinalProject",
  },
  {
    name: "HANGMAN",
    img:
      "https://s3.amazonaws.com/iconbros/icons/icon_pngs/000/001/955/original/hangman.png?1560586372",
    desc:
      "The classic game made with react providing a great design and additional features on the way. Like anyone can add additional categories and register their score to the wall of fame.",
    link: "https://rupindervirdi96.github.io/TRIVIA-GAME/FinalProject",
  },
  {
    name: "LOOPER",
    img:
      "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-32.png",
    desc:
      "Looper is a social media application that I made during last winter break using MERN stack",
    link: "https://rupindervirdi96.github.io/TRIVIA-GAME/FinalProject",
  },
  {
    name: "TRIVIA",
    img:
      "https://lh3.googleusercontent.com/proxy/VwS8VWhc6oAkcpHrbOSR288q7JctsxTOCXKtvZUHj7tQk2DUy4AjIWVCp_k_vI3fDe5NGJhETm6XrSGamSNEV3JQ",
    desc:
      "TRIVIA was developed by me as my final project for the course of Advanced Object Oriented Programming. This project helped me to learn the concept of classes and objects very well.",
    link: "https://rupindervirdi96.github.io/TRIVIA-GAME/FinalProject",
  },
  {
    name: "CALCULATOR REACT",
    img: "./assets/calc.png",
    desc:
      "Calculator react is a very basic calculator. One of my first apps i made with ",
    link: "https://rupindervirdi96.github.io/CalculatorReact/",
  },
];

//Initialize Projects
// $(".prjName").innerText = projects[0].name;
// $(".prjPic").style = "background-image: url(" + projects[0].img + ")";
// $(".prjDesc span").innerText = projects[0].desc;
// $(".projectLink").href = projects[0].link;

//Initialize User
$(".name").innerText = userInfo.name;
// $('.profession').innerText = userInfo.profession;
$(".about .info").innerText = userInfo.about;

//Toggle Projects
// $(".changeProject").onclick = () => {
//   prjCount = prjCount + 1;
//   if (prjCount == projects.length) {
//     prjCount = 0;
//   }
//   $(".prj-container").classList.add("gayab");
//   setTimeout(() => {
//     $(".prjName").innerText = projects[prjCount].name;
//     $(".prjPic").style =
//       "background-image: url(" + projects[prjCount].img + ")";
//     $(".prjDesc span").innerText = projects[prjCount].desc;
//     $(".projectLink").href = projects[prjCount].link;
//     $(".prj-container").classList.remove("gayab");
//   }, 500);
// };
var y = 0;

//Add Skills
const createSkill = (skill) => {
  const Skill =
    `<div class="skill">
  <div class="level">
    <div class="name">` +
    skill.name +
    `</div>
    <div class="percentage">
      <div class="bar" style="width:` +
    skill.percentage +
    `%; position:relative">
      <div class="buttonBar" title=${skill.percentage}%></div>
      </div>
    </div>
  </div>
</div>`;
  return Skill;
};
// skills.forEach(x => {
skills.DESIGN.forEach((skill) => {
  $(".skills .design").innerHTML += createSkill(skill);
});
skills.CODING.forEach((skill) => {
  $(".skills .coding").innerHTML += createSkill(skill);
});
skills.BACKEND.forEach((skill) => {
  $(".skills .backend").innerHTML += createSkill(skill);
});
skills.OTHERTECHS.forEach((skill) => {
  $(".skills .personal").innerHTML += createSkill(skill);
});

//Initialize Education
$("#duration").innerText = education.Duration[1];
$("#course").innerText = education.Course[1];
$("#institute").innerText = education.Institute[1];
$("#location").innerText = education.Location[1];

$(".rightArr").onclick = () => {
  if ($("#duration").innerText == education.Duration[0]) {
    $(".edu").classList.add("edu-animate");
    setTimeout(() => {
      $(".edu").classList.remove("edu-animate");
      $("#duration").innerText = education.Duration[1];
      $("#course").innerText = education.Course[1];
      $("#institute").innerText = education.Institute[1];
      $("#location").innerText = education.Location[1];
    }, 500);
  } else {
    $(".edu").classList.add("edu-animate");
    setTimeout(() => {
      $(".edu").classList.remove("edu-animate");
      $("#duration").innerText = education.Duration[0];
      $("#course").innerText = education.Course[0];
      $("#institute").innerText = education.Institute[0];
      $("#location").innerText = education.Location[0];
    }, 500);
  }
};

$(".leftArr").onclick = () => {
  if ($("#duration").innerText == education.Duration[0]) {
    $(".edu").classList.add("edu-animate");
    setTimeout(() => {
      $(".edu").classList.remove("edu-animate");
      $("#duration").innerText = education.Duration[1];
      $("#course").innerText = education.Course[1];
      $("#institute").innerText = education.Institute[1];
      $("#location").innerText = education.Location[1];
    }, 500);
  } else {
    $(".edu").classList.add("edu-animate");
    setTimeout(() => {
      $(".edu").classList.remove("edu-animate");
      $("#duration").innerText = education.Duration[0];
      $("#course").innerText = education.Course[0];
      $("#institute").innerText = education.Institute[0];
      $("#location").innerText = education.Location[0];
    }, 500);
  }
};

$(".contact h4").innerHTML = `${userInfo.address} | ${userInfo.phone}`;

// Profession animation.

var professions = ["Front End Web Developer ", "Full Stack Web Developer"];

var x = 0;
var sentenceNumber = 0;
var CurrentSentence = professions[sentenceNumber];
var rewind = false;

var intervalWrite = setInterval(write, 100);
var intervalRemove = setInterval(() => {}, 100);

function write() {
  if (x < CurrentSentence.length && !rewind) {
    $(".professionName").innerText += CurrentSentence[x];
    x++;
  } else {
    clearInterval(intervalWrite);
    setTimeout(() => {
      intervalRemove = setInterval(remove, 100);
    }, 2000);
  }
}

function remove() {
  if (x > 0) {
    var newSentence = CurrentSentence.split("")
      .slice(0, x - 1)
      .join("");
    $(".professionName").innerText = newSentence;
    x--;
  } else {
    clearInterval(intervalRemove);
    if (sentenceNumber < professions.length - 1) {
      sentenceNumber++;
    } else {
      sentenceNumber = 0;
    }
    CurrentSentence = professions[sentenceNumber];
    intervalWrite = setInterval(write, 100);
  }
}
