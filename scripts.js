let round=1;
let humanVictories=0;
let comVictories=0;
let tie=0;
const counter={
   rock:"paper",
   paper:"scissors",
   scissors:"rock"
}

document.querySelector(".rock .btnImg.Hum").addEventListener("click",()=>playRound("rock"));
document.querySelector(".paper .btnImg.Hum").addEventListener("click",()=>playRound("paper"));
document.querySelector(".scissors .btnImg.Hum").addEventListener("click",()=>playRound("scissors"));

function playRound(userChoice){
   let comChoice=getComputerChoice();
   if(userChoice===comChoice){
      tie+=1;
      document.querySelector(".result").textContent=`Round ${round++} Result: Tie`;
   }else{
      if(counter[userChoice]===comChoice){
         comVictories++;
         document.querySelector(".result").textContent=`Round ${round++} Result: Computer Won \n ${comChoice} beats ${userChoice}`;
      }else{
         humanVictories++;
         document.querySelector(".result").textContent=`Round ${round++} Result: Human Won \n ${userChoice} beats ${comChoice}`;
      }
   }
   updatePage();
}

function getComputerChoice(){
   let choice=Math.random();
   if(choice<=0.33){
      return "rock";
   }else if(choice<=0.66){
      return "paper";
   }else{
      return "scissors";
   }
}

function updatePage(){
   document.querySelector(".computer .icon .score").textContent=`${comVictories}`;
   document.querySelector(".human .icon .score").textContent=`${humanVictories}`;
   document.querySelector(".round").textContent=`Round ${round}`;
}
