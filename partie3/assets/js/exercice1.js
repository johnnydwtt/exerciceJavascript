
let years = Number

for (years=2020; years<=2030; years++){
    

    if ((years%4==0) && ((years%100!=0) || (years%400==0))){
        document.write(`<div class="red"> Année ${years} </div>`);
    }

    else {
        (document.write(`<div> Année ${years} </div>`)); 
    }
    }
    
