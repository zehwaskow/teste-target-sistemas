/*Função que inverte a palavra e ecreve o feedback na tela*/
function inverter () {
    var palavra = document.getElementById('txt').value
    let novaPalavra = ''
    for (var i = palavra.length - 1; i >= 0; i--) {
        novaPalavra += palavra[i]
        let res = document.getElementById('res')
        let resNova = document.getElementById('resNova')

        res.innerText = `Palavra digitada: ${palavra}`
        resNova.innerText = `Palavra invertida: ${novaPalavra}`
    }
}