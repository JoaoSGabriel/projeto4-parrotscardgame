let totaldecartas;

totaldecartas = prompt("Com quantas cartas gostaria de jogar? OBS: apenas números pares (4 ~ 14)")
while (totaldecartas % 2 !== 0 || totaldecartas < 4 || totaldecartas > 14) {
    alert("Eu disse APENAS números pares, entre 4 ou 14 cartas, escreve direito ai")
    totaldecartas = prompt("Com quantas cartas gostaria de jogar? OBS: apenas números pares (4 ~ 14)")
    }