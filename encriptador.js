/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos parainserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.

El resultado debe ser mostrado en la pantalla.

Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones. */

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    console.log (texto);
    //i es para que afecte tanto mayúsculas como minúsculas -- eE
    //g es para toda la linea u oración
    //m es para que afecte a múltiples lineas o párrafos
    var txtCifrado  = texto.replace(/e/igm,"enter");
    var txtCifrado  = txtCifrado.replace(/o/igm,"over");
    var txtCifrado  = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado  = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado  = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML =   txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){
    var texto   = document.getElementById("inputTexto").value.toLowerCase();
    //i es para que afecte tanto mayúsculas como minúsculas -- eE
    //g es para toda la linea u oración
    //m es para que afecte a múltiples lineas o párrafos
    var txtCifrado  = texto.replace(/enter/igm,"e");
    var txtCifrado  = txtCifrado.replace(/over/igm,"o");
    var txtCifrado  = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado  = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado  = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML =   txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function copiar(){
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("El contenido fue copiado");
}