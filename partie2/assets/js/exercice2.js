var age = Number

age = parseInt(prompt ('Quel âge avez-vous?'));

    if (age < 18 && age >=0){
        alert(`Vous êtes mineure vous avez ${age} ans`);
    }
    else if (age >= 18 && age<120){
        alert(`Vous êtes majeure vous avez ${age} ans`);
    }
    else{
        alert(`Erreur`)
    }