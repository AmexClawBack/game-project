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
class Player {
    constructor (name, health) {
    this.name = name;
    this.health = health;
    }
}
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

const enemy01 = new EnemyCards('Zalto', 7, 3); 
const enemy02 = new EnemyCards('Cavalier', 6, 5);
const enemy03 = new EnemyCards('Bloodpyre', 4, 1);

const player01 = new PlayerCards('Yargle', 9, 3);
const player02 = new PlayerCards('Extractor', 5, 5);
const player03 = new PlayerCards('Archfiend', 6, 6);

const playerHealth = new PlayerHealth('Player', 20);
const enemyHealth = new EnemyHealth('Opponent', 20);






