// <![CDATA[  MOUSE CURSOR
var colour="pink";
var sparkles=100;

var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();
window.onload=function() {
  if (document.getElementById) {
    var i, rats, rlef, rdow;
    for (var i=0; i<sparkles; i++) {
      var rats=createDiv(3, 3);
      rats.style.visibility="hidden";
      document.body.appendChild(tiny[i]=rats);
      starv[i]=0;
      tinyv[i]=0;
      var rats=createDiv(5, 5);
      rats.style.backgroundColor="transparent";
      rats.style.visibility="hidden";
      var rlef=createDiv(1, 5);
      var rdow=createDiv(5, 1);
      rats.appendChild(rlef);
      rats.appendChild(rdow);
      rlef.style.top="3px";
      rlef.style.left="0px";
      rdow.style.top="0px";
      rdow.style.left="3px";
      document.body.appendChild(star[i]=rats);
    }
    set_width();
    sparkle();
  }}

function sparkle() {
  var c;
  if (x!=ox || y!=oy) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      starx[i]+=(i%5-2)/5;
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tinyx[i]+=(i%5-2)/5;
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}
document.onmousemove=mouse;
function mouse(e) {
  set_scroll();
  y=(e)?e.pageY:event.y+sdown;
  x=(e)?e.pageX:event.x+sleft;
}
function set_scroll() {
  if (typeof(self.pageYOffset)=="number") {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
}
  else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}
window.onresize=set_width;

function set_width() {
  if (typeof(self.innerWidth)=="number") {
    swide=self.innerWidth;
    shigh=self.innerHeight;
  }
  else if (document.documentElement && document.documentElement.clientWidth) {
    swide=document.documentElement.clientWidth;
    shigh=document.documentElement.clientHeight;
  }
  else if (document.body.clientWidth) {
    swide=document.body.clientWidth;
    shigh=document.body.clientHeight;
  }
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  div.style.backgroundColor=colour;
  return (div);
}
// ]]>

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

//Script in tab accordian
function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-pale-red";
    } else {
        x.className = x.className.replace(" w3-show", "");
        x.previousElementSibling.className =
        x.previousElementSibling.className.replace(" w3-pale-red", "");
    }
}

//script in must avoid
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Tabbed Menu
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" w3-teal", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-teal";
}

// Quiz

var questions = [{
  "question" : "Lupus is an unpredictable autoimmune disease that can affect the: ",
  "option1" : "Heart & Lungs",
  "option2" : "Skin",
  "option3" : "Kidney",
  "option4" : "All of these",
  "answer" : "4"
}, {
  "question" : "On average, how many years does it take to be diagnosed after a person start experiencing the symptoms of lupus?",
  "option1" : "9 years",
  "option2" : "6 years",
  "option3" : "1 year",
  "option4" : "5 year",
  "answer" : "2"
}
, {
  "question" : "Scientists believe lupus is triggered by: ",
  "option1" : "A tick bite",
  "option2" : "Unprotected sex",
  "option3" : "A high-carb diet",
  "option4" : "None of these",
  "answer" : "4"
}, {
  "question" : "Among those who are misdiagnosed, what is the average number of providers a person with lupus sees before receiving a correct diagnosis?",
  "option1" : "9",
  "option2" : "6",
  "option3" : "4",
  "option4" : "1",
  "answer" : "3"
}, {
  "question" : "Lupus is sometimes called: ",
  "option1" : "The Silent Killer",
  "option2" : "The Butterfly Syndrome",
  "option3" : "Daylight Disease",
  "option4" : "The Great Imitator",
  "answer" : "4"
}, {
  "question" : "As many as two-thirds of people with lupus experience a sensitivity to ",
  "option1" : "Wheat",
  "option2" : "UV Light",
  "option3" : "Gluten",
  "option4" : "Milk",
  "answer" : "2"
}, {
  "question" : "Women make up what percentage of the total population with lupus?",
  "option1" : "10%",
  "option2" : "30%",
  "option3" : "60%",
  "option4" : "90%",
  "answer" : "4"
}, {
  "question" : "Inflammation of the kidneys can be one of the more serious complications of lupus. What percentage of adults with lupus experience this? ",
  "option1" : "10%",
  "option2" : "35%",
  "option3" : "60%",
  "option4" : "75%",
  "answer" : "3"
} ]


var currentQuestion = 0;
var score = 0;
var totQuestion =  questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');

var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
  var q = questions [questionIndex];
  questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
};

function loadNextQuestion() {
  var selectedOption = document.querySelector('input[type=radio]:checked');
  if (!selectedOption) {
    alert('Please select your answer!');
  }
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
        score += 10;
  }
  selectedOption.checked = false;
  currentQuestion++;

  if (currentQuestion == totQuestion - 1) {
    nextButton.textContent = 'Finish';
  }
  if (currentQuestion == totQuestion) {
    container.style.display = 'none';
    resultCont.style.display = '';
    resultCont.textContent = 'Your score: ' + score;
    return;
  }
  loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);
