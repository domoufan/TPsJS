let corps = document.getElementById("corps");
var i=0,j=1000,f=2000;

function newNote() {

    corps.insertAdjacentHTML("beforeend"," <div id='newNote'><div class='mini_entete'><img src='pen-to-square.svg' id='edit' onclick='editer(this.id)' class='tailleIcone' alt='' ><img src='trash-can.svg' id='icone' onclick='supprimerNoeud(this.id)' class='tailleIcone' alt=''></div><textarea name='' id='champ_note' cols='10' rows='10'></textarea></div>");
}

 function add_id(){
    const Note=document.getElementById('newNote');
    Note.setAttribute('id',`${i}`);i++;

    const ico=document.getElementById('icone');
    ico.setAttribute('id',`${j}`);j++;

    const edi=document.getElementById('edit');
    edi.setAttribute('id',`${f}`);f++;
}

function supprimerNoeud(identite) {
    var parent_elt=document.getElementById(identite).parentNode.parentNode;
    parent_elt.remove();
}

function editer(identite){
    if (identite) {
        (((document.getElementById(identite)).parentNode).nextSibling).insertAdjacentHTML('beforeend','disabled')
    } else {
        (((document.getElementById(identite)).parentNode).nextSibling).insertAdjacentHTML('beforeend','')
    }

    /* console.log(((document.getElementById(identite)).parentNode).nextSibling.id); */
}