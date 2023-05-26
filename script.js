function selecionarPrato(prato){

    const pratoSelecionadoAntes = document.querySelector('.container1 .selecionado')

    if (pratoSelecionadoAntes !== null) {
        pratoSelecionadoAntes.classList.remove('selecionado')        
    } 

    prato.classList.add('selecionado')

}

function selecionarBebida(bebida){

    const bebidaSelecionadoAntes = document.querySelector('.container2 .selecionado')

    if (bebidaSelecionadoAntes !== null) {
        bebidaSelecionadoAntes.classList.remove('selecionado')        
    } 

    bebida.classList.add('selecionado')

}

function selecionarSobremesa(sobremesa){

    const sobremesaSelecionadoAntes = document.querySelector('.container3 .selecionado')

    if (sobremesaSelecionadoAntes !== null) {
        sobremesaSelecionadoAntes.classList.remove('selecionado')        
    } 

    sobremesa.classList.add('selecionado')

}