function carregar(){

    var imsg = window.document.getElementById("imsg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    imsg.innerHTML = `Agora são ${hora}horas`
    if(hora>= 0 && hora < 12){
        img.src ='Manhã.png'
        document.body.style.background = "#f4dab9"
    }else if(hora >= 12 && hora <= 18){
        img.src ='FimdeTarde.png'
        
    }else 
        img.src = 'Noite.png'
        document.body.style.background = "#f4dab9"
}


