ulEl = document.getElementById("list");

var player_name = localStorage.getItem("playerName");
var finalscore = localStorage.getItem('finalscore');

itemEl = document.createElement("li");
itemEl.textContent = "Player: " + player_name + " - " + "Score: " + finalscore ; 
ulEl.appendChild(itemEl);
