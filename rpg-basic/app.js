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
const demonStats = document.querySelector("#demonStats");
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
    "button functions": [buyHealth, buyWeapon, goCursedTown],
    text: "Welcome to the magic items shop."
  },
  {
    name: "haunted forest",
    "button text": ["Fight maid ghost", "Fight undead warrior", "Go to cursed town square"],
    "button functions": [fightGhost, fightUndead, goShop],
    text: "You enter the haunted forest. You can see the shadows of evil spectres and demons lurking behin the fog."
  },
  {
    name: "kill demon",
    "button text": ["Go to cursed town square", "Go to cursed town square", "Go to cursed town square"],
    "button functions": [goCursedTown, goCursedTown, goCursedTown],
    text: 'The demon screams "Arg!" as it dies. You gain some xp points and find pieces of silver.'
  },
  {
    name: "lose",
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
    "button functions": [restart, restart, restart],
    text: "You die. &#x2620;"
  },
  { 
    name: "win", 
    "button text": ["REPLAY?", "REPLAY?", "REPLAY?"], 
    "button functions": [restart, restart, restart], 
    text: "You defeat the demon! YOU COMPLETE THE GAME! &#x1F389;" 
  },
  ,
  {
    name: "easter egg",
    "button text": ["2", "8", "Go to town square?"],
    "button functions": [pickTwo, pickEight, goCursedTown],
    text: "You find a anciente gamble game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"
  }
];

// init btn 
button1.onclick = goCursedTown;
button2.onclick = goShop;
button3.onclick = fightDemon;

// functionality 

function update(locations) {
    demonStats.style.display = "none";
    button1.innerText = locations["button text"][0];
    button2.innerText = locations["button text"][1];
    button3.innerText = locations["button text"][2];
    button1.onclick = locations["button functions"][0];
    button2.onclick = locations["button functions"][1];
    button3.onclick = locations["button functions"][2];
    text.innerHTML = locations.text;
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

  function attack() {
    text.innerText = "The " + demon[fighting].name + "is attacking you.";
    text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";
    health -= getDemonAttackValue(demon[fighting].level);
    if (isDemonHit()) {
      demonHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;    
    } else {
      text.innerText += " You miss.";
    }
    healthText.innerText = health;
    demonHealthText.innerText = demonHealth;
    if (health <= 0) {
      lose();
    } else if (demonHealth <= 0) {
      if (fighting === 2) {
        winGame();
      } else {
        defeatDemon();
      }
    }
    if (Math.random() <= .1 && inventory.length !== 1) {
      text.innerText += " Your " + inventory.pop() + " breaks.";
      currentWeapon--;
    }
  }
  
  function getDemonAttackValue(level) {
    const hit = (level * 5) - (Math.floor(Math.random() * xp));
    console.log(hit);
    return hit > 0 ? hit : 0;
  }

  function isDemonHit() {
    return Math.random() > .2 || health < 20;
  }

  function dodge() {
    text.innerText = "You dodge the attack from the " + demon[fighting].name;
  }
  
  function defeatDemon() {
    silver += Math.floor(demon[fighting].level * 6.7);
    xp += demon[fighting].level;
    silverText.innerText = silver;
    xpText.innerText = xp;
    update(locations[4]);
  }
  
  function lose() {
    update(locations[5]);
  }

  function winGame() {
    update(locations[6]);
  }
  
  function restart() {
    xp = 0;
    health = 100;
    silver = 50;
    currentWeapon = 0;
    inventory = ["holy water"];
    silverText.innerText = silver;
    healthText.innerText = health;
    xpText.innerText = xp;
    goCursedTown();
  }

  function easterEgg() {
    update(locations[7]);
  }
  
  function pickTwo() {
    pick(2);
  }
  
  function pickEight() {
    pick(8);
  }