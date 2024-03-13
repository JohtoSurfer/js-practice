// GLOBAL
let xp = 0;
let health = 100;
let silver = 50;
let currentWeapon = 0;
let fighting;
let demonHealth;
let inventory = ["holy water"];
// QUERY
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const silverText = document.querySelector("#silverText");
const monsterStats = document.querySelector("#demonStats");
const demonName = document.querySelector("#demonName");
const demonHealthText = document.querySelector("#demonHealth");
// ARRAYS
const weapons = [
  { name: 'holy water', power: 5 },
  { name: 'silver dagger', power: 30 },
  { name: 'magic staff', power: 50 },
  { name: 'enchanted sword', power: 100 }
];
const demon = [
  {
    name: "ghost",
    level: 2,
    health: 15
  },
  {
    name: "undead warrior",
    level: 8,
    health: 60
  },
  {
    name: "demon",
    level: 20,
    health: 300
  }
]
const locations = [
  {
    name: "cursed Town",
    "button text": ["Go to store", "Go to haunted forest", "Fight Demon"],
    "button functions": [goShop, goHauntedForest, fightDemon],
    text: "You are in the cursed town square. You see a sign that says \"Magic Shop\"."
  },
  {
    name: "shop",
    "button text": ["Buy 10 health (10 silver)", "Buy weapon (30 silver)", "Go to cursed town square"],
    "button functions": [buyHealth, buyWeapon, goShop],
    text: "You enter the magic items shop."
  },
  {
    name: "haunted forest",
    "button text": ["Fight maid ghost", "Fight undead warrior", "Go to cursed town square"],
    "button functions": [fightGhost, fightUndead, goShop],
    text: "You enter the haunted forest. You see some evil spectres."
  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goShop],
    text: "You are slaying a demon."
  }
];

// init btn 
button1.onclick = goShop;
button2.onclick = goHauntedForest;
button3.onclick = fightDemon;

// functionality 

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
  }
  
  function goCursedTown() {
    update(locations[0]);
  }
  
  function goShop() {
    update(locations[1]);
  }
  
  function goHauntedForest() {
    update(locations[2]);
  }

  
  function buyHealth() {
    if (silver >= 10) {
      silver -= 10;
      health += 10;
      silverText.innerText = silver;
      healthText.innerText = health;
    } else {
      text.innerText = "You do not have enough silver to buy health.";
    }
  }

  function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
      if (silver >= 30) {
        silver -= 30;
        currentWeapon++;
        silverText.innerText = silver;
        let newWeapon = weapons[currentWeapon].name;
        text.innerText = "You now have a " + newWeapon + ".";
        inventory.push(newWeapon);
        text.innerText += " In your inventory you have: " + inventory;
      } else {
        text.innerText = "You do not have enough silver to buy a weapon.";
      }
    } else {
      text.innerText = "You already have the most powerful weapon!";
      button2.innerText = "Sell weapon for 15 silver";
      button2.onclick = sellWeapon;
    }
  }

  function sellWeapon() {
    if (inventory.length > 1) {
      silver += 15;
      silverText.innerText = silver;
      let currentWeapon = inventory.shift();
      text.innerText = "You sold a " + currentWeapon + ".";
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "Don't sell your only weapon!";
    }
  }
  function fightGhost() {
    fighting = 0;
    goFight();
  }
  
  function fightUndead() {
    fighting = 1;
    goFight();
  }

    
  function fightDemon() {
    fighting = 2;
    goFight();
  }

  function goFight() {
    update(locations[3]);
    demonHealth = demon[fighting].health;
    demonStats.style.display = "block";
    demonName.innerText = demon[fighting].name;
    demonHealthText.innerText = demonHealth;
  }