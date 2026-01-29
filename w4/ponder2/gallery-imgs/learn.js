// Switch cases might not always be permitted because the code could have bugs if not used carefully.
// Code linters = json code rules -> scans code for potential employer specified issues 
function door(state) {
    switch (state) {
        case 0:
            return "Closed";
        case 1:
            return "Open";
        //default:
        //    throw new Error("Invalid door state");
    }
}

function fruitColor(fruit) {
    let color = "unknown"; 

    switch (fruit) {
        case "apple":
        case "cherry":
        case "strawberry":
            color = "red";
            break; //If you don't have a break statement, it will fall through to the next case, making the color "yellow" 
        case "banana":
        case "lemon":
            color = "yellow";
            break;
        case "kiwi":
        case "lime":
            color = "green";
            break;
        default:
            break;
    }
    return color; 
}

function gradeFromScore(score) {
    let grade = "Invalid Score";

    switch (true) {
        case score > 100:
            break;
        case score >= 90:
            grade = "A";
            break;
        case score >= 80:
            grade = "B";
            break;
        case score >= 70:
            grade = "C";
            break;
        case score >= 60:
            grade = "D";
            break;
        case score < 60 && score >= 0:
            grade = "F";
            break;  
        default:
            break;
    }       
    return grade;
}
//const score = prompt("Enter your score (0-100): "); NOt usable in console 
console.log("gradeFromScore(95): ", gradeFromScore(95)); // A

