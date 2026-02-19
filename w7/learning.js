const a = 5;
const b = true; 
const c = "hello";
const reg = /abc/; // regular expression pattern -> not a normal string 
// if you use var = \d{2} it looks for a digit and the {2} means it should be exactly 2 digits 
// adding a '$' makes it look for exactly that many digits and nothing else (including other numbers, strings, or spaces) 
const regLong = new RegExp('abc'); // same as above but using constructor syntax (old fashioned version)