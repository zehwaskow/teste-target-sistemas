/*Função que faz o cálculo do percentual de representatividade e exibe os dados 
na tela para o usuário.*/
function calcularPorcentagem () {
    
    var valores = []
    var faturamento = [
        {
            "estado": "SP",
            "valor": 67836.43
        },
        { 
            "estado": "RJ",
            "valor": 36678.66
        },
        {
            "estado": "MG",
            "valor": 29229.88
        },
        {
            "estado": "ES",
            "valor": 27165.48
        },
        {
            "estado": "Outros",
            "valor": 19849.53
        },

    ]

    //Função que calcula o percentual
    function porcentagem(a, b) {
        return a/b * 100
    }    

    /*Este trecho do código é feito um loop no json com os valores montado um novo array 
    somente com os valores de faturamento para realizar o cálculo do total*/
    for (let index = 0; index < faturamento.length; index++) {
        const fat = faturamento[index]
        valores.push(fat.valor)
    }

     /*Aqui é feita a soma de todos os valores do array para sabermos 
     o valor total de faturamento*/
     let total = valores.reduce(function(acumulador, valorAtual) {
        return acumulador + valorAtual
    }, 0)
    /*Aqui é feita a montagem da resposta das porcentagens de cada estado e exibidas 
    na tela de forma dinâmica*/
    for (let index = 0; index < faturamento.length; index++) {
        const faturamentoPorc = faturamento[index]
        let item = document.createElement('option')
        let txt = document.getElementById('txt')
        let percentual = porcentagem(faturamentoPorc.valor,total)
        let res = document.getElementById('res')
       
        txt.innerText = 'Seguem os percentuais de faturamento por estado.'
        item.text = `O percentual de representatividade de faturamento do estado ${faturamentoPorc.estado} é: ${percentual.toFixed(4)}%.`
        res.appendChild(item)
    }
    window.location.reload();
}

