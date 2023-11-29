/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/

// Un seul champ

const inputChange = {
    inputSelector: document.querySelectorAll('input[type=text]'),
    init() {
        this.addEventListeners();
    },
    addEventListeners(){
        for(const input of this.inputSelector) {
            input.addEventListener('focus', this.focus);
            input.addEventListener('blur', this.blur);
        }
    },
    focus(e) {
            e.currentTarget.value = '';
            e.currentTarget.style.background = 'lavender';
    },
    blur(e) {
            e.currentTarget.value='';
            e.currentTarget.style.background = 'none'
    },
}
inputChange.init();

// Deux champs


// Plusieurs champs