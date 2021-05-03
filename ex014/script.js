function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos <br> <br>`

if( hora >= 5 && hora < 12 ){
    msg.innerHTML += `BOM DIA`
    img.src = "manha.png"
    document.body.style.background = "#b7978a"
}
else if (hora >= 12 && hora < 18){
    msg.innerHTML += `BOA TARDE`
    img.src = "tarde.png"
    document.body.style.backgroung = "#8bbcc3"
}
else{
    msg.innerHTML += `BOA NOITE`
    img.src = "noite.png"
    document.body.style.background = "#004665"
}
}