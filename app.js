// store the variables

const homeScoreDisplay = document.querySelector(".home-score-display");
const guestScoreDisplay = document.querySelector(".guest-score-display");
const homeBtn1 = document.querySelector(".home-plus-one");
const homeBtn2 = document.querySelector(".home-plus-two");
const homeBtn3 = document.querySelector(".home-plus-three");
const guestBtn1 = document.querySelector(".guest-plus-one");
const guestBtn2 = document.querySelector(".guest-plus-two");
const guestBtn3 = document.querySelector(".guest-plus-three");
// initial score

let homeScore = 0;
let guestScore = 0;

// add score to home team

function homeAddOne () {
    homeScore += 1; 
    homeScoreDisplay.textContent = homeScore;
}

function homeAddTwo () {
    homeScore += 2; 
    homeScoreDisplay.textContent = homeScore;
}

function homeAddThree () {
    homeScore += 3; 
    homeScoreDisplay.textContent = homeScore;
}


// add score to guest team

function guestAddOne () {
    guestScore += 1; 
    guestScoreDisplay.textContent = guestScore;
}

function guestAddTwo () {
    guestScore += 2; 
    guestScoreDisplay.textContent = guestScore;
}

function guestAddThree () {
    guestScore += 3; 
    guestScoreDisplay.textContent = guestScore;
}

// event listener home

homeBtn1.addEventListener('click', homeAddOne);
homeBtn2.addEventListener('click', homeAddTwo);
homeBtn3.addEventListener('click', homeAddThree);

// event listeners guest 

guestBtn1.addEventListener('click', guestAddOne);
guestBtn2.addEventListener('click', guestAddTwo);
guestBtn3.addEventListener('click', guestAddThree);
