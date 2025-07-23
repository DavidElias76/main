const footballTeam ={
  team:"Manchester United",
  year:  2025,
  headCoach: "Ruben Amorim",
  players: [
    {name: "Andre Onana", position: "goalkeeper", isCaptain: false},
    {name: "Bayindir", position: "goalkeeper", isCaptain: false},
    {name: "Lisandro Matinez", position: "defender", isCaptain: false},
    {name: "Diogo Dalot", position: "defender", isCaptain: false},
    {name: "Bruno fernandes", position: "midfielder", isCaptain: true},
    {name: "matheus Cuhna", position: "midfielder", isCaptain: false},
    {name: "Rasmus Hojlund", position: "forward" , isCaptain: false},
    {name: "Joshua Zikzee", position: "forward" , isCaptain: false}
  ]
}

const teamName = document.getElementById("team");
const footballyear = document.getElementById("year");
const headCoachName = document.getElementById("head-coach");


// display object names
teamName.textContent = footballTeam.team;
footballyear.textContent =  footballTeam.year;
headCoachName.textContent = footballTeam.headCoach;

// console.log(footballTeam.players[0].position);
const optionPlayer = document.getElementById("players");
const showDetails = document.getElementById("player-cards")


function getPlayerDetails(player){
  const playerposition =  player === "all" ?
  footballTeam.players
  : footballTeam.players.filter((item) => item.position === player);

   const html = playerposition.map((item) => {
    if(item.isCaptain){
        return`
        <div class="player-card">
        <h2>(captain) ${item.name}</h2>
        <p>Position: ${item.position}</p>
    </div>`
    }else{ 
      return`
      <div class="player-card">
        <h2>${item.name}</h2>
        <p>Position: ${item.position}</p>
      </div>`
    }
  }).join("");

  return showDetails.innerHTML = html;
}

// callback the function and add an event listener to display the elements 
optionPlayer.addEventListener("change", ()=>{
  showDetails.innerHTML = getPlayerDetails(optionPlayer.value); // when an otion is clicked it sholud get the function and display the details
});

showDetails.innerHTML = getPlayerDetails("all");