var numA = Number
let message = ''

numA = parseInt(prompt('Ecris ton chiffre !'));

if (numA%2 == 0){
    message:`nombre pair`;
}
else{
    message:`nombre impair`;
}
alert(message);