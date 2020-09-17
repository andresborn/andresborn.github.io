let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySRC = myImage.getAttribute('src');
    if(mySRC === 'images/cyber-city.png') {
        myImage.setAttribute('src', 'images/sci-mechanics.png');
    } else {
        myImage.setAttribute('src', 'images/cyber-city.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}