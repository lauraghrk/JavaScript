let idade = document.getElementById('idade')
let res = document.getElementById('res')
let v = []

function adiciona() {
    if (idade.value.length == 0 || idade.value < 0) {
        window.alert("Digite uma idade válida!")
    } else {
        v.push(Number(idade.value))
    }
    idade.value = ''
    idade.focus()
}

function verifica() {
    let menores = 0
    let maiores = 0
    for (i = 0; i < v.length; i++) {
        if (v[i] < 18) {
            menores++
        } else {
            maiores++
        }
    }
    res.innerHTML = ``
    res.innerHTML += `Maiores de idade: ${maiores} pessoas. <br>`
    res.innerHTML += `Menores de idade: ${menores} pessoas.`
}