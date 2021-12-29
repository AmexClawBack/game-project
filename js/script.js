//Defining all variables point to the different DIVs
let enemyHealth = document.getElementById('enemy-health');
let playerHealth = document.getElementById('player-health');
let cardOne = document.getElementById('card1');
let CardTwo = document.getElementById('card2');
let cardThree = document.getElementById('card3');
let CardFour = document.getElementById('card4');
let cardFive = document.getElementById('card5');
let CardSix = document.getElementById('card6');
let attackBtn = document.getElementById('btn1');

// Player Name and Health
class Player {
    constructor (name, health) {
    this.name = name;
    this.health = health;
    }
}

// Card Name and Stats
class Card{
    constructor (cardName, attack, defense) {
    this.name = cardName;
    this.attack = attack;
    this.defense = defense;
}   
    attack(target) {
       Player.health = target.defense - this.attack;
       console.log(Player.health)
    }
}

// Identifying between players and cards
class EnemyHealth extends Player {
    constructor(name, health){
        super(name, health)
    }
}
class PlayerHealth extends Player {
    constructor(name, health){
        super(name, health)
    }
}

class EnemyCards extends Card {
    constructor(cardName, attack, defense) {
        super(cardName, attack, defense)
    }
}
class PlayerCards extends Card {
    constructor(cardName, attack, defense) {
        super(cardName, attack, defense)
    }
}

//Settings for both players and their cards
const enemyDeck = [new EnemyCards('Zalto', 7, 3), new EnemyCards('Cavalier', 6, 5), new EnemyCards('Bloodpyre', 4, 1) ];
// const enemy01 = new EnemyCards('Zalto', 7, 3); 
// const enemy02 = new EnemyCards('Cavalier', 6, 5);
// const enemy03 = new EnemyCards('Bloodpyre', 4, 1);

const playerDeck = [new PlayerCards('Yargle', 9, 3), new PlayerCards('Extractor', 5, 5), new PlayerCards('Archfiend', 6, 6)];
// const player01 = new PlayerCards('Yargle', 9, 3);
// const player02 = new PlayerCards('Extractor', 5, 5);
// const player03 = new PlayerCards('Archfiend', 6, 6);

const userHealth = new PlayerHealth('Player', 20);
const opponentHealth = new EnemyHealth('Opponent', 20);




//Attack function
function attack() {

    // Generates random player and enemy cards
    // Found this solution on Progamiz.com
    function randomOpponent(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    }
    const enemyResult = randomOpponent(enemyDeck);
    console.log(enemyResult)
    
    
    function randomPlayer(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    }
    const playerResult = randomPlayer(playerDeck);
    console.log(playerResult)


    // Outcome of the attacking and defending player, which will be inflicted onto enemy health
    let enemyHealth = document.getElementById('enemy-health');
    const duelResult = enemyHealth.innerHtml = "(playerResult.attack - enemyResult.defense)";
    console.log(duelResult);
    
    // Enemy health
    
    // console.log(enemyHealth.innerHtml =  - duelResult)
    

    // The actual attack sequence when button is pressed
    if (playerResult.attack > enemyResult.defense) {
        // Enemy health
    
        //  enemyHealth.innerHtml = "Enemy Health:" + enemyHealth-duelResult;
        // console.log('enemyHealth = "Enemy Health:" + enemyHealth-duelResult;');
    } else if (playerResult.attack === enemyResult.defense) {
        console.log("You have destroyed the defending creature, but did not do any damage to your opponent")
        
    } else {
        console.log('The opponent is too powerful for you, better luck next time.')};
    };
