// 1. Target the text element(s)
const rippleTextElements = document.querySelectorAll(".ripple-text");

// 2. Add a click event listener to each element
rippleTextElements.forEach(element => {
    element.addEventListener("click", function (e) {
        // 3. Create a new span element for the ripple
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        // 4. Calculate the click position relative to the element
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 5. Set the position of the ripple element
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // 6. Append the ripple span to the text element
        this.appendChild(ripple);

        // 7. Remove the ripple span after the animation finishes
        // The duration should match the CSS animation duration (0.6s)
        setTimeout(() => {
            ripple.remove();
        }, 600); // 600ms matches the animation duration
    });
});
