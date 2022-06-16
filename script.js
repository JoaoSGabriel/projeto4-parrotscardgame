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
        elemento.innerHTML = elemento.innerHTML + (`
    <div onclick="rotacionar(this)" class="card">
        <div class="front-face face">
          <img src="img/front.png" />
        </div>
        <div class="back-face face">
          <img src="img/fiestaparrot.gif" />
        </div>
    </div>`)
    }
}

function rotacionar(elemento) {
    let a = elemento.querySelector(".front-face");
    a.classList.toggle("rodafrente");
    let b = elemento.querySelector(".back-face");
    b.classList.toggle("rodatras");
    b.classList.toogle("back-face");
  }