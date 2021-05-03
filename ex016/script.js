
function Calcular(){
    var inicio = Number(document.getElementById("inicio").value)
    var fim = Number(document.getElementById("fim").value)
    var passo = Number(document.getElementById("passo").value)
    var res = document.getElementById("res")
    
    if  (inicio == fim){
        alert(`Sem contagens`)
    }
    else if(passo <= 0){
        alert('PASSO INVALIDO. Escolha um maior que Zero ')
    }
    else{
    res.innerHTML = ``
    if (inicio <fim){
        for(i = inicio; i <= fim; i+=passo){
            res.innerHTML += i + `&#128073`
            //inicio += passo
        }
    }
    else{
        for(i = inicio; i >= fim; i-=passo){
            res.innerHTML += i + `&#128073`
            //inicio -= passo
    }

    }
    res.innerHTML += `&#127988`
}
    
    




}
/*Bandeira 127988*/
/*mao  128073*/