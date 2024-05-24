const textarea = document.querySelector(".area_Do_Texto");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensagem.value = textoEncriptado;
    textarea.value = "";
}

function encriptar(stringEncriptada){

    let chaves = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i< chaves.length; i++){
        if(stringEncriptada.includes(chaves[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(chaves[i][0],chaves[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textarea.value);
    mensagem.value = textoDesencriptado;
    textarea.value = "";
}

function desencriptar(stringDesencriptada){

    let chaves = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i< chaves.length; i++){
        if(stringDesencriptada.includes(chaves[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(chaves[i][1],chaves[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnCopiar() {
    const textoCopiado = document.getElementsByClassName(mensagem);
    textarea.value = mensagem.value;
}
