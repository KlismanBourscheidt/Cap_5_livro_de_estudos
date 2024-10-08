const prompt = require("prompt-sync")()

let num // declara avariavel 'num' com let, pois ela pode ser alterada e será acessada fora do bloco do...while

do{
    num = Number(prompt('Digite um numero :')) // lendo a entrada de dados
    if(num == 0 || isNaN(num)){                // se num=0 ou é invalido
        alert('Digite um numero válido...')
    }
}while(num == 0 || isNaN(num))             //... enquanto num=0 ou inválido
    let pares = `Pares entre 1 e ${num} `       // string que irá conter a respota
    for(let i = 2; i <= num; i = i + 2){
        pares = pares + i + ','
    }
console.log(pares)  
