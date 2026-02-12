function convert(letterGrade) {
    switch (letterGrade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}      

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

words.sort();
const sortedFruit = words.sort();
const fruitList = document.querySelector('#fruit-list');

words.forEach((word) => {
    const li = document.createElement('li');
    li.textContent = word;
    fruitList.appendChild(li);
});

const companies = ['Sonic', 'Wendys', 'McDonalds', 'Walmart', 'Costco', 'Target', 'Best Buy', 'Amazon', 'Apple', 'Microsoft'];

const list = document.querySelector('#company-list');

let htmlString = '';
companies.forEach((company) => {
    const li = document.createElement('li');
    li.textContent = company;
    list.appendChild(li);
});

const students = [
    {last: 'Andrus', first: 'Aaron', grade: 'A'},
    {last: 'Masa', first:'Manny', grade: 'B'},
    {last: 'Tanda', first: 'Tamanda', grade: 'A'},
    {last: 'Parker', first: 'Cody', grade: 'D'},
    {last: 'Bluff', first:'Bethany', grade: 'F'},
    {last: 'Elliot', first: 'Tanya', grade: 'C'},
    {last: 'Taylor', first: 'Aaron', grade: 'B'},
    {last: 'Allred', first:'Finn', grade: 'A'},
    {last: 'Smith', first: 'Tamanda', grade: 'C'},
    {last: 'Peterson', first: 'Brody', grade: 'B'},
    {last: 'Hendrickson', first:'Reilly', grade: 'C'},
    {last: 'Ash', first: 'Frederick', grade: 'C'},
    {last: 'Citrus', first: 'Flora', grade: 'A'},
    {last: 'Snow', first:'Nathan', grade: 'B'},
    {last: 'Roberts', first: 'Olivia', grade: 'C'},
    {last: 'Flake', first: 'Timothy', grade: 'D'},
    {last: 'Alldridge', first:'Amanda', grade: 'F'},
    {last: 'Kerrigan', first: 'Cora', grade: 'B'},
    {last: 'Krout', first: 'Dakota', grade: 'B'},
    {last: 'Coriander', first:'Toby', grade: 'A'},
    {last: 'Yuzu', first: 'Taiga', grade: 'D'},
    {last: 'Alderson', first: 'Sariah', grade: 'B'},
    {last: 'Stevens', first:'Torrin', grade: 'C'},
    {last: 'Riceberg', first: 'Adam', grade: 'A'},
];

let html = '';
students.forEach((student) => {
    html += `<li style="list-style: none; padding: 5px;">${student.first} ${student.last} - (${student.grade})</li>`; 
})
const ul = document.querySelector('#student-list');
ul.innerHTML = html;

let average = 0;
let points = 0;
students.forEach((student) => {
    points += convert(student.grade);
})
average = points / students.length;

const averageEl = document.querySelector('#grade-average');
averageEl.innerHTML = `<p style="padding: 5px; margin-left: 40px">Class Average: ${average.toFixed(2)} of 4.0</p>`;