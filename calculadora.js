const resultado = document.querySelector('.result');
const confirmar = document.querySelector('.igual');

/* Essa função vai receber o parametro do valor que o usuario estar clicando. */

function insert(valor){
    resultado.innerHTML += valor; /* Será inserido o valor clicado pelo usuario na div com a classe result */
}

/* Essa função vai apagar o valor inserido na calculadora */
function clean(){
    resultado.innerHTML = '';
}

function confirma(){
    if(resultado.textContent != 'Erro')
    document.getElementById("resultado").innerHTML = eval(resultado.innerHTML) /* função eval faz os calculos */
}

