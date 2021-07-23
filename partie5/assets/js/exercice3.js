let inputForm1 = document.getElementById('name');
let inputForm2 = document.getElementById('mail');
let inputForm3 = document.getElementById('age');
let regMessage_a = document.getElementById('regMessage1');
let regMessage_b = document.getElementById('regMessage2');
let regMessage_c = document.getElementById('regMessage3');
let error = 'elements incorrect';

var RegName = /^([a-zA-Zéèêàâä\-\' ]+)$/;
var RegMail = /^([a-zA-Z0-9\-_\.]+)@([a-zA-Z0-9\-_]+)\.([a-z]{2,5})$/;
var RegAge = /^([0-9]){1,3}$/;


// Cette instruction véfirie la regex du nom

/*L'évènement keyup se déclenche lorsque
 qu'une touche du clavier qui a été pressée est relâchée.*/

inputForm1.onkeyup = () => {
   
    if(RegName.test(inputForm1.value)){
        regMessage_a.innerHTML='';
    }else{
        regMessage_a.innerHTML=error;
        // regMessage_a.classList.add('red_message'); ← inutile si la class existe déja dans le HTML
    }
} 

// Cette instruction vérifie la regex de l'adresse email
inputForm2.onkeyup = () => {
   
    if(RegMail.test(inputForm2.value)){
        regMessage_b.innerHTML='';
    }else{
        regMessage_b.innerHTML=error;
    }
}
//   Cette instruction vérifie la regex de l'âge
inputForm3.onkeyup = () => {
   
    if(RegAge.test(inputForm3.value)){
        regMessage_c.innerHTML='';
    }else{
        regMessage_c.innerHTML=error;
    }
} 


































// // FONCTION POUR LE NOM
//     var nameReg = new RegExp(/^([a-zA-Z \'\-]{1,20})$/);
//     var valid = nameReg.test(nameUsers);
//     var button = document.getElementById('button');

//     button.onclick = () => {

//         if (valid) {
//             document.getElementById('valid').innerHTML = ("");
//         } else {
//             document.getElementById('invalidC').innerHTML = ("Nom incorrecte");
//         }
//     }

// // FONCTION POUR EMAIL

//  // ==================> déclaration
//     var emailReg = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
//     var valid = emailReg.test(email);
//     var button = document.getElementById('button');

//     button.onclick = () => {

//         // ==================> instruction
//         if (valid) {
//             document.getElementById('').innerHTML = ("");
//         } else {
//             document.getElementById('invalid').innerHTML = ("Email incorrecte");
//         }
//     }

// // FONCTION POUR L'AGE
//     var ageReg = new RegExp(/^100$|^[0-9]{1,2}$|^[0-9]{1,2}\,[0-9]{1,3}$/);
//     var valid = ageReg.test(idAge);
//     var button = document.getElementById('button');

//     button.onclick = () => {

//         if (valid) {
//             document.getElementById('').innerHTML = ("");
//         } else {
//             document.getElementById('invalidB').innerHTML = ("Age incorrecte");
//         }
//     }