let n = document.getElementById('numero')
let r = document.getElementById('res')
let v = []

function adiciona() {
    if (n.value.length == 0) {
        window.alert("Adicione um número!")
    } else {
        v.push(Number(n.value))
        n.value = ''      
        n.focus() 
    }
}

function verifica() {
    let maior = 0
    for (i = 0; i < v.length; i++) {
        if (v[i] > maior) {
            maior = v[i]
        }
    }
    r.innerHTML = ``
    r.innerHTML += `O maior número digitado foi: ${maior}.`
}