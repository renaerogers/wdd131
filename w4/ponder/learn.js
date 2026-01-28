const num = 7;

function add(a, b) { 
    console.log(a + b + num) // if this is used, you can't use the data outside the function
    return a + b + num; // this allows the data to be used outside the function
}

// 'a' and 'b' are parameters
// 'add(a, b)' is a function signature
// the full line is a function declaration
// functions are selfish, unless they need something for themselves, like 'num' (so it doesn't crash)
// -> they can reach out to global scope (const and let) if they need to 
// -> this can be useful if multiple functions use the same var 

function subtract(a, b) {
    return a - b;
} 

add(10, 33); 
// 10 and 33 are arguments


ans = add(3, 6); // 9
ans = subtract(ans, 2); // 7

// the value from add(3, 6) is stored into the var 'ans' and can be used later 

console.log(ans);

// the following functions are both valid ways to declare functions in JS
// outside of strict mode, add() can be called before it is declared due to hoisting
// to enter strict mode (making it similar to python), add 'use strict'; to the top of the file 

function add(a, b) { 
    console.log(a + b + num) 
    return a + b + num; 
}

const subtract = (a, b) => {
    return a - b;
} 

// teacher is more familiar arrow functions, but either can be used 


//transform: translate(0, 8px) 
//transition: transform 0.2s ease-in-out; 