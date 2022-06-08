document.querySelector(".player-1 img").setAttribute("src", "images/dice6.png");
document.querySelector(".player-2 img").setAttribute("src", "images/dice6.png");

var randomNumber1 = Math.floor((Math.random()*6) + 1);
var randomNumber2 = Math.floor((Math.random()*6) + 1);

document.querySelector(".player-1 img").setAttribute("src", "images/dice" + randomNumber1+".png");
document.querySelector(".player-2 img").setAttribute("src", "images/dice" + randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    document.querySelector(".heading").innerHTML = "🚩Player-1 Wins!";
}   else if(randomNumber1 < randomNumber2){
    document.querySelector(".heading").innerHTML = "Player-2 Wins!🚩";

}   else{
    document.querySelector(".heading").innerHTML = "DRAW!";

}

