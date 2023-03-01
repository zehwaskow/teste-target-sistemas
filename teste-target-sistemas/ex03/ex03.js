function verificarFaturamento() {
    var valores = []
    var valoresMedia = []
    var media = 0

    //Neste trecho é feita a leitura do arquivo Json para montar a analise
    fetch('dados.json')
        .then(response => response.json())
        .then(json => {
            var dados = json

            /*Este trecho do código percorre o json e cria um array com
            somente os valores dos dias em que houve faturamento ignorando
            os dias zerados*/
            
            for (let index = 0; index < dados.length; index++) {
                const elemento = dados[index];
                if (elemento.valor > 0) {
                    valores.push(elemento.valor);
                }    
            }
            
            //Aqui são calculados os valores mínimo e máximo de faturamento dentro do mês
            let max = Math.max(...valores);
            let min = Math.min(...valores);

            //Aqui é feita a soma de todos os valores do array para montar a média
            let total = valores.reduce(function(acumulador, valorAtual) {
                return acumulador + valorAtual;
            }, 0)
            media = total / valores.length

            /*Aqui é feito o agrupamento em um array de todos os dias em que o 
            faturamento esteve acima da média mensal*/
            for (let index = 0; index < valores.length; index++) {
                const elemento = valores[index];
                if (media < valores[index]) {
                    valoresMedia.push(elemento)
                }
            }

            //Este trecho do código exibe os valores solicitados da analise financeira na tela
            let txt = document.getElementById('txt')
            let txtMin = document.getElementById('txtMin')
            let txtMax = document.getElementById('txtMax')
            let txtMedia = document.getElementById('txtMedia')
            let txtDias = document.getElementById('txtDias')

            txt.innerText = 'Seguem os solicitados da sua analise de faturamento mensal'
            txtMin.innerText = `O menor valor de faturamento ocorrido no mês foi: ${min}`
            txtMax.innerText = `O maior valor de faturamento ocorrido no mês foi: ${max}`
            txtMedia.innerText = `O valor da média mensal é: ${media.toFixed(4)}`
            txtDias.innerText = `Número de dias que o valor de faturamento diário foi superior à média mensal: ${valoresMedia.length}`
    })
}