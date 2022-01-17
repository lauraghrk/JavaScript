let res = document.getElementById('res')

function separar() {
    let data = new Date(document.form.data.value)
    let nomeMes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")

    res.innerHTML = `Dia: ${data.getDate() + 1}<br> Mês: ${nomeMes[data.getMonth()]}<br> Ano: ${data.getFullYear()}`
}