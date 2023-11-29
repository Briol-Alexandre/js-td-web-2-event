/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/

const red = document.getElementById('rouge').value;
const green = document.getElementById('vert').value;
const blue = document.getElementById('bleu').value;
const yellow = document.getElementById('jaune').value;

document.getElementById('rouge').addEventListener('click', ()=>{
    document.body.style.backgroundColor= red;
})
document.getElementById('vert').addEventListener('click', ()=>{
    document.body.style.backgroundColor= green;
})
document.getElementById('bleu').addEventListener('click', ()=>{
    document.body.style.backgroundColor= blue;
})
document.getElementById('jaune').addEventListener('click', ()=>{
    document.body.style.backgroundColor= yellox;
})