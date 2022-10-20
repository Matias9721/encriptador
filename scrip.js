function encriptar (){
    var texto_normal = document.getElementById("input-texto").value.toLowerCase();

    var texto_encriptado = texto_normal.replace(/e/img, "enter");
    var texto_encriptado = texto_encriptado.replace(/o/img,  "ober");
    var texto_encriptado = texto_encriptado.replace(/i/img, "imes");
    var texto_encriptado = texto_encriptado.replace(/a/img, "ai");
    var texto_encriptado = texto_encriptado.replace(/u/img, "ufat");

    document.getElementById("output-texto").innerHTML = texto_encriptado
};

function desencriptar (){
    var texto_normal = document.getElementById("input-texto").value.toLowerCase();

    var texto_encriptado = texto_normal.replace(/enter/img, "e");
    var texto_encriptado = texto_encriptado.replace(/ober/img,  "o");
    var texto_encriptado = texto_encriptado.replace(/imes/img, "i");
    var texto_encriptado = texto_encriptado.replace(/ai/img, "a");
    var texto_encriptado = texto_encriptado.replace(/ufat/img, "u");

    document.getElementById("output-texto").innerHTML = texto_encriptado
};

function copiar (){

    var textoAcopiar = document.querySelector("#output-texto");
    textoAcopiar.select();
    document.execCommand("copy");
};
