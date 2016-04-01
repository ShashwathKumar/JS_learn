var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
do {
    compare(userChoice, computerChoice);
    var nextChoice = prompt("Wud u like to play more..?!");
} while (nextChoice === 'y' || nextChoice === 'Y');

function compare(choice1, choice2){
    if(choice1===choice2 && choice1 === "rock" && choice1 === "paper" && choice1 === "scissors") return "The result is a tie!";
    else if (choice1 === "rock") {
        if(choice2 === "scissors") return "rock wins";
        else return "paper wins";
    }
    else if (choice1 === "paper") {
        if(choice2 === "scissors") return "scissors wins";
        else return "paper wins";
    }
    else if (choice1 === "scissors") {
        if(choice2 === "rock") return "rock wins";
        else return "scissors wins";
    }
    else return "wrong choice";
}
