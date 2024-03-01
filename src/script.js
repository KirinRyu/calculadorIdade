function clicado() {
    var data_atual = new Date()
    var ano_atual = data_atual.getFullYear()
    var res = window.document.getElementById("result")
    var ano_inserido = Number(window.document.getElementById("data").value)
    var botao_sexo = window.document.getElementsByName("sexo")
    var botao_ecolha = window.document.getElementsByName("aniversario")
    
    var idade = ano_atual - ano_inserido
    
    if(botao_ecolha[0].checked==false)
    {
        idade--
    }
    if(idade<=0 || idade > 100)
    {
        res.innerHTML="<strong>[ERRO]<strong> VALOR INVÁLIDO"
        return
    }
    if(botao_sexo[0].checked==true)
    {
        var sex = "um homem"
    }else{
        var sex = "uma mulher"
    }
    res.innerText=`Você é ${sex} de ${idade} anos`
}

function reset() {
    location.reload()
}