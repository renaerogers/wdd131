numbers = [1, 2, 3, 4, 5];

// Does not change the original array 
// 'num' is a placeholder for each element in the array and can be named anything
const numbersDoubled = numbers.map((num) => {
    return num * 2;
})

const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
})
const oddNumbers = numbers.filter((num) => {
    return num % 2 === 1;
})

/*console.log(numbers); 
console.log(numbersDoubled);
console.log(evenNumbers);
console.log(oddNumbers); */

// JavaScript objects are like dictionaries in Python. They have key-value pairs. The keys are strings and the values can be any data type.

