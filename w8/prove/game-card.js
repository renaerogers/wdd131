const aCard = {
    name: "Boo Burger",
    class: "Food Ghost",
    level: 1,
    health: 60,
}
const bCard = {
    name: "Boo Burrito",
    class: "Food Ghost",
    level: 1,
    health: 70,
}
function renderCard(card) {
    document.querySelector(".name").textContent = card.name;
    document.querySelector(".class").textContent = `Class: ${card.class}`;
    document.querySelector(".level").textContent = `Level: ${card.level}`;
    document.querySelector(".health").textContent = `Health: ${card.health}`;
}
renderCard(aCard);

document.querySelector("#attack").addEventListener("click", function () {
    aCard.health -= 20;
    renderCard(aCard);
    if (aCard.health <= 0) {
        alert(`${aCard.name} has been defeated!`);
        aCard.health = 0; 
        renderCard(aCard);
    }
});

let levelUpCount = 0;
document.querySelector("#level").addEventListener("click", function () {
    if (levelUpCount < 5) {
        aCard.level++;
        aCard.health += 10; 
        levelUpCount++;
        renderCard(aCard);
    } else {
        alert("You have reached the maximum level up!");
    }
});

let heal = 0;
document.querySelector("#heal").addEventListener("click", function () {
    if (heal < 5) {
        heal++;
        aCard.health += 10;
        renderCard(aCard);
    } else {
        alert("You have used all your heals!");
    }
}); 
