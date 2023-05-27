let pratoSelecionado;
let bebidaSelecionado;
let sobremesaSelecionado;

function verificaPedido() {
    if (pratoSelecionado !== undefined && bebidaSelecionado !== undefined && sobremesaSelecionado !== undefined) {
        
        const botaoFinalizar = document.querySelector('button');
        botaoFinalizar.innerHTML = 'Fechar Pedido';
        botaoFinalizar.classList.add('botaoSelecionado')
        botaoFinalizar.removeAttribute('disabled');
    }

}

function selecionarPrato(prato){

    const pratoSelecionadoAntes = document.querySelector('.container1 .selecionado')

    if (pratoSelecionadoAntes !== null) {
        pratoSelecionadoAntes.classList.remove('selecionado')        
    } 

    prato.classList.add('selecionado')

    pratoSelecionado = prato.querySelector('h4').innerHTML;

    verificaPedido()

}

function selecionarBebida(bebida){

    const bebidaSelecionadoAntes = document.querySelector('.container2 .selecionado')

    if (bebidaSelecionadoAntes !== null) {
        bebidaSelecionadoAntes.classList.remove('selecionado')        
    } 

    bebida.classList.add('selecionado')

    bebidaSelecionado = bebida.querySelector('h4').innerHTML;
    
    verificaPedido()

}

function selecionarSobremesa(sobremesa){

    const sobremesaSelecionadoAntes = document.querySelector('.container3 .selecionado')

    if (sobremesaSelecionadoAntes !== null) {
        sobremesaSelecionadoAntes.classList.remove('selecionado')        
    } 

    sobremesa.classList.add('selecionado')

    sobremesaSelecionado = sobremesa.querySelector('h4').innerHTML;

    verificaPedido()

}