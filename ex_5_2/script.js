//Linkando js com html(fazendo uma referencia)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//criando um ouvinte para o evento submit
frm.addEventListener("submit", (e)=>{

    e.preventDefault() //evita envio do form

    const numero = Number(frm.inNumber.value) // coleta o valor do nuemero informado no form
    let resposta = `Entre ${numero} e 1: ` //string para montar resposta

    for(let i = numero; i > 0 ; i--){
        if(i == 1){
            resposta = resposta + i + "." // Ou resposta = `${resposta}${i}`
        }else{
            resposta = resposta + i + "," //  Ou resposta = `${resposta}${i}`
        }
       
    }

    resp.innerText = resposta
})