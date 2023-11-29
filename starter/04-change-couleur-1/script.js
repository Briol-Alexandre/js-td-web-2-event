/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
*/
document.addEventListener('DOMContentLoaded', function () {
    let redButton = document.getElementById('red');
    let greenButton = document.getElementById('green');
    let yellowButton = document.getElementById('yellow');
    let blueButton = document.getElementById('blue');

    redButton.addEventListener('click',() => {
        document.body.style.backgroundColor = 'red';
    });

    greenButton.addEventListener('click',() => {
        document.body.style.backgroundColor = 'green';
    });

    yellowButton.addEventListener('click',() => {
        document.body.style.backgroundColor = 'yellow';
    });

    blueButton.addEventListener('click',() => {
        document.body.style.backgroundColor = 'blue';
    });
});







