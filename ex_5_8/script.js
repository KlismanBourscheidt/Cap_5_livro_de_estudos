const prompt = require("prompt-sync")()
console.log('Programa Anos de Copa do Mundo. Digite 0 para Sair')
console.log('----------------------------------------------------------------------------------------------')

do{
    const ano = Number(prompt('Ano: '))
    if(ano == 0){
        break // sai da repeticao
    }else if(ano == 1942 ||ano == 1946){
        console.log(`Nao houve copa no ano ${ano}(Guerra mundial)`)
    }else if(ano >= 1930 && ano % 4 ==2){
        console.log(`Sim! ${ano} é ano de copa do mundo`)
    }else{
        console.log(`Nao... ${ano} nao é ano de copa do mundo`)
    }
}while(true){
    console.log('Bye Bye')
}