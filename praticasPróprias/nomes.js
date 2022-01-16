let res = document.getElementById('res')
let nome = document.getElementById('nome')
let v = []

function adicionar() {
    if (nome.value == ``) {
        window.alert("Digite um nome!")
    } else {
        res.innerHTML = ``
        v.push(nome.value)
        nome.value = ``
        nome.focus()
    }
}

function listar() {
    for (i = v.length-1; i >= 0; i--) {
        res.innerHTML += `${v[i]} <br>`
    }
}