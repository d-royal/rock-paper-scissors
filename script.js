const options = ["rock", "paper", "scissors"];

function computerPlay(){
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "draw";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "win";
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "win";
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "win";
    } else {
        return "lose";
    }
    
}

function playGame(){
    let pScore = 0;
    let cScore = 0;
    for(i = 0; i < 5; i++){
        pChoice = verify(prompt("Rock, paper, or scissors?").toLowerCase());
        cChoice = computerPlay();
        if(playRound(pChoice, cChoice) === "win"){
            pScore++;
            console.log("You win! " + pChoice + " beats " + cChoice + " !");
        }
        else if(playRound(pChoice, cChoice) === "lose"){
            cScore++;
            console.log("You lose! " + cChoice + " beats " + pChoice + " !");
        }
        else if(playRound(pChoice, cChoice) === "draw") {
            console.log("Tie game!");
        }
    }
    if(pScore > cScore){
        console.log("You win! Final score: " + pScore + " - " + cScore);
    }
    else if(pScore < cScore){
        console.log("You lose! Final score: " + pScore + " - " + cScore);
    } else {
        console.log("We have a draw!");
    }
}

function verify(answer){
    while(!(options.includes(answer))){
        console.log("Invalid choice");
        answer = prompt("Please select rock, paper, or scissors").toLowerCase();
    }
    return answer;
}