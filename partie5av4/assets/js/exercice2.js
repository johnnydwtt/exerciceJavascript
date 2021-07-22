 // Exercice 2

// Cet algorhytme indique si le mot de passe correspond à sa confirmation


// On affecte à la variable pass1 l'élément HTML qui contient l'id passone
let pass1 = document.getElementById('passone');
let pass2 = document.getElementById('passtwo');
let button = document.getElementById('button1');

button.onclick= () => {  
        pass1.classList.remove=('green','red')
        pass2.classList.remove=('green','red')
// On ajoute .value car on compare la valeur du champ HTML
    if(pass1.value===pass2.value){
        pass1.classList.add=('green')
        pass2.classList.add=('green')     
    }else{
        pass1.classList.add=('red')
        pass2.classList.add=('red')    
    }
}