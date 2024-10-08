console.log('Digite 0 para sair')
const prompt = require('prompt-sync')()

do{
    const num = Number(prompt('Digite um numero: '))
    if(num == 0 || isNaN(num)){
        const sair = prompt('Confirma a saida? [s] ou [n] ')
        if(sair == 's'){
            break // sai da repecicao
        }else{
            continue // volta aao inicio do laco
        }
    }

    if(num % 2 == 0){
        console.log(`O dobro de ${num} é : ${num*2}`)
    }else{
        console.log(`O triplo de ${num} é : ${num*3}`)
    }
}while(true)
    console.log('Bye, Bye...')