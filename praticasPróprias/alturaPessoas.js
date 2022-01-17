let altura = document.getElementById('altura')
let sexo = document.getElementsByName('sexo')
let res = document.getElementById('res')
let v = []
let contFem = 0
let contMasc = 0
let sexoMaior
let maior = 0

function adiciona() {
    if (altura.value.length == 0 || altura.value < 0) {
        window.alert("Insira uma altura válida")
    } else if (!sexo[0].checked && !sexo[1].checked) {
        window.alert("Selecione o sexo")
    } else {
        v.push(Number(altura.value))
        for (i = 0; i < v.length; i++) {
            if (v[i] > maior) {
                maior = v[i]
                if (sexo[0].checked) {
                    sexoMaior = 'mulher'
                } else if (sexo[1].checked) {
                    sexoMaior = 'homem'
                }
            }
        altura.value = ``
        altura.focus()
        }

        if (sexo[0].checked) {
            contFem++
        } else if (sexo[1].checked) {
            contMasc++
        }

    }   
}

function verifica() {
    res.innerHTML = `Número de mulheres: ${contFem} <br> Número de homens: ${contMasc} <br>`
    res.innerHTML += `A pessoa mais alta é um(a) ${sexoMaior}, com ${maior}m. `
}