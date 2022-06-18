let totaldecartas;
let vetorA = [];
let vetorB = [];
let cartasviradas = [];
let cartascertas = [];
let vx;
let qtdclicks = 0;
let tempocorrido = 0;

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

function timer() {
    tempocorrido ++;
    let alteratempo = document.querySelector(".tempocorrido");
    alteratempo.innerHTML = `${tempocorrido}`;
}

setInterval(timer, 1000);

function contadordeclicks () {
    qtdclicks++;
}

function cardrandom () {
    const imagegifs = [
        "bobross",
        "explody",
        "fiesta",
        "metal",
        "revertit",
        "triplets",
        "unicorn"
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
    for (let contador = 0; contador < totaldecartas; contador++) {
        elemento.innerHTML = elemento.innerHTML + (`
    <div onclick="rotacionar(this)" class="card">
        <div class="front-face face">
            <div class="id identify">${vetorB[contador]}</div>
            <img src="img/front.png" />
        </div>
        <div class="back-face face">
            <div class="id identify">${vetorB[contador]}</div>
            <img src='./img/${vetorB[contador]}parrot.gif'/>
        </div>
    </div>`)
    }
}

function rotacionar(elemento) {
    let a = elemento.querySelector(".front-face");
    a.classList.add("rodafrente");
    let b = elemento.querySelector(".back-face");
    b.classList.add("rodatras");
    contadordeclicks ();
    cartasviradas = document.querySelectorAll(".rodatras .identify");
    if (cartasviradas.length == 2) {
        if (cartasviradas[0].innerHTML === cartasviradas[1].innerHTML) {
            rigthcard ();
        } else {
            setTimeout(wrongcard, 1000);
        }
    }
}

function rigthcard() {
    let a = document.querySelector(".rodafrente .identify");
    a.classList.remove('identify');
    let b = document.querySelector(".rodatras .identify");
    b.classList.remove('identify');
    rigthcard2 ();
}

function rigthcard2(){
    let a = document.querySelector(".rodafrente .identify");
    a.classList.remove('identify');
    let b = document.querySelector(".rodatras .identify");
    b.classList.remove('identify');
    cartasviradas = [];
    cartascertas = document.querySelectorAll(".rodafrente")
    ongaming ();
}

function wrongcard() {
    let a = document.querySelector(".rodafrente .identify");
    a = a.parentElement;
    a.classList.remove('rodafrente');
    let b = document.querySelector(".rodatras .identify");
    b = b.parentElement;
    b.classList.remove('rodatras');
    wrongcard2();
}

function wrongcard2() {
    let a = document.querySelector(".rodafrente .identify");
    a = a.parentElement;
    a.classList.remove('rodafrente');
    let b = document.querySelector(".rodatras .identify");
    b = b.parentElement;
    b.classList.remove('rodatras');
}

function ganhou () {
    alert(`Você ganhou em ${qtdclicks} jogadas, e demorou ${tempocorrido} segundos para terminar!`)
    recomecar ()
}

function recomecar (){
    let restart = prompt("Gostaria de jogar novamente?")
    if (restart === 'sim') {
        const elemento = document.querySelector(".cards");
        elemento.innerHTML = '';
        qtdclicks = 0;
        tempocorrido = 0;
        vetorA = [];
        vetorB = [];
        cartasviradas = [];
        cartascertas = [];
        correction ();
    } else if (restart === 'não'){
        alert("Então fecha a aba aí, já acabou o jogo (╬▔皿▔)╯")
    } else {
        alert("Responde apenas sim ou não, com todas as letras minúsculas e acentuação correta.")
        recomecar ();
    }
}

function ongaming () {
    if (cartascertas.length == totaldecartas){
       setTimeout(ganhou, 1000);
    }
}