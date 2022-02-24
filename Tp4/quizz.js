
const tab_question = [
    "Qui est le 4em president du senegal ?",
    "Qui est l'instigateur de space-X ?",
    "Comment appel-t-on la femelle du lievre ?",
    "Qui est le deuxieme membre de l'equipage de Mugiwara Ya ?",
    "Qui est l'actuel roi des pirates dans One Piece"
]; // tableau de 5 QUESTIONS
const r1 = "M. Abdoulaye Wade";
const r2 = "Mark Zuckemberg";
const r3 = "la ase";
const r4 = "Roronoa Zoro";
const r5 = "Pesonne";
const tab_r1 = ["Mamadou Dia","Leopold Sedar Senghor","Yekini","M. Abdoulaye Wade"];// 4 reponses
const tab_r2 = ["Bill Gates","Steve Jobs","Vladmir Poutine","Mark Zuckemberg"];     // 4 reponses
const tab_r3 = ["La Lapine","le poney","la lievresse","la lievre","la ase","la poule"];// 6 reponses
const tab_r4 = ["Nami","Sanji","Ussop","Chopper","Jimbe","Shanks","Roronoa Zoro","Brook"];//9 reponses
const tab_r5 = ["Luffy","Barbe Blanche","Shanks","Big Mom","Kaido"];                       // 5 reponses
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var indices = new Array();

function rand_question() {
    var choix = Math.floor(Math.random()*tab_question.length);

 /*    for (let index = 0; index < indices.length; index++) {
        console.log(`choix egal ${choix} et index egal ${indices[index]}`);
        if (indices[index]==choix) {
            console.log('faux');
        } else {
            if (indices.length == tab_question.length) { console.log('tableau plein');break;}
        }
    } */
  
}

console.log(indices);
const para = document.querySelector('p').innerText = rand_question();
/* const suivant = document.getElementById('suivant').addEventListener('click',) */
const champs_question = document.getElementsByTagName('section');

