var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this
console.log("Robot Name: " + playerName, " Attack: " + playerAttack, " Health: " + playerHealth, " Money: " + playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
/* console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++)
{
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
} */

var enemyHealth = 50; //numeric data type
var enemyAttack = 12;

var fight = function(enemyName)
{
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT")
    {
        //Alert players that they are starting the round
        window.alert("Wellcome to Robot Gladiator");

        //Substract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        enemyHealth = enemyHealth - playerAttack;

        //Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

        //check enemy's health
        if (enemyHealth <= 0)
        {
            window.alert(enemyName + "has died!");
        }
        else
        {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        //Substract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealt' variable.
        playerHealth = playerHealth - enemyAttack;

        //log a resulting message to the console so we kown that it worked.
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //check player's health
        if (playerHealth <= 0)
        {
            window.alert(playerName + "has died!");
        }
        else
        {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP")
    {
        window.alert(playerName + " has chosen to skip the fight!");

        //confirm player wants to skip
        var confirmskip = window.confirm("Are you sure you'd like to quit?");

        //if yes (true), leave fight
        if (confirmskip)
        {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //substract money from playerMoney for skipping
            playerMoney = playerMoney -2;
        }
        //if not (false), ask questions again by running fight() again
        else
        {
            fight();
        }
    }
    else
    {
        window.alert("You need to choose a valid option. Try again!");
    }
}
for (var i = 0; i < enemyNames.length; i++)
{
    fight(enemyNames[i]);
}