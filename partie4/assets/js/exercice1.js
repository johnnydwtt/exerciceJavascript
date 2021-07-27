let btn = document.getElementById('sum')
var show = document.getElementById('showResult')

btn.addEventListener('click', function(){
    show.innerHTML=''
    let firstNumber = document.getElementById('nbr1').value 
    let secondNumber = document.getElementById('nbr2').value
    let calc = result(firstNumber,secondNumber)
    show.append(calc)
});

function result(firstNumber,secondNumber) {
    return firstNumber * secondNumber;

  };