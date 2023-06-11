var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right="0px";
}

function closemenu(){
    sidemeu.style.right="-400px";
}

document.onclick = function(e){
    if(e.target.id !=='sidemeu' && e.target.id !=='sidemeu'){
        sidemeu.classList.remove('active');
    }
}