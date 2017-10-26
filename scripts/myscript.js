var userHealth = 40;
var grantHealth = 10;
var wins = 0;

var answer = prompt("Do you want to play?");
if(answer === "yes"){
  var name = prompt("What is your name");
  var playing = true;
}else{
  playing = false;
}

while(playing === true){
  if(wins === 3){
    console.log("You Won 3 Times! Game Over");
    break;
  }
  userHealth -= Math.floor(Math.random() * 2) + 1;
  grantHealth -= Math.floor(Math.random() * 2) + 1;
  console.log( name + " has " + userHealth +" health");
  console.log(" Grant has " + grantHealth +" health");
  if (grantHealth <=0){
    wins++;
    grantHealth = 10;
    if(wins < 3){
    console.log(name + " has won!");
  }
  }else if(userHealth <=0){
    console.log("Grant Has Won! Game Over!");
    break;
  }
}
