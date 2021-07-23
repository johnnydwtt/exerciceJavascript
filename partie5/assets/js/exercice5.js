let text = document.querySelector('p');
let pink = document.getElementById('pink');
let blue = document.getElementById('blue');
let purple = document.getElementById('purple');
let bold = document.getElementById('bold');
let italic = document.getElementById('italic');

pink.addEventListener( 'click' , function () {
    text.style.color= 'pink';
});
blue.addEventListener( 'click' , function () {
    text.style.color= 'blue';
});
purple.addEventListener( 'click' , function () {
    text.style.color= 'purple';
});
bold.addEventListener( 'click' , function () {
    text.style.fontWeight= 'bold';
});
italic.addEventListener( 'click' , function () {
    text.style.fontStyle= 'italic';
});
