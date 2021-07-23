const zoomElement = document.querySelector("p");
var scrollPos = 0;
let zoom = 15;
const ZOOM_SPEED = 0.1;



document.addEventListener("scroll", function () {
    
    
    if ((document.body.getBoundingClientRect()).top > scrollPos)
    // getBoundingClientRect = la position dans le navigateur 
    // (y = TOP / x = LEFT / Bottom(haut bas)/right(droite gauche) = position de l'élement dans l'affichage /) 

        zoomElement.setAttribute('data-scroll-direction', 'UP');
        // comme scrollPos = 0 si je gagne en valeur je monte

    
    else
        zoomElement.setAttribute('data-scroll-direction', 'DOWN');
        // comme scrollPos = 0 si je baisse en valeur je descend

    scrollPos = (document.body.getBoundingClientRect()).top;


    if(zoomElement.dataset.scrollDirection == "UP"){
    // conditions    
        zoom += ZOOM_SPEED;
        // calcule
        zoomElement.style.fontSize = `${zoom}px`

        console.log("UP")
        // test console
    }else{
        zoom -= ZOOM_SPEED;
        zoomElement.style.fontSize = `${zoom}px`

        console.log("DOWN")
    }
});







// if (zoom += ZOOM_SPEED) {
//     zoomElement.style.fontSize = `${zoom}px`;

// } else{
//     zoom -= ZOOM_LESS;
//     zoomElement.style.fontSize = `${zoom}px`;

// }