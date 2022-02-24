const long = document.getElementById('longueur');
/* var longueur = long.value; */
const maj    = document.getElementById('maj');
const min    = document.getElementById('min');
const number = document.getElementById('number');
const car    = document.getElementById('car');
const valider = document.getElementById('valider');


function minuscule(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function majuscule(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function numero(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function caractere(){
  var  chaine="&~\"#'{([-|`_\\@)}]=+$£%*<>,?;.:/!";
    return chaine[Math.floor(Math.random()*chaine.length)];
}

function generateur(longueur) {
    var mdp = '';
    let tab_choix = [maj.checked,min.checked,number.checked,car.checked];

    for (let index1 = 0; index1 < longueur; index1++) {
        for (let index = 0; index < tab_choix.length; index++) {
            if (tab_choix[index]==true) {
                switch (index) {
                    case 0:
                        if (mdp.length>=longueur) {break}
                        mdp+=majuscule();
                        break;
                    case 1:
                        if (mdp.length>=longueur) {break}
                        mdp+=minuscule();
                        break;
                    case 2:
                        if (mdp.length>=longueur) {break}
                        mdp+=numero();
                        break;
                    case 3:
                        if (mdp.length>=longueur) {break}
                        mdp+=caractere();
                        break;
                    default:
                        break;
                }
            }
            if (mdp.length>=longueur) {continue}
        }
    }
if (long.value <= 20) {
    
        password.innerText=mdp;
}

}


valider.onclick=()=>{generateur(long.value)}
