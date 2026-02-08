const spans = document.querySelectorAll('article.book p span');

function addStars(span) {
    const stars = span.innerText.length;
    span.setAttribute('aria-label', `${stars} out of 5 stars`);
}

//spans.forEach(addStars); 

//span.length can start from the end of the list 
// Line 12 - 14 is the same as line 8, but using a for loop instead of forEach.
// Using allows for more conditions and control over where to start and end the loop
for(let i = 0; i < spans.length; i++) {
    addStars(spans[i]);
}