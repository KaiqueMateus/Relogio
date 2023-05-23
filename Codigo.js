const agora = new Date()
var hora    = agora.getHours()

const day   = new Date()
var dia     = day.getDate()

const dayS  = new Date()
var diaS    = dayS.getDay()

const month = new Date()
var mes     = month.getMonth() + 1

const year  = new Date()
var ano     = year.getFullYear()

let nome    = 'Kaique'

/*Começo do Programa*/

console.log('----Início da Aplicação!----')
console.log(diaS)
switch(diaS) {
    case 0 : 
            console.log('Hoje é, Domingo')
    break
    case 1 : 
            console.log('Hoje é, Segunda')
    break
    case 2 : 
            console.log('Hoje é, Terça')
    break
    case 3 : 
            console.log('Hoje é, Quarta')
    break
    case 4 : 
            console.log('Hoje é, Quinta')
    break
    case 5 : 
            console.log('Hoje é, Sexta')
    break
    case 6 : 
            console.log('Hoje é, Sábado')
    break
    default :
            console.log('[ERRO] Dia inválido!')
}

console.log(`Dia ${dia},`)
console.log(`do mês ${mes},`)
console.log(`do ano ${ano}.`)
console.log(`E agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log(`Bom Dia, ${nome}!`)
}
    else if (hora <= 18) {
            console.log(`Boa Tarde, ${nome}!`)
    }
        else {
             console.log(`Boa Noite, ${nome}!`)
        }

console.log('----Fim do Programa!----')
