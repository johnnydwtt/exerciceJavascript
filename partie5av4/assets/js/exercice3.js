// FONCTION POUR LE NOM
    var nameReg = new RegExp(/^([a-zA-Z '-]{1,20})$/);
    var valid = nameReg.test(nameUsers);
    var button = document.getElementById('button');

    button.onclick = () => {

        if (valid) {
            document.getElementById('valid').innerHTML = ("");
        } else {
            document.getElementById('invalidC').innerHTML = ("Nom incorrecte");
        }
    }

// FONCTION POUR EMAIL

 // ==================> déclaration
    var emailReg = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    var valid = emailReg.test(email);
    var button = document.getElementById('button');

    button.onclick = () => {

        // ==================> instruction
        if (valid) {
            document.getElementById('').innerHTML = ("");
        } else {
            document.getElementById('invalid').innerHTML = ("Email incorrecte");
        }
    }

// FONCTION POUR L'AGE
    var ageReg = new RegExp(/^100$|^[0-9]{1,2}$|^[0-9]{1,2}\,[0-9]{1,3}$/);
    var valid = ageReg.test(idAge);
    var button = document.getElementById('button');

    button.onclick = () => {

        if (valid) {
            document.getElementById('').innerHTML = ("");
        } else {
            document.getElementById('invalidB').innerHTML = ("Age incorrecte");
        }
    }