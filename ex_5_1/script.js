//criando referencia para o javascript
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//criacao de fofoqueiro
frm.addEventListener("submit",(e)=>{

    e.preventDefault()

    const numero = Number(frm.inNumero.value)// recebe valor informado no html
    let resposta = ""
    //criando o laco de repeticao(i comeca em 1 e é incrementado até 10)
    for(let i = 1 ; i <= 10 ; i++){
        // a variavel resposta vai acumulando os novos conteúdos(nos 2 formatos)
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
        //resposta = `${resposta}${numero} x ${i} = ${numero*i}\n`
    }
    // o conteudo da tag pre é alterado para exibir a tabuado do número

    resp.innerText = resposta
})