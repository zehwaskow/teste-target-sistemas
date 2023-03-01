function verificarFibonacci () {
    var vet = []
    var num = document.getElementById('num')

    //Esta função gera a sequência de Fibonacci
    function gerarFibonacci(n) {
        if (n < 2) {
            return n;
        } else {
            return gerarFibonacci(n - 1) + gerarFibonacci(n - 2);
            
        }
    }

    //Verifica se o número está contido dentro de um vetor
    function verificarNumInVet (n, l) {
        if (l.indexOf(Number(n)) != -1) {
            return true
        } else {
            return false
        }
    }

     /*Este ponto do código imprime os 30 primeiros números 
     da sequência de Fibonacci na tela*/
     for (let i = 0; i < 30; i++) {
        let res = document.getElementById('res')
        let item = document.createElement('option')
        let txt = document.getElementById('txt')
        
        //Estetrecho de código imprime os números da sequência na tela 
        txt.innerText = 'Seguem os primeiros 30 números da sequência de Fibonacci'
        item.innerHTML += `Número:   ${gerarFibonacci(i)}`
        res.appendChild(item)
        vet.push(gerarFibonacci(i))
        }

        /*Neste ponto do código verificamos se o número existe 
        dentro dos primeiros 30 números da sequência de Fibonacci
        e dispara um alerta na tela para o usuário caso positivo ou negativo*/
        if(verificarNumInVet(num.value, vet) === true){
            alert(`O número ${num.value} existe na sequência de Fibonacci`)
        } else {
            alert(`O número ${num.value} não existe na sequência de Fibonacci`)
        }
    }