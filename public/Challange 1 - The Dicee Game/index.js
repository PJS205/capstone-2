//Random numbers
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

//DiceImgs
var randomDiceImg1 = "./images/dice" + randomNumber1 + ".png";
var randomDiceImg2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImg1);
document.querySelector(".img2").setAttribute("src", randomDiceImg2);

//If-statements
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
} if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 wins!";
} if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
}