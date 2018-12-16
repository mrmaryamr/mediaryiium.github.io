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
