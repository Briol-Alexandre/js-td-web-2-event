/*
EXERCICE 6 : Change couleur (4) - v2
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 2 : une seule fonction qui utilise e.target pour s'adapter au  bouton sur lequel on clique
AJOUT : Quand on clique sur le bouton, la couleur de fond de la page change de manière aléatoire
*/

const color = {
    init() {
        this.radioColor();
        this.buttonColor();
    },
    radioColor() {
        document.querySelectorAll('input[type=radio]').forEach(b => {
            b.addEventListener('click', () => {
                document.body.style.background = b.value;
            })
        })
    },
    buttonColor() {
        document.querySelector('input[type=button]').addEventListener('click', () => {
            let randomColor = Math.floor(Math.random() * 4 + 1);
            if (randomColor === 1) {
                document.body.style.background = 'red'
            } else if (randomColor === 2) {
                document.body.style.background = 'blue'
            } else if (randomColor === 3) {
                document.body.style.background = 'green'
            } else if (randomColor === 4) {
                document.body.style.background = 'yellow'
            }
        })
    },
}
color.init();



