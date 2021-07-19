var firstNumber = parseInt(Math.random()*10);
var secondNumber = parseInt(Math.random()*10);


while (secondNumber<250){
    console.log(firstNumber+' '+secondNumber);

    document.write(secondNumber + '</br>');
    secondNumber= firstNumber*secondNumber;

}
    