let imgEffect = document.getElementById('img');

imgEffect.onclick = clickImg = () => {
    if(clickImg==0){
        imgEffect.src='assets/img/fond2.jpg';
        clickImg++;
    }
    else{
        imgEffect.src='assets/img/img.jpg'
        clickImg=0;
    }

}

imgEffect.addEventListener("mouseover", function() {
    // on met l'accent sur la cible de mouseover
    imgEffect.style.height = "350px";

});

imgEffect.addEventListener("mouseout", function() {
    imgEffect.style.height = "";
});

