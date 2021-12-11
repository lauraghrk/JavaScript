let n = document.getElementById('numero')
let l = document.getElementById('lista')
let v = []

function quadrado() {
    if (n.value.length == 0) {  
        window.alert("Adicione um número")
    } else {
        v.push(Number(n.value))
        for (let i in v) {
            q = v[i]**2
        }           
        let item = document.createElement('option')
        item.text = `O quadrado de ${n.value} é: ${q}`
        l.appendChild(item) 
    }
    n.value = ''      
    n.focus()        
}

function limpa() {
    for (i=l.options.length-1; i>=0; i--) {  
        l.options[i] = null                  
    }   
    v = []                                
    r.innerHTML = ``                         
}