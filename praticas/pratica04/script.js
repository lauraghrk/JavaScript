function tabuada(){
    var num = document.getElementById('numero')
    var tab = document.getElementById('seltab')

    if (num.value.lenght == 0) {
        window.alert("Insira um número!")
    } else {
        var n = Number(num.value)
        var x = 1
        tab.innerHTML = ``
        while (x<=10) {
            var item = document.createElement('option')
            item.text = `${n} x ${x} = ${n*x}`
            item.value = `tab${x}`
            tab.appendChild(item)
            x++
        }
    }
}