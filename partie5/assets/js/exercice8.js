var Clone = document.getElementById('formClone')
var ClonePlus = document.getElementById('clonePlus')

Clone.onclick = () => {
    console.log('ClonePlus',ClonePlus);
    console.log('Clone',Clone);
    document.innerHtml+=(Clone)
}