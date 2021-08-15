const startButton = document.getElementById('start-Quiz');
//const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-btns');
const rules = document.getElementById('rules'); 

let shuffledQuestions, currentQuestionIndex;
var score= 0; 

startButton.addEventListener('click', startGame);


function startGame() {
  startButton.classList.add('hide');
  rules.classList.add('hide'); 
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionElement.classList.remove('hide');
  answerButtonsElement.classList.remove('hide');
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  console.log(question); 
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text;
      button.classList.add('btn');
      button.setAttribute("data-value", answer.correct); 
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
  })
}; 

function resetState() {
 clearStatusClass(document.body)
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
};

 function selectAnswer(e) {
const selectedButton = e.target.getAttribute("data-value"); 
 
if (selectedButton === "true") {
   score++; 
   console.log (score);
 }else {
   console.log ("wrong answer"); 
 }



  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    currentQuestionIndex++
    setNextQuestion()
  } else {
    questionElement.innerHTML =  "you are score is " + score + " out of " +  questions.length;  
 answerButtonsElement.classList.add("hide"); 
  }
 }

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
};

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question:  "Why so JavaScript and Java have similar name",
    answers: [
      { text: 'JavaScript is a stripped-down version of Java', correct: false },
      { text: 'JavaScript s syntax is loosely based on Java s', correct: true}, 
      { text: 'They both originated on the island of Java', correct: false }, 
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: '__________ JavaScript is also called server-side JavaScript.',
    answers: [
      { text: 'Microsoft', correct: false },
      { text: 'Navigator', correct: false },
      { text: 'LiveWire', correct: true },
      { text: 'Native', correct: false }
    ]
  },
  {
    question: 'What are variables used for in JavaScript Programs',
    answers: [
      { text: 'Storing numbers, dates, or other values', correct: true },
      { text: 'Varying randomly', correct: false },
      { text: 'Causing high-school algebra flashbacks', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'Choose the server-side JavaScript object?',
    answers: [
        { text: 'fileupload', correct:true },
        { text: 'Function', correct: false },
        { text: 'File', correct: false },
        { text: 'Date', correct: false }
      ]
  }, 
  {
    question: 'Choose the server-side JavaScript object?',
    answers: [
        { text: 'FileUpLoad', correct: false },
        { text: 'Function', correct: false },
        { text: 'File', correct: true },
        { text: 'Date', correct: false }
      ]
  },
  {
    question: 'Choose the client-side JavaScript object?', 
    answers: [
        { text: 'Database', correct: false },
        { text: 'Cursor', correct: false },
        { text: 'Client', correct: false },
        { text: 'FileUpLoad', correct: true }
      ]
  }
]



    

    
    



