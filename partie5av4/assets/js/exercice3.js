// FONCTION POUR LE NOM
function validateName(nameUsers) {

    var nameReg = new RegExp(/^[(a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð) '-]+$/)
    var valid = nameReg.test(nameUsers);

    if (valid) {
        document.getElementById('').innerHTML = ("");
    } else {
        document.getElementById('invalidC').innerHTML = ("Le Nom est incorrecte");
    }
}
// FONCTION POUR EMAIL

// ==================> fonction
function validateEmail(email) {

    // ==================> déclaration
    var emailReg = new RegExp(/^([\w\.\-]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);
    var valid = emailReg.test(email);

    // ==================> instruction
    if (valid) {
        document.getElementById('').innerHTML = ("");
    } else {
        document.getElementById('invalid').innerHTML = ("L'Email est incorrecte");
    }
}
// FONCTION POUR L'AGE
function validateAge(idAge) {

    var ageReg = new RegExp(/^\S[0-9]{0,3}$/);
    var valid = ageReg.test(idAge);

    if (valid) {
        document.getElementById('').innerHTML = ("");
    } else {
        document.getElementById('invalidB').innerHTML = ("L'age est incorrecte");
    }
}