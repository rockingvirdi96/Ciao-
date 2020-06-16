var prjCount = 0;

$ = e => {
  return document.querySelector(e);
};

$$ = e => {
  return document.querySelectorAll(e);
}

const userInfo = {
  name: "RUPINDER PAL SINGH",
  profession: "FULL STACK WEB DEVELOPER",
  address: "rupindervirdi96@gmail.com",
  phone: "+1(438)998-1746",
  about: "Hello from a striving full stack developer with keen interest in programming and designing. Currently i am looking for an internship which could also(^_^ hopefully) evolve into a full time Job. Up until now i have been making projects for myself and my education as listed below and on Github."
};


const education = {
  Course: ["BACHELORS IN COMPUTER SCIENCE", "INFORMATION TECHNOLOGY PROGRAMMER ANALYST"],
  Institute: ["Guru Nanak Dev University", "LaSalle College"],
  Location: ["Amritsar,India", "Montreal, Quebec"],
  Duration: ["2014 - 2017", "2019 - 2020 (CURRENT)"]
};

const experience = {
  status: ["Dispatcher"],
  Company: ["KS Transport"],
  Location: ["Jalandhar,India"],
  Duration: ["-- 2014 - 2017 --"],
  Description: []
}

const skills = {
  CODING: [
    { name: 'REACT.js', percentage: '75' },
    { name: 'VUE.js', percentage: '68' },
    { name: 'VANILLA.js', percentage: '85' },
    { name: 'ANDROID', percentage: '65' },
    { name: 'JAVA', percentage: '80' },
    { name: 'C++', percentage: '75' },
    { name: 'PYTHON', percentage: '60' },
  ],
  DESIGN: [
    { name: 'HTML', percentage: '95' },
    { name: 'CSS', percentage: '90' },
    { name: 'SASS', percentage: '75' },
    { name: 'BOOTSTRAP', percentage: '65' },
    { name: 'ADOBE PHOTOSHOP', percentage: '75' },
    { name: 'FIGMA', percentage: '72' },

  ],
  BACKEND: [
    { name: 'FIREBASE', percentage: '70' },
    { name: 'MONGO DB', percentage: '80' },
    { name: 'EXPRESS.js', percentage: '75' },
    { name: 'NODE.js', percentage: '85' },
    { name: 'SQL', percentage: '82' },
  ],
  OTHERTECHS: [
    { name: 'GITHUB', percentage: '85' },
    { name: 'GIT', percentage: '82' },
    { name: 'MS EXCEL', percentage: '85' },
    { name: 'MS POWERPOINT', percentage: '92' },
    { name: 'MS WORD', percentage: '95' },



  ]

}


const projects = [{
  name: "FACEBOOK-CLONE",
  img: "./assets/facebook-clone.png",
  desc: "Facebook-clone is a website similar to facebook providing some important features as facebook. This app is built by me as my final project for college. This app has similar design to facebook and some of the features are same too.",
  link: "https://github.com/rupindervirdi96/facebook-clone"
},
{
  name: "WHATSAPP-REACT",
  img: "./assets/whatsapp.png",
  desc: "WhatsApp-replica was built to learn and progress in learning the most popular js framework REACT and also integrate an application with most popular cloud database FIREBASE. This app shows the designed replica of the original WhatsApp.",
  link: "https://whatsapp-replica-2b8a7.firebaseapp.com/"
},
{
  name: "MUSEUM",
  img: "./assets/museum.png",
  desc: "Museum is a music player made with android studio as a course project. Used Figma for design and java for coding. This app is being developed as a part of my course Android Development.",
  link: "https://github.com/rupindervirdi96/museum"

},

{
  name: "TRIVIA",
  img: "./assets/trivia.png",
  desc: "TRIVIA was developed by me as my final project for the course of Advanced Object Oriented Programming. This project helped me to learn the concept of classes and objects very well.",
  link: "https://rupindervirdi96.github.io/TRIVIA-GAME/FinalProject"

},
{
  name: "E-COMMERCE",
  img: "./assets/e-commerce.png",
  desc: "This website was developed by me as my final project for the course of Web Development.",
  link: "https://rupindervirdi96.github.io/My-Website/login.html"

},

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

//Toggle Projects
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
var y = 0;

//Add Skills
const createSkill = (skill) => {

  const Skill = `<div class="skill">
  <div class="level">
    <div class="name">`+ skill.name + `</div>
    <div class="percentage">
      <div class="bar" style="width:`+ skill.percentage + `%; position:relative">
      <div class="buttonBar"></div>
      </div>
    </div>
  </div>
</div>`;
  return Skill;
}
// skills.forEach(x => {
skills.DESIGN.forEach((skill) => {
  $('.skills .design').innerHTML += createSkill(skill)
})
skills.CODING.forEach((skill) => {
  $('.skills .coding').innerHTML += createSkill(skill)
})
skills.BACKEND.forEach((skill) => {
  $('.skills .backend').innerHTML += createSkill(skill)
})
skills.OTHERTECHS.forEach((skill) => {
  $('.skills .personal').innerHTML += createSkill(skill)
})


//Initialize Education
$('#duration').innerText = education.Duration[1];
$('#course').innerText = education.Course[1];
$('#institute').innerText = education.Institute[1];
$('#location').innerText = education.Location[1];


$('.rightArr').onclick = () => {
  if ($('#duration').innerText == education.Duration[0]) {
    $('.edu').classList.add('edu-animate');
    setTimeout(() => {
      $('.edu').classList.remove('edu-animate');
      $('#duration').innerText = education.Duration[1];
      $('#course').innerText = education.Course[1];
      $('#institute').innerText = education.Institute[1];
      $('#location').innerText = education.Location[1];
    }, 500);

  }
  else {
    $('.edu').classList.add('edu-animate');
    setTimeout(() => {
      $('.edu').classList.remove('edu-animate');
      $('#duration').innerText = education.Duration[0];
      $('#course').innerText = education.Course[0];
      $('#institute').innerText = education.Institute[0];
      $('#location').innerText = education.Location[0];
    }, 500);
  }
}

$('.leftArr').onclick = () => {
  if ($('#duration').innerText == education.Duration[0]) {
    $('.edu').classList.add('edu-animate');
    setTimeout(() => {
      $('.edu').classList.remove('edu-animate');
      $('#duration').innerText = education.Duration[1];
      $('#course').innerText = education.Course[1];
      $('#institute').innerText = education.Institute[1];
      $('#location').innerText = education.Location[1];
    }, 500);

  }
  else {
    $('.edu').classList.add('edu-animate');
    setTimeout(() => {
      $('.edu').classList.remove('edu-animate');
      $('#duration').innerText = education.Duration[0];
      $('#course').innerText = education.Course[0];
      $('#institute').innerText = education.Institute[0];
      $('#location').innerText = education.Location[0];
    }, 500);
  }
}

$('.contact h4').innerHTML = `${userInfo.address} | ${userInfo.phone}`