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
  Course: ["BACHELORS IN COMPUTER SCIENCE", "INFORMATION TECHNOLOGY PROGRAMMER ANALYST"],
  Institute: ["Guru Nanak Dev University", "LaSalle College"],
  Location: ["Amritsar,India", "Montreal, Quebec"],
  Duration: ["2014 - 2017", "2019 - 2020 (CURRENT)"]
};

const experience = {
  status: ["Dispatcher", "Cook"],
  Company: ["KS Transport", "Carlos Poulet"],
  Location: ["Jalandhar,India", "Montreal,Quebec"],
  Duration: ["-- 2014 - 2017 --", "01/2019 - 04/2020"],
  Description: []
}

const skills = [
  { name: 'HTML', percentage: '100' },
  { name: 'CSS', percentage: '90' },
  { name: 'JavaScript', percentage: '80' },
  { name: 'Java', percentage: '70' },
  { name: 'React.js', percentage: '65' }];


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
skills.forEach(x => {
  const skill = `<div class="skill">
              <div class="level">
                <div class="name">`+ x.name + `</div>
                <div class="percentage">
                  <div class="bar" style="width:`+ x.percentage + `%;transition: all 3000ms linear;"></div>
                </div>
              </div>
            </div>`;
  // if (y % 2 == 0) {
  $('.skills .left').innerHTML += skill;
  // }
  // else {
  //   $('.skills .right').innerHTML += skill;
  // }
  // y += 1;
});

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