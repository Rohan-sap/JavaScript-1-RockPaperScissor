let computerScore = 0;
let userScore = 0;
const smallUserWord = "user".fontsize(3).sup();
const smallCompWord = "comp".fontsize(3).sup();
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); //Math.random give output 
    //from 0-9 and we are multi * 3 to get from 1 -3
    return choices[randomNumber];
}
function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    // result_p.innerHTML = convert(user) + " beats " + convert(comp) + ". You win!";
    result_p.innerHTML = `${convert(user)}${(smallUserWord)} beats  ${convert(comp)}${(smallCompWord)}. You win!`; //ES6
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('green-glow');
    }, 500);
}

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "s") return "Scissors";
    if (letter === "p") return "Paper";
}

function lose(user, comp) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    // result_p.innerHTML = convert(user) + " beats " + convert(comp) + ". You win!";
    result_p.innerHTML = `${convert(user)}${(smallUserWord)} looses to  ${convert(comp)}${(smallCompWord)}. You Lost!`; //ES6
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('red-glow');
    }, 500);    
}

function draw(user, comp) {

    result_p.innerHTML = `${convert(user)}${(smallUserWord)} equals  ${convert(comp)}${(smallCompWord)}. It's a draw!`; //ES6
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function () {
        document.getElementById(user).classList.remove('grey-glow');
    }, 500);
}


function game(userInput) {
    const computerChoice = getComputerChoice();
    switch (userInput + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userInput, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userInput, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userInput, computerChoice);
            break;
    }

}

function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    });

    paper_div.addEventListener('click', function () {
        game('p');
    });

    scissors_div.addEventListener('click', function () {
        game('s');
    });
}

main();