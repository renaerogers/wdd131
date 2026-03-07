const recipes = [
    {   tag: "breakfast",
        name: "Sweet Potato Waffles", 
        rating: 3,
        description: "These sweet potato waffles are a delicious and nutritious breakfast option that combines the natural sweetness of sweet potatoes with the crispy texture of waffles."
    },
    {   tag: "dessert",
        name: "Apple Crisp",
        rating: 4, 
        description: "This apple crips recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream."
    },
    {   tag: "dinner",
        name: "Black Beans and Rice",
        rating: 5, 
        description: "This black beans and rice recipe is a hearty and flavorful one-pot meal that's perfect for a quick weeknight dinner."
    },
    {   tag: "dessert",
        name: "Chocolate Chip Cookies",
        rating: 5, 
        description: "This chocolate chip cookie recipe is a classic and beloved treat that's perfect for satisfying your sweet tooth."
    },
    {   tag: "dinner",
        name: "Chicken Curry",
        rating: 4,
        description: "This chicken curry recipe is a aromatic and flavorful dish that's perfect for a cozy weeknight dinner."
    },
    {   tag: "dessert",
        name: "Escalopes de Poulet a la Creme",
        rating: 4,
        description: "This chicken recipe is a classic French dish that features tender chicken escalopes cooked in a rich and creamy sauce, often made with ingredients like cream, mushrooms, and white wine."
    },
    {   tag: "dessert",
        name: "German Gooseberry Cake",
        rating: 4,
        description: "This German gooseberry cake is a traditional dessert that's perfect for a spring or summer gathering."
    },
    {   tag: "side dish",
        name: "Roasted Potatoes",
        rating: 4,
        description: "This roasted potatoes recipe is a simple and delicious side dish that's perfect for any occasion."
    }
];

// Select the recipe list element and populate it with the recipes from the array
// Loop through the recipes array and create a list item for each recipe, then append it to the recipe list in the html document. Each list item should include the recipe name, rating (displayed as stars out of five with empty stars as necessary), and description.
// Make sure to use appropriate HTML elements and classes for styling purposes as well as aria attributes for accessibility.

const recipeList = document.getElementsByClassName('recipes');

function recipeTemplate(recipe) {
    return `
        <section class="recipe-item">
            <h3 class="recipe-name">${recipe.name}</h3>
            <p class="recipe-rating" aria-label="Rating: ${recipe.rating} out of 5 stars">${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}</p>
            <p class="recipe-desc">${recipe.description}</p>
        </section>
    `;
}

recipes.forEach(recipe => {
    const recipeItem = document.createElement('section');
    recipeItem.classList.add('recipe-item');
    recipeItem.innerHTML = recipeTemplate(recipe);
    recipeList.appendChild(recipeItem);
}); 


            // <section class="recipe">
            //     <article class="recipe-card">
            //         <img src="images/images/apple-crisp.jpg" alt="Apple Crisp">
            //         <p class="food-category">dessert</p>
            //         <h3>Apple Crisp</h3>
            //         <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
            //             <span aria-hidden="true" class="icon-star">⭐</span>
            //             <span aria-hidden="true" class="icon-star">⭐</span>
            //             <span aria-hidden="true" class="icon-star">⭐</span>
            //             <span aria-hidden="true" class="icon-star">⭐</span>
            //             <span aria-hidden="true" class="icon-star-empty">☆</span>
            //         </span>   
            //         <p class="recipe-desc">This apple crips recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.</p>
            //     </article>
            // </section>

// function sectionTemplate(section) {
//     return `<tr>
//         <td>${section.sectionNum}</td>
//         <td>${section.roomNum}</td>
//         <td>${section.enrolled}</td>
//         <td>${section.days}</td>
//         <td>${section.instructor}</td>
//         <td>${section.class}</td></tr>`
// }

// const totalEnrolled = document.querySelector("#totalEnrollment");
// function renderTotalEnrollment(sections) {
//     const total = sections.reduce((total, section) => total + section.enrolled, 0);
//     totalEnrolled.innerHTML = `Total Enrollment: ${total} students`;
// }

// function renderSections(sections) {
//     const html = sections.map(sectionTemplate);
//     document.querySelector("#sections").innerHTML = html.join("");

//     renderTotalEnrollment(sections);
// }
// renderSections(aCourse.sections);

// document.querySelector("#enrollStudent").addEventListener("click", function () {
//         const sectionNum = document.querySelector("#sectionNumber").value;
//         aCourse.enrollStudent(sectionNum);
// });