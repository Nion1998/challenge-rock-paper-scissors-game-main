const handOptions = {
  "rock": "./assets/Rock.png",
  "paper": "./assets/Paper.png",
  "scissors": "./assets/Scissors.png"
}

let SCORE = 0;




function playGame(playerChoice) {
 console.log(playerChoice)
  // Generate computer's choice
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[playerChoice];

  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log("nion ",computerChoice)
  // set computer image 
  document.getElementById("computerPickImage").src = handOptions[computerChoice]
  
  // Determine the winner

  if (playerChoice === computerChoice) {
    setDecision("It's a tie!") ;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||(playerChoice === "paper" && computerChoice === "rock") ||(playerChoice === "scissors" && computerChoice === "paper")
  ) {
    setScore(SCORE + 1);
    setDecision("YOU WIN!");
  } else {
    setDecision("YOU LOSE!");
  }
}

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}
const resetGame = () => {
  setScore(SCORE *0 );
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";

  

}


const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
}
