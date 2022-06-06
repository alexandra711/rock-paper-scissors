
let allButtons = document.getElementsByClassName("choice")
    for (let button of allButtons) {
        button.addEventListener("click"), function () {
            let userAnswer = this.getAttribute("choice");
            playGame(userAnswer);
        }
    }

function displayUserRock() {
    document.getElementsByClassName("choice") .src="assets/images/rock.jpeg";
}

function displayUserPaper() {
    document.getElementsByClassName("choice") .src="assets/images/paper.jpeg";
}

function displayUserScissors() {
    document.getElementsByClassName("choice") .src="assets/images/scissors.jpeg";
}

function displayUserLizard() {
    document.getElementsByClassName("choice") .src="assets/images/lizard.jpeg";
}

function displayUserSpock() {
    document.getElementsByClassName("choice") .src="assets/images/spock.jpeg";
}

function displayComputerRock() {
    document.getElementsByClassName("computer-choice") .src="assets/images/rock.jpeg";
}

function displayComputerPaper() {
    document.getElementsByClassName("computer-choice") .src="assets/images/paper.jpeg";
}

function displayComputerScissors() {
    document.getElementsByClassName("computer-choice") .src="assets/images/scissors.jpeg";
}

function displayComputerLizard() {
    document.getElementsByClassName("computer-choice") .src="assets/images/lizard.jpeg";
}

function displayComputerSpock() {
    document.getElementsByClassName("computer-choice") .src="assets/images/spock.jpeg";
}

let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let randomComputerAnswer = options[Math.floor(Math.random() * options.length)];
    

if (randomComputerAnswer === "Rock" && userAnswer === "Paper") {
    displayComputerRock(randomComputerAnswer);
    increaseRoundNumber();
    increasePlayerScore(); 
}

 else if (randomComputerAnswer === "Paper" && userAnswer === "Scissors") {
    displayComputerPaper(randomComputerAnswer);
    increaseRoundNumber(); 
    increasePlayerScore();
 }

 





