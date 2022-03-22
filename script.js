function tabuada() {
    let num = document.getElementById ('num')
    let tabuada = document.getElementById ('seltab')
    if (num.value.length == 0) {
        window.alert ('[ERRO] Por favor, insira um valor')
    } else {
        let n = Number(num.value)
        let c = 1
        tabuada.innerHTML = ''
        while (c <= 10) {
        let item = document.createElement('option')
        item.text = `${n} * ${c} = ${n*c}`
        tabuada.appendChild(item)
        c++
        }
    }
} 

while (c+1) {
        
}