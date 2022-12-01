const button = document.querySelector("button")
const texto = document.getElementById("container")


button.addEventListener('click', openTexto);

function openTexto(evt){
    if(evt){ 
        texto.style.display = "block"
    }else{
        texto.style.display = "none";
    }
}
console.log(texto)