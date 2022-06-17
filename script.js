let totaldecartas;
let vetorA = [];
let vetorB = [];
let vx;
let qtdclicks = 0;

correction ();
function correction () {
    totaldecartas = prompt("Com quantas cartas gostaria de jogar? OBS: apenas números pares (4 ~ 14)");
    if (totaldecartas % 2 !== 0 || totaldecartas < 4 || totaldecartas > 14) {
        alert("Eu disse APENAS números pares, entre 4 ou 14 cartas, escreve direito ai");
        correction ();
    } else {
        cardrandom ();
    }
}

function rotacionar(elemento) {
    contadordeclicks ();
    let a = elemento.querySelector(".front-face");
    a.classList.toggle("rodafrente");
    let b = elemento.querySelector(".back-face");
    b.classList.toggle("rodatras");
}

function contadordeclicks () {
    qtdclicks++;
}

function cardrandom () {
    const imagegifs = [
        "./img/bobrossparrot.gif",
        "./img/explodyparrot.gif",
        "./img/fiestaparrot.gif",
        "./img/metalparrot.gif",
        "./img/revertitparrot.gif",
        "./img/tripletsparrot.gif",
        "./img/unicornparrot.gif",
    ]
    
    let copiador = 0;
    while (copiador < totaldecartas/2) {
        index = parseInt(Math.random()* imagegifs.length);
        vx = imagegifs.splice(index,1);
        vetorA.push(vx[0]);
        vetorA.push(vx[0]);
        copiador++;
    }
    
    for (j = 0; j < totaldecartas; j++) {
        index = parseInt(Math.random()* vetorA.length);
        vx = vetorA.splice(index,1);
        vetorB.push(vx[0]);
    }
    distribuction ();
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
          <img src='${vetorB[contador]}'/>
        </div>
    </div>`)
    }
}