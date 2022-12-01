

function openTexto(evt) {
    var display = document.getElementById(evt).style.display;
    if(display == "none")
        document.getElementById(evt).style.display = 'block';
    else
        document.getElementById(evt).style.display = 'none';
}