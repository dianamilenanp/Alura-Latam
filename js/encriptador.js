    function encriptar() {
        var texto = document.getElementById("txtEncriptador").value;
        var arrayPalabra = Array.from(texto.toLowerCase());
        var palabra = "";
        for (let i = 0; i < arrayPalabra.length; i++) {
            var nuevaPalabra = arrayPalabra[i];
            switch (nuevaPalabra) {
                case 'a':
                    nuevaPalabra = 'ai'
                    break;
                case 'e':
                    nuevaPalabra = 'enter'
                    break;
                case 'i':
                    nuevaPalabra = 'imes'
                    break;
                case 'o':
                    nuevaPalabra = 'ober'
                    break;
                case 'u':
                    nuevaPalabra = 'ufat'
                    break;
            }
            palabra += nuevaPalabra;
        }
        document.getElementById("txtDesencriptador").innerHTML = palabra;
        document.getElementById("btnCopiar").style.display = 'block';
        ocultar();
    }
    function desencriptar() {
        var cadDesencriptar = document.getElementById('txtDesencriptador').value;
        if (cadDesencriptar.includes("ufat")) {
            cadDesencriptar=cadDesencriptar.replaceAll('ufat', "u");
        }
        if (cadDesencriptar.includes("enter")) {
            cadDesencriptar= cadDesencriptar.replaceAll('enter', "e");
        }
        if (cadDesencriptar.includes("imes")) {
            cadDesencriptar=cadDesencriptar.replaceAll('imes', "i");
        }
        if (cadDesencriptar.includes("ai")) {
            cadDesencriptar=cadDesencriptar.replaceAll('ai', "a");
        }
        if (cadDesencriptar.includes("ober")) {
            cadDesencriptar=cadDesencriptar.replaceAll('ober', "o");
        }
        document.getElementById("txtDesencriptador").innerHTML = cadDesencriptar;
        ocultar();
    }
    function ocultar() {
        document.getElementById("l2").style.display = 'none';
        document.getElementById("sinResultado").style.display = 'none';
        document.getElementById("sinResultado1").style.display = 'none';
    }

    function copiar() {
        var contenido = document.getElementById('txtDesencriptador');
        contenido.select();
        document.execCommand('copy');
    }
    var btnEncrip = document.getElementById("btnEncriptador")
    btnEncrip.onclick = encriptar;
    var btnCopiar = document.getElementById("btnCopiar")
    btnCopiar.onclick = copiar;
    var btnDesencriptar = document.getElementById("btnDesencriptador")
    btnDesencriptar.onclick = desencriptar;
