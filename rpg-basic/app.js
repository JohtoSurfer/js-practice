let xp = 0;
let health = 100;
let silver = 50;
let currentWeapon = 0;
let fighting;
let demonHealth;
let inventory = ["holy water"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#silverText");
const monsterStats = document.querySelector("#demonStats");
const monsterName = document.querySelector("#demonName");
const monsterHealthText = document.querySelector("#demonHealth");
const weapons = [
  { name: 'holy water', power: 5 },
  { name: 'silver dagger', power: 30 },
  { name: 'magic staff', power: 50 },
  { name: 'enchanted sword', power: 100 }
];
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goCurseTown, goHauntedForest, fightDemon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goCurseTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightGhost, fightUndead, goCurseTown],
    text: "You enter the cave. You see some monsters."
  }
];

// init btn 
button1.onclick = goCurseTown;
button2.onclick = goHauntedForest;
button3.onclick = fightDemon;

// functionality 

