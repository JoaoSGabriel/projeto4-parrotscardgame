let totaldecartas;
totaldecartas = prompt("Com quantas cartas gostaria de jogar? OBS: apenas números pares (4 ~ 14)");
if (totaldecartas % 2 !== 0 || totaldecartas < 4 || totaldecartas > 14) {
    correction ();
} else {
    distribuction ();
}

function correction () {
    alert("Eu disse APENAS números pares, entre 4 ou 14 cartas, escreve direito ai");
    totaldecartas = prompt("Com quantas cartas gostaria de jogar? OBS: apenas números pares (4 ~ 14)");
    if (totaldecartas % 2 !== 0 || totaldecartas < 4 || totaldecartas > 14) {
        correction ();
    } else {
        distribuction ();
    }
}

function distribuction () {
    const elemento = document.querySelector(".cards")
    let contador;
    for (contador = 0; contador < totaldecartas; contador++) {
        elemento.innerHTML = elemento.innerHTML + (`<div class="card"><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png"></div>`)
    }
}