var character ="";
var enemy ="";


function startGame(){
    //Create character object
      character ={
      name: prompt("What is your name?"),
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
      enemy ={
      name : "The Brain Eater",
      health :10,
      generateAttackDamage:function(){
        return Math.floor(Math.random() * 3) + 1;
      }
    }
    displayInfo();
}

function displayInfo(){
    var startgame = document.getElementById("start");
    var playingmenu = document.getElementById("play");
    startgame.style.display="none";
    playingmenu.style.display="flex";

    var characterheader = document.getElementsByTagName("h2")[0];
    characterheader.innerText = character.name + "\'s Stats"
    var enemyheader = document.getElementsByTagName("h2")[1];
    enemyheader.innerText = enemy.name + "\'s Stats"


    var cname = document.getElementById("name");
    var chealth = document.getElementById("health");
    var heals = document.getElementById("healsRemaining");
    var wins = document.getElementById("wins");
    var ename = document.getElementById("ename");
    var ehealth = document.getElementById("ehealth");
    cname.innerText = "Name: " + character.name;
    chealth.innerText = " Health: " + character.health;
    heals.innerText = " Heals left: " + character.healsRemaining;
    wins.innerText = " Wins: " + character.wins;
    ename.innerText = " Name: " + enemy.name;
    ehealth.innerText = " Health: " + enemy.health;
  }/*End of the display function*/




  function gameText(condition){
    var gametext = document.querySelector("#play p");
    if(condition === "attack"){
      gametext.innerText = "Bam! Your strike has landed and you've taken a hit!. Your health is now " + character.health + " and " + enemy.name + " \'s health is " + enemy.health + ".";
    }else if(condition ==="heal"){
      gametext.innerText ="You've healed yourself but also took a hit! Your health is now " + character.health + " and " + enemy.name + " \'s health is " + enemy.health;
    }else if(condition === "quit"){
      var buttondiv = document.getElementById("buttons");
      buttondiv.style.display="none";
      var statdiv = document.getElementById("stats");
      statdiv.style.display="none";
      gametext.innerText = "You've quit the game. GAME OVER!"
    }else if(condition ==="wins"){
      var statdiv = document.getElementById("stats");
      statdiv.style.display="none";
      gametext.innerText= enemy.name + "'s health is down to zero. " +character.name + " Wins! You have " + (3 - character.wins) + " more wins to go!" ;
    }else if(condition ==="lose"){
      var buttondiv = document.getElementById("buttons");
      buttondiv.style.display="none";
      var statdiv = document.getElementById("stats");
      statdiv.style.display="none";
      gametext.innerHTML ="<p>Game Over you lost</p>";
      var pabutton = document.querySelector("#play p button");
      pabutton.className = "bdesign";
      pabutton.onclick = function click(){
        startGame();
        pabutton.style.display="none";
        var para = document.querySelector("#play p p");
        para.style.display="none";
        buttondiv.style.display="block";
        statdiv.style.display="flex";
      }
    }else if(condition ==="winner"){
      var buttondiv = document.getElementById("buttons");
      buttondiv.style.display="none";
      var statdiv = document.getElementById("stats");
      statdiv.style.display="none";
      // gametext.innerText="You've won 3 times and  defeated " + enemy.name + "!";
      gametext.innerHTML ="<p>You\'ve won 3 times and  defeated " + enemy.name + "!</p><button>Play Again</button>";
      var pabutton = document.querySelector("#play p button");
      pabutton.className = "bdesign";
      pabutton.onclick = function click(){
        startGame();
        pabutton.style.display="none";
        var para = document.querySelector("#play p p");
        para.style.display="none";
        buttondiv.style.display="block";
        statdiv.style.display="flex";
      }

    }
  }/*End of the gameText() function*/

function startCombat(choice){
  var attackchoice = document.getElementById("attack").value;
  var healchoice = document.getElementById("heal").value;
  var quitchoice = document.getElementById("quit").value;

  if(choice === "attack"){
    var statdiv = document.getElementById("stats");
    statdiv.style.display="flex";
    character.health -=character.generateAttackDamage();
    enemy.health -= enemy.generateAttackDamage();
    displayInfo();
    gameText("attack");

    //Health Condition for ending game.
    if(enemy.health <=0){
      character.wins++;
      if(character.wins >= 3){
        gameText("winner");
        return;
      }
      enemy.health = 10;
      gameText("wins");
    }else if(character.health <=0){
      gameText("lose");
      return;
    }
  }else if(choice === "heal"){
    if(character.healsRemaining > 0){
      character.heal();
      displayInfo();
      gameText("heal");
    }else{
      var gametext = document.querySelector("#play p");
      gametext.innerText = "You don't have anymore heals left."
    }
  }else if(choice==="quit"){
    gameText("quit");
  }
}/*End of the startCombat function*/

//Attack button functionality
//var attackb = document.getElementById("attack");

//attackb.onclick = function(){
//  startCombat(attackb.value);
//}
