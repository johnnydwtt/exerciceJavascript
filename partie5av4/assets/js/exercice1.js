// Exercice 1

// Cet algorhytme indique si le mot de passe correspond à sa confirmation


// On affecte à la variable pass1 l'élément HTML qui contient l'id passone
let pass1 = document.getElementById('passone');
let pass2 = document.getElementById('passtwo');
let button = document.getElementById('button1');
button.onclick= () => {
// On ajoute .value car on compare la valeur du champ HTML
    if(pass1.value===pass2.value){
        pass1.style.border = '1px solid green';
        pass1.style.backgroundColor = 'green';

        pass2.style.border = '1px solid green'; 
        pass2.style.backgroundColor = 'green';          
    }else{
        pass1.style.border = '1px solid red';
        pass1.style.backgroundColor = 'red';  

        pass2.style.border = '1px solid red';  
        pass2.style.backgroundColor = 'red';    
    }
}
