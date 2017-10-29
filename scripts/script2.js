var playing = true
var userHealth = 40;
var grantHealth = 10;
var wins = 0;

function startGame(){
  var answer = prompt("Do you want to play?").toLowerCase();
  if(answer === "yes"){
    var name = prompt("Please enter the character's name.");
    startCombat(name);
  }else{
    var playing =false;
    console.log("Game Over.")
  }
}

function startCombat(name){
  while(playing){
    //Win Condition for ending game
    if(wins ===3){
      console.log("That's three wins. You have won the battle!!");
      break;
    }

    //Damage
    var aOrQ =prompt("Would you like to attack or quit?").toLowerCase();

    if(aOrQ ==="attack"){
      userHealth -= getDamage();
      grantHealth -= getDamage();
      console.log("Uh oh! " + name + " takes a hit. Your health is now " + userHealth + "!");
      console.log("Bam! Your strike has landed. Grant has " + grantHealth + " health left.");
    }else if(aOrQ ==="quit"){
      playing = false;
    }

    //Health Condition for ending game.
    if(grantHealth <=0){
      wins++;
      grantHealth = 10;
      console.log(name + " Wins!");
    }else if(userHealth <=0){
      console.log("Game Over. You lost");
      break;
    }

  }

  function getDamage(){
    return Math.floor(Math.random() * 5) + 1;
  }
}
