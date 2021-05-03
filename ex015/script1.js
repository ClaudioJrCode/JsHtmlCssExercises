function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.getElementById('res')
    if(fano.value == 0 || fano.value >= ano){
        alert("[ERRO] Ano Inválido, tente novamente")
    }
    else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calcula:  ${idade}`
        var genero = ''
        var img = document.createElement('img')
        
        if (fsex[0].checked){
            genero = "Masculino"
            
            if(idade > 0 && idade < 10){
                //Crianca
                img.setAttribute("src", "crianca-m.png")
            } else if( idade < 21){
                //jovem
                img.setAttribute("src", "jovem-m.png")
            } else if( idade < 50){
                //Adulto
                img.setAttribute("src", "adulto-m.png")
            }else{
                //idoso
                img.setAttribute("src", "idoso-m.png")
            }
        }
        else{
            genero = "Feminino"

            if(idade > 0 && idade < 10){
                //Crianca
                img.setAttribute("src", "crianca-f.png")
            } else if( idade < 21){
                img.setAttribute("src", "jovem-f.png")
                //jovem
            } else if( idade < 50){
                //Adulto
                img.setAttribute('src', 'adulto-f.png')
            }else{
                img.setAttribute('src', 'idoso-f.png')
                //idoso
            }
        }
        res.style.textAlign = "center"
        
        res.innerHTML = `<br> Detectamos genero ${genero} com idade de ${idade} anos<br>`
        res.appendChild(img)
        
        
    }
}