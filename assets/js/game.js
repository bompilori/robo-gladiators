var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50; //numeric data type
var enemyAttack = 12;

var fight = function(enemyName)
{
    //repeat and execute as long as the enemy-robot is alive
    while( playerHealth > 0 && enemyHealth > 0)
    {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        if (promptFight === "skip" || promptFight === "SKIP")
        {
            window.alert(playerName + " has chosen to skip the fight!");

            //confirm player wants to skip
            var confirmskip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmskip)
            {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //substract money from playerMoney for skipping
                playerMoney = playerMoney -10;
                console.log("payerMoney", playerMoney);
                break;
            }
        }
        
        //Substract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable.
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

       //check enemy's health
        if (enemyHealth <= 0)
        {
            window.alert(enemyName + "has died!");
            
            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead 
            break;
        }
        else
        {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
            
        //Substract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealt' variable.
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

        //check player's health
        if (playerHealth <= 0)
        {
            window.alert(playerName + "has died!");
            //leave while() loop if player is dead
            break;
        }
        else
        {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        } 
    }
};
for (var i = 0; i < enemyNames.length; i++)
{
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}