.addEventListener("DOMContentLoaded", function () {
    let allButtons = document.getElementsByClassName("choice")
    for (let button of allButtons) {
        button.addEventListener("click", function () {
            let userAnswer = this.getAttribute("data-type");
            playGame(userAnswer);
        })
    }
})



function displayUserRock() {
    document.getElementById("choice") .src="assets/images/rock.jpeg";
}

function displayUserPaper() {
    document.getElementById("choice") .src="assets/images/paper.jpeg";
}

function displayUserScissors() {
    document.getElementById("choice") .src="assets/images/scissors.jpeg";
}

function displayUserLizard() {
    document.getElementById("choice") .src="assets/images/lizard.jpeg";
}

function displayUserSpock() {
    document.getElementById("choice") .src="assets/images/spock.jpeg";
}


let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let randomComputerAnswer = options[Math.floor(Math.random)];

if (randomComputerAnswer === "Rock" && userAnswer === "Paper") {

}

