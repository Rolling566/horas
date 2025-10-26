var img = document.getElementById('imagem')
var msg = document.getElementById('mensagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas. <br>`

function carregar() {       
    if (hora < 12) {
        msg.innerHTML += 'Bom dia Alegria!'
        img.src = 'manha250px.png'
        document.body.style.background = 'linear-gradient(125deg, #D0D0CE, #EDE1D1, #FCBA5C, #707294, #324126)'
    }
    else if (hora <= 18) {
        msg.innerHTML += 'Boa tarde meu bem!'
        img.src = 'tarde250px.png'
        document.body.style.background = 'linear-gradient(125deg, #B1F2EF, #D4F8EA, #786F52, #A08B6E, #4B6A85)'

    }
    else {
        msg.innerHTML += 'Boa Noite meu doce!'
        img.src = 'noite250px.png'
        document.body.style.background = 'linear-gradient(125deg, #5E4771, #89679C, #614B75, #734153, #2A1D1F)'
    }
}