const aCard = {
    image: "images/boo-burger.png",
    name: "Boo Burger",
    class: "Food Ghost",
    level: 3,
    health: 60,
}
const bCard = {
    image: "images/boo-rrito.png",
    name: "Boo Burrito",
    class: "Food Ghost",
    level: 4,
    health: 70,
}
const cCard = {
    image: "images/kitty.png",
    name: "Calico Kitty",
    class: "Sophisticated Feline",
    level: 3,
    health: 60,
}
const dCard = {
    image: "images/pinecone-traveler.png",
    name: "Pinecone Traveler",
    class: "Magical Forest Wanderer",
    level: 2,
    health: 50,
}
const eCard = {
    image: "images/slime.png",
    name: "Slime",
    class: "Mysterious Slime Creature",
    level: 1,
    health: 40,
}
const fCard = {
    image: "images/pirate-dragon.png",
    name: "Pirate Dragon",
    class: "Swashbuckling Dragonic Pirate Captain",
    level: 4,
    health: 70,
}

function randomCard() {
    const cards = [aCard, bCard, cCard, dCard, eCard, fCard];
    const randomIndex = Math.floor(Math.random() * cards.length);
    console.log("Selected Index:", randomIndex, "Card Name:", cards[randomIndex].name);
    return cards[randomIndex];
}

const card = randomCard();
function renderCard(card) {
    document.querySelector(".image").src = card.image;
        document.querySelector(".image").style.display = "block";
        document.querySelector(".image").alt = card.name + " Image";
    document.querySelector(".name").textContent = card.name;
    document.querySelector(".class").textContent = `Class: ${card.class}`;
    document.querySelector(".level").textContent = `Level: ${card.level}`;
    document.querySelector(".health").textContent = `Health: ${card.health}`;
    if (card.health <= 0) {
        document.querySelector("body").style.backgroundColor = "#391b1b";
        document.querySelector(".card").style.backgroundColor = "#210e0e";
        document.querySelector(".name").textContent = `${card.name} has been defeated!`;
        document.querySelector(".name").style.backgroundColor = "#562828";
        document.querySelector("#attack").style.backgroundColor = "#562828";
        document.querySelector("#level").style.backgroundColor = "#562828";
        document.querySelector("#heal").style.backgroundColor = "#562828";
        document.querySelector("#reset").style.backgroundColor = "#562828";
        document.querySelector("#reset").textContent = "Reset Game";
        document.querySelector("#attack").disabled = true;
        document.querySelector("#level").disabled = true;
        document.querySelector("#heal").disabled = true;


    } else {
        document.querySelector("body").style.backgroundColor = "#f0f4f8";
        document.querySelector(".card").style.backgroundColor = "#313131";
        document.querySelector(".name").textContent = `${card.name}`;
        document.querySelector(".name").style.backgroundColor = "#5d747b";
        document.querySelector("#attack").style.backgroundColor = "#5d747b";
        document.querySelector("#level").style.backgroundColor = "#5d747b";
        document.querySelector("#heal").style.backgroundColor = "#5d747b";
        document.querySelector("#reset").style.backgroundColor = "#5d747b";
        document.querySelector("#reset").textContent = "Reset Card";
        document.querySelector("#attack").disabled = false;
        document.querySelector("#level").disabled = false;
        document.querySelector("#heal").disabled = false;
    }
}
renderCard(card);

document.querySelector("#attack").addEventListener("click", function () {
    card.health -= 20;
    renderCard(card);
    if (card.health <= 0) {
        alert(`${card.name} has been defeated!`);
        card.health = 0; 
        renderCard(card);
    }
});

let levelUpCount = 0;
document.querySelector("#level").addEventListener("click", function () {
    if (levelUpCount < 5) {
        card.level++;
        card.health += 10; 
        levelUpCount++;
        renderCard(card);
    } else {
        alert("You have reached the maximum level up!");
    }
});

let heal = 0;
document.querySelector("#heal").addEventListener("click", function () {
    if (heal < 5) {
        heal++;
        card.health += 10;
        renderCard(card);
    } else {
        alert("You have used all your heals!");
    }
}); 

function resetButtons() {
    levelUpCount = 0;
    heal = 0;
}
function resetCard() {
    resetButtons();
    const newCard = randomCard();
    Object.assign(card, newCard); 
    renderCard(card);
    console.log("New character loaded!");
}
document.querySelector("#reset")?.addEventListener("click", resetCard);