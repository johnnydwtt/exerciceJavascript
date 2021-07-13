// Variables
var day = '1';
day=parseInt(day)

// instructions
day = prompt (`Met un chiffre entre 1 et 7`);
var dayA = ''

switch(day){
    case '1':
        dayA=('Lundi');
    break;

    case '2':
        dayA=('Mardi');
    break;

    case '3':
        dayA=('Mercredi');
    break;

    case '4':
        dayA=('Jeudi');
    break;

    case '5':
        dayA=('Vendredi');
    break;

    case '6':
        dayA=('Samedi');
    break;   

    case '7':
        dayA=('Dimanche');
    break;
    default:
        day=('Erreur')
};

alert(dayA);
