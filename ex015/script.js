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
        var txtidade = ''
        var txtgenero =''
            if(idade < 10){
                //Crianca
                txtidade = 'crianca'
            } else if( idade < 21){
                //jovem
                txtidade = 'jovem'
            } else if( idade < 50){
                //Adulto
                txtidade = 'adulto'
            }else{
                //idoso
                txtidade = 'idoso'
            }
        }
        if (fsex[0].checked){
            genero = "Masculino"
            txtgenero ='-m.png'
        }
        else{
            genero = "Feminino"
            txtgenero ='-f.png'
        }

        img.setAttribute('src', txtidade + txtgenero)
        res.style.textAlign = "center"
        
        res.innerHTML = `<br> Detectamos genero ${genero} com idade de ${idade} anos<br>`
        res.appendChild(img)
        
        
    }
