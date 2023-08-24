var randomNum = Math.random();
randomNum = Math.floor(randomNum*6 + 1); // 1 - 6

var randomNum2 = Math.random();
randomNum2 = Math.floor(randomNum2*6 + 1); // 1 - 6
// console.log(randomNum);

var randmDice = "images/dice" + randomNum + ".png"; 

var randmDice2 = "images/dice" + randomNum2 + ".png"; 

document.querySelector(".img1").setAttribute("src", randmDice);
document.querySelector(".img2").setAttribute("src", randmDice2);

if(randomNum > randomNum2){
    document.querySelector("h1").innerHTML = "Player1 Wins";
}
else if(randomNum < randomNum2){
    document.querySelector("h1").textContent = "Player2 Wins";
}
else{
    document.querySelector("h1").textContent = "Draw";
}
