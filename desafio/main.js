const listaDeTeclas = document.querySelectorAll('input[type=button]');

for(let i = 0; i < listaDeTeclas.length; i++){
    const tecla = listaDeTeclas[i];

    tecla.onkeydown = function(e) {
        if(e.key === 'Enter' || e.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa')
    }
}

