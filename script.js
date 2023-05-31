function carregar() {
    const agora = new Date()
    let hora    = agora.getHours()

    const day   = new Date()
    let dia    = day.getDate()

    const dayS  = new Date()
    let diaS    = dayS.getDay()

    let fundo     = window.document.querySelector('body')
    let resimg    = window.document.querySelector('div#foto')
    let res       = window.document.querySelector('div#msg')
    
    res.innerHTML = `<p>Agora são <strong>${hora}h</strong></p>`
    switch(diaS) {
        case 0 : 
            res.innerHTML += '<p>Hoje é, Domingo!</p>'
        break
        case 1 : 
            res.innerHTML += '<p>Hoje é, Segunda!</p>'
        break
        case 2 : 
            res.innerHTML += '<p>Hoje é, Terça!</p>'
        break
        case 3 : 
            res.innerHTML += '<p>Hoje é, Quarta!</p>'
        break
        case 4 : 
            res.innerHTML += '<p>Hoje é, Quinta!</p>'
        break
        case 5 : 
            res.innerHTML += '<p>Hoje é, Sexta!</p>'
        break
        case 6 : 
            res.innerHTML += '<p>Hoje é, Sábado</p>'
        break
        default :
            res.innerHTML += '[ERRO] Dia inválido!'
    }
    if (hora <= 12) {
        resimg.innerHTML += `<img src="https://blog.malupires.com.br/wp-content/uploads/2021/03/bom-dia-com-carinho-1250x625.jpg">`
        fundo.style.background = 'yellow' 
    }
        else if (hora >= 13) {
            resimg.innerHTML += `<img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2015/09/bom-dia1.jpg?fit=2560%2C1920&ssl=1">`
            fundo.style.background = 'orange' 
         }
            else {
                resimg.innerHTML += `<img src="https://unsplash.com/pt-br/fotografias/LluELtL5mK4"`
                fundo.style.background = 'black' 
            }
}
