const prompt = require("prompt-sync")()
let numero = Number(prompt('Digite o numero para simular os decrescente '))
let resposta = ""

for(let i = numero; i > 0 ; i--){
    if(i == 1){
        resposta = resposta + i + "."
    }else{
        resposta = resposta + i + ","
    }
}

console.log(resposta)
