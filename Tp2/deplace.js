var i=0;
var sous_section = document.getElementsByClassName('sous_section');
var transfert_event = document.getElementsByClassName('fleche');

/////////////////////////////////////////////////////////////

transfert_event[0].addEventListener('click',transfert);
transfert_event[1].addEventListener('click',transfert_retour);


///////////////////////////////////////////////////////////
function selectionner(lid){

    var element = document.getElementById(lid);
    var attrib = element.getAttribute('select');

    if (attrib=='select') {
        element.setAttribute('style','background-color: white;color: black;');
        element.setAttribute('select','null');
    }
    else
    {
        element.setAttribute('style','background-color: rgba(46, 0, 251, 0.904);color: white;');
        element.setAttribute('select','select');
    }
}

function new_element() {
    i++;
    var compteur_para = 0;
    sous_section[0].innerHTML += `<p id='element_${i}' onclick='selectionner(this.id)' select='' >Element ${i}</p>`;
    console.log(sous_section[0]);
    console.log(sous_section[0].childNodes);
}

function transfert(){
    var les_para = document.querySelectorAll('p');
    console.log(les_para);
    for (let index = 0; index < les_para.length; index++) {

        const attrib = les_para[index].getAttribute('select');
        if (attrib == 'select') {
            sous_section[1].appendChild(les_para[index]);
        }
    } 
}

function transfert_retour(){
    var les_para = document.querySelectorAll('p');
    console.log(les_para);
    for (let index = 0; index < les_para.length; index++) {

        const attrib = les_para[index].getAttribute('select');
        if (attrib == 'select') {
            sous_section[0].appendChild(les_para[index]);
        }
    } 
}
