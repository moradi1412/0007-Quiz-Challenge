//DOM Element 
var startBtn = document.getElementById("start-Quiz"); 
var nextbutton = document.getElementById ("next-btn");
var questionContainer = document.getElementById("questions-container"); 
var questionsEl = document.getElementById("questions");
var rules = document.getElementById("rules");
var answerBtn = document.getElementById ("answer-btns"); 

 


var questions = [
    {question: "Why so JavaScript and Java have similar name?",
     answer: ['baby','boy','men', 'ggg']},  
    {question:"_____ JavaScript is also called client-side JavaScript.", 
     answer: ['girl','women','bithc', 'ggg']}];  

console.log (questions); 
function showQuestions () {
 startBtn.classList.add('hide');
 rules.classList.add('hide'); 
 answerBtn.classList.remove('hide');




 }; 



 console.log("game started");
    

    
    



startBtn.addEventListener("click", showQuestions); 