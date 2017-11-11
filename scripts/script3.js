function startGame(){
  var answer = prompt("Do you want to play?").toLowerCase();
  if(answer === "yes"){
    //Create character object
    var character ={
      name:prompt("What is your name?"),
      health:40,
      healsRemaining:2,
      wins:0,
      generateAttackDamage:function(){
        return Math.floor(Math.random() * 3) + 1;
      },
      heal:function(){
        var random = Math.floor(Math.random() * 10) + 1;
        this.health += random;
        this.healsRemaining --;
      }
    }
    //Create enemy object
    var enemy ={
      name : "The Wicked Witch",
      health :10,
      generateAttackDamage:function(){
        return Math.floor(Math.random() * 3) + 1;
      }
    }
    startCombat(character.name);
  }else{
    console.log("Oh Well. Maybe next time.");
  }
}

  //Function for the fight//
  function startCombat(name){
    while(character.wins < 6){
      //Win Condition for ending game
      if(character.wins ===5){
        console.log("That's five wins. You have defeated " +enemy.name +"!!");
        break;
      }

      //Damage
      var aOrQ =prompt("Would you like to attack, heal or quit?").toLowerCase();

      if(aOrQ ==="attack"){
        character.health -=character.generateAttackDamage();
        enemy.health -= enemy.generateAttackDamage();
        console.log("Uh oh! " + name + " takes a hit. Your health is now " + character.health + "!");
        console.log("Bam! Your strike has landed. " + enemy.name + " has " + enemy.health + " health left.");
      }else if(aOrQ ==="heal"){
        if(character.healsRemaining > 0){
          character.heal();
          console.log("You've healed yourself. Your health is now " + character.health);
          character.health -=character.generateAttackDamage();
          console.log("Uh oh! " + name + " takes a hit. Your health is now " + character.health + "!");
        }else{
          console.log("You dont have anymore heals. You must attack");
        }
      }else if(aOrQ ==="quit"){
        console.log("Later nerd!")
        break;
      }

      //Health Condition for ending game.
      if(enemy.health <=0){
        character.wins++;
        enemy.health = 10;
        console.log(name + " Wins! You have " + (5 - character.wins) + " more wins to go!");
      }else if(character.health <=0){
        console.log("Game Over. You lost");
        break;
      }

    }
  }
}/*End of the start game function*/
