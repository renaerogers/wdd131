
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    const myElement = document.getElementById('content');

    if (current == 'dark') {
        document.body.style.backgroundColor = '#333333';
        document.body.style.color = 'white';
        myElement.style.borderColor = 'white';
        logo.src = 'images/byui-logo-white.png';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        myElement.style.borderColor = 'black';
        logo.src = 'images/byui-logo-blue.webp';
    }
}           
                    