function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
            elemento.play();
    }
    else{
        alert("Elemento não é um audio ou não existe!")
    }
    //console.log(elemento.localName)
}

const listaDeTeclas = document.querySelectorAll('.tecla');
for (let cont = 0; cont < listaDeTeclas.length; cont++) {
    const tecla = listaDeTeclas[cont];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    tecla.onkeydown = function (evt) {
        /* console.log(evt.key) */
        if (evt.key === "Enter" || evt.code === "Space") {
            tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
