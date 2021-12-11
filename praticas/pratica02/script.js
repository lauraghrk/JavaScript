function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO - Digite um ano válido!')
    } else {
        var gen = document.getElementsByName('txtgen')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(gen[0].checked) {
            genero = "Homem"
            if(idade>=0 && idade<14){
                img.setAttribute('src', 'criançam.png')
            } else if(idade<30) {
                img.setAttribute('src', 'jovemm.png')
            } else if(idade<65) {
                img.setAttribute('src', 'adultom.png')
            } else {
                img.setAttribute('src', 'idosom.png')
            }
        } else if(gen[1].checked) {
            genero = 'Mulher'
            if(idade>=0 && idade<14){
                img.setAttribute('src', 'criançaf.png')
            } else if(idade<30) {
                img.setAttribute('src', 'jovemf.png')
            } else if(idade<65) {
                img.setAttribute('src', 'adultof.png')
            } else {
                img.setAttribute('src', 'idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} de ${idade} anos!`
        res.appendChild(img)
    }
}