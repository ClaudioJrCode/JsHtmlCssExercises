 var vetor = []
 var res = document.getElementById('res')
 var valor = document.getElementById("txtn")
 var lista = document.getElementById("valores")

 //confere e nega a duplicidade de numeros no array
 function confDuplic(num){
    let flag = false
    var confere = 0

    for(i=0; i<vetor.length; i++)
    {
        confere = vetor[i]
        if (confere == num){
            flag = true
        }
    }
    return flag      
 }
 
function adicionar(){
    
    res.innerHTML = ``
    var n = Number(valor.value)
    var valido = false   
    lista.focus()
    valor.value= ``
    
    if (n < 1 || n > 100) 
    {
        alert('Valor incorreto')
    }
    else 
    {   
        valido = confDuplic(n)
        if (valido){
            alert('numero duplicado')
        }else{
        var temp = document.createElement('option')
        temp.text = `Valor ${n} adicionado`
        lista.appendChild(temp)
        vetor.push(n)
        }

    }
}

function finalizar(){
    if(vetor.length == 0){
        alert('lista vazia, insira um numero')
    }
    else{
        let somavetor = 0
        for(let i=0; i < vetor.length ;i++){
            somavetor += vetor[i]
        }
        let mediavetor = 0
        vetor.sort()
        res.innerHTML = `Ao todo, temos ${vetor.length} numeros cadastrados.<br>
        O maior valor cadastrado foi o ${vetor[(vetor.length)-1]} <br>
        A soma de todos os valores é igual a ${somavetor}<br>
        E a Media é igual a ${somavetor/vetor.length}`
    }

}
