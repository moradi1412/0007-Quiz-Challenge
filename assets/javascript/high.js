ulEl = document.getElementById("list");

var load_save = () => {
    var saved = JSON.parse(localStorage.getItem("player_result")) || [];
    if(saved)
    {
        display_scores(saved);
    }
}

var display_scores = array => {
    for(let i = 0; i<array.length; i++)
    {
        itemEl = document.createElement("li");
        itemEl.textContent = "Player: " + array[i].playerName + " - " + "Score: " + array[i].score;
        ulEl.appendChild(itemEl);
    }
}; 

load_save();

