let res = document.getElementById('res')
let num = document.getElementById('numero')
let val = document.getElementById('valor')
let vetor = []

function isNumero(n) {
    if(Number(n)>=1 && Number(n)<=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, v) {
    if(v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adiciona() {
    if(isNumero(num.value) && !inLista(num.value, vetor)) {
        vetor.push(Number(num.value))                  //adiciona número no vetor
        let item = document.createElement('option')    
        item.text = `Número ${num.value} adicionado.`
        val.appendChild(item)                          //adiciona o número na lista
        res.innerHTML = ''                      //limpa o resultado ao add novo valor
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''        //apaga o número após adicionar
    num.focus()           //volta o cursor para o campo
}

function analisa() {
    if(vetor.length==0) {
        window.alert('Adicione pelo menos um valor.')
    } else {
        let tot = vetor.length
        let maior = vetor[0]
        let menor = vetor[0]
        let soma = 0
        let media = 0

        for(let pos in vetor) {
            soma += vetor[pos]
            media = soma/tot
            if(vetor[pos]>maior) 
                maior = vetor[pos]
            if(vetor[pos]<menor) 
                menor = vetor[pos]
        }

        res.innerHTML = ''
        res.innerHTML += `<p>Total de ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor é ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
} 
