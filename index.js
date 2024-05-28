var randomNumber1 = Math.round(Math.random()*5 + 1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
//console.log(imgnum)
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.round(Math.random()*5 + 1);
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
//console.log(imgnum)
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= "🚩 Play 1 Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML= "Play 2 Wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML= "Draw!";
}