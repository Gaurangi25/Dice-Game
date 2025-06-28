var diceImages = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
var value1 = diceImages[randomNumber1 - 1];
console.log(value1);
console.log(randomNumber1);

document.querySelector(".img1").setAttribute("src", value1);

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
var value2 = diceImages[randomNumber2 - 1];
console.log(value2);
console.log(randomNumber2);

document.querySelector(".img2").setAttribute("src", value2);

function win(randomNumber1, randomNumber2) 
{
  if (randomNumber1 > randomNumber2)
    document.querySelector("h1").innerHTML = "🙌 Player1 Wins!";

  else if (randomNumber2 > randomNumber1)
    document.querySelector("h1").innerHTML = "Player2 Wins! 🙌";

  else document.querySelector("h1").innerHTML = "Draw!";
}

win(randomNumber1, randomNumber2);
