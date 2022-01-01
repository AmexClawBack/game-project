//Defining all variables point to the different DIVs
let enemyHealth = document.querySelector('.eFont');
let playerHealth = document.querySelector('.pFont');

//Unused variables; Identified for later use
// let cardOne = document.querySelector('.card1');
// let CardTwo = document.querySelector('.card2');
// let cardThree = document.querySelector('.card3');
// let CardFour = document.querySelector('.card4');
// let cardFive = document.querySelector('.card5');
// let CardSix = document.querySelector('.card6');
let attackBtn = document.querySelector('.btn1');

// Player Name and Health
class Player {
    constructor (name, health) {
    this.name = name;
    this.health = health;
    };
};

// Card Name and Stats
class Card{
    constructor (cardName, attack, defense) {
    this.name = cardName;
    this.attack = attack;
    this.defense = defense;
};
 
};

// Identifying between players and cards
class EnemyHealth extends Player {
    constructor(name, health){
        super(name, health)
    };
};
class PlayerHealth extends Player {
    constructor(name, health){
        super(name, health)
    };
};

class EnemyCards extends Card {
    constructor(cardName, attack, defense) {
        super(cardName, attack, defense)
    };
};
class PlayerCards extends Card {
    constructor(cardName, attack, defense) {
        super(cardName, attack, defense)
    };
};

//Settings for both players and their cards
const enemyDeck = [new EnemyCards('Zalto, Fire Giant Duke', 7, 3), new EnemyCards('Cavalier of Flame', 6, 5), new EnemyCards('Bloodpyre Elemental', 4, 1) ];
const playerDeck = [new PlayerCards('Yargle, Glutton of Urborg', 9, 3), new PlayerCards('Extractor Demon', 5, 5), new PlayerCards('Archfiend of Spite', 6, 6)];
// Player and Enemy health
const userHealth = new PlayerHealth('Player', 20);
const opponentHealth = new EnemyHealth('Opponent', 20);




//Attack function
function attack() {

    // Found this solution on Progamiz.com
    // Random card generated for opponent
    function randomOpponent(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    };
    const enemyResult = randomOpponent(enemyDeck);
    
    //Random card generated for user
    function randomPlayer(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    };
    const playerResult = randomPlayer(playerDeck);

    // Outcome of the attacking and defending player, which will be inflicted onto enemy health
    const playerAttackOutcome = playerResult.attack - enemyResult.defense;
    const enemyAttackOutcome = enemyResult.attack - playerResult.defense;
    
    //playerattack and enemyattack greater than enemydefense and playerdefense
    if (playerResult.attack > enemyResult.defense && enemyResult.attack > playerResult.defense) {

            //Outcome of the battle to display on health amount
            enemyHealth.innerText = opponentHealth.health -= playerAttackOutcome;
            playerHealth.innerText = userHealth.health -= enemyAttackOutcome;
        
        //Alert to describe battle participants
        alert(`A fierce battle ensues between your creature: ${playerResult.name} and opponents' creature: ${enemyResult.name}!`)

        //Alert to describe the battle outcome
        alert(`Your creature: ${playerResult.name}, attack overpowers ${enemyResult.name}'s defense, causing ${playerAttackOutcome} damage to opponents health. Your opponents' creature: ${enemyResult.name}, attack overpowers ${playerResult.name}'s defense, causing ${enemyAttackOutcome} damage to your health.` )
        
    // player attack greater than enemy defense AND enemy attack less than player defense
    }; if(playerResult.attack > enemyResult.defense && enemyResult.attack < playerResult.defense){

        //Outcome of the battle to display on health amount
        enemyHealth.innerText = opponentHealth.health -= playerAttackOutcome;
        

        //Alert to describe battle participants
        alert(`A fierce battle ensues between your creature: ${playerResult.name} and opponents' creature: ${enemyResult.name}!`)

        //Alert to describe the battle outcome
        alert(`Your creature: ${playerResult.name}, attack overpowers ${enemyResult.name}'s defense, causing ${playerAttackOutcome} damage to opponents health. Your opponents' creature: ${enemyResult.name}, is unable to overpower ${playerResult.name}'s defense, you lose no health.` );

        //Player attack greater than enemy defense and enemy attack equal to player defnese
    }; if(playerResult.attack > enemyResult.defense && enemyResult.attack === playerResult.defense){

        //Outcome of the battle to display on health amount
        enemyHealth.innerText = opponentHealth.health -= playerAttackOutcome;
    
        //Alert to describe battle participants
        alert(`A fierce battle ensues between your creature: ${playerResult.name} and opponents' creature: ${enemyResult.name}!`);

        //Alert to describe the battle outcome
        alert(`Your creature: ${playerResult.name}, attack overpowers ${enemyResult.name}'s defense, causing ${playerAttackOutcome} damage to opponents health. Your opponents' creature: ${enemyResult.name}, is unable to overpower ${playerResult.name}'s defense, you lose no health.` );

    };if(playerResult.attack === enemyResult.defense && enemyResult.attack > playerResult.defense){
    
        //Outcome of the battle to display on health amount      
        playerHealth.innerText = userHealth.health -= enemyAttackOutcome;

        //Alert to describe battle participants
        alert(`A fierce battle ensues between your creature: ${playerResult.name} and opponents' creature: ${enemyResult.name}!`)

        //Alert to describe the battle outcome
        alert(`Your creature: ${playerResult.name}, attack overpowers ${enemyResult.name}'s defense, causing ${playerAttackOutcome} damage to opponents health. Your opponents' creature: ${enemyResult.name}, is unable to overpower ${playerResult.name}'s defense, you lose no health.` )
    
    };

    //Set the win/lose condition
    //User wins
    if (opponentHealth.health === 0) {
        alert(`You have defeated your opponent. Refresh your browser to restart the game`)
    }; if (opponentHealth.health < 0) {
        alert(`You have defeated your opponent. Refresh your browser to restart the game`)
    };
    //Opponent wins
    if(userHealth.health === 0) {
        alert('You have been defeated. Refresh your browser to try again')
    }; if (userHealth.health < 0) {
        alert('You have been defeated. Refresh your browser to try again.')
    };
};
    


