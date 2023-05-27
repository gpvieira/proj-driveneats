let pratoSelecionado;
let bebidaSelecionado;
let sobremesaSelecionado;
let precoPrato;
let precoBebida;
let precoSobremesa;
let nome = '';
let endereco = '';

function verificaPedido() {
    if (pratoSelecionado !== undefined && bebidaSelecionado !== undefined && sobremesaSelecionado !== undefined) {
        
        const botaoFinalizar = document.querySelector('.botao-finalizar');
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
    precoPrato = prato.querySelector('.preco').innerHTML;

    verificaPedido()

}

function selecionarBebida(bebida){

    const bebidaSelecionadoAntes = document.querySelector('.container2 .selecionado')

    if (bebidaSelecionadoAntes !== null) {
        bebidaSelecionadoAntes.classList.remove('selecionado')        
    } 

    bebida.classList.add('selecionado')

    bebidaSelecionado = bebida.querySelector('h4').innerHTML;
    precoBebida = bebida.querySelector('.preco').innerHTML;
    
    verificaPedido()

}

function selecionarSobremesa(sobremesa){

    const sobremesaSelecionadoAntes = document.querySelector('.container3 .selecionado')

    if (sobremesaSelecionadoAntes !== null) {
        sobremesaSelecionadoAntes.classList.remove('selecionado')        
    } 

    sobremesa.classList.add('selecionado')

    sobremesaSelecionado = sobremesa.querySelector('h4').innerHTML;
    precoSobremesa = sobremesa.querySelector('.preco').innerHTML;

    verificaPedido()

}

function finalizarPedido() {
    const backgroundWhite = document.querySelector('.background-branco')
    const telaConfirma = document.querySelector('.janela-confirma')
    
    backgroundWhite.classList.add('aparece')
    telaConfirma.classList.add('aparece')


    let precoPratoNum2 = precoPrato.replace('R$ ','');
    let precoPratoNum3 = precoPratoNum2.replace(',','.');
    precoPratoNum3 = Number(precoPratoNum3);
    
    let precoBebidaNum2 = precoBebida.replace('R$ ','');
    let precoBebidaNum3 = precoBebidaNum2.replace(',','.');
    precoBebidaNum3 = Number(precoBebidaNum3);

    let precoSobremesaNum2 = precoSobremesa.replace('R$ ','');
    let precoSobremesaNum3 = precoSobremesaNum2.replace(',','.');
    precoSobremesaNum3 = Number(precoSobremesaNum3);

    let precoTotal = precoPratoNum3 + precoBebidaNum3 + precoSobremesaNum3
    precoTotal = precoTotal.toFixed(2)
    precoTotal = precoTotal.replace('.',',')

    let pratoConf = document.querySelector('.prato-conf')
    pratoConf.innerHTML = pratoSelecionado;

    let bebidaConf = document.querySelector('.bebida-conf')
    bebidaConf.innerHTML = bebidaSelecionado;

    let sobremesaConf = document.querySelector('.sobremesa-conf')
    sobremesaConf.innerHTML = sobremesaSelecionado;

    let precoPratoConf = document.querySelector('.prato-preco-conf')
    precoPratoConf.innerHTML = precoPratoNum2

    let precoBebidaConf = document.querySelector('.bebida-preco-conf')
    precoBebidaConf.innerHTML = precoBebidaNum2

    let precoSobremesaConf = document.querySelector('.sobremesa-preco-conf')
    precoSobremesaConf.innerHTML = precoSobremesaNum2

    let precoTotalConf = document.querySelector('.total-conf')
    precoTotalConf.innerHTML = `R$ ${precoTotal}`

}

function confirmarPedido() {
    while (nome === '') {
        nome = prompt("Qual é o seu nome?");
    }
    
    while (endereco === '') {
        endereco = prompt("Qual é o seu endereço?");
    }
    
    let precoPratoNum = precoPrato.replace('R$','');
    precoPratoNum = precoPratoNum.replace(',','.');
    precoPratoNum = Number(precoPratoNum);
    
    let precoBebidaNum = precoBebida.replace('R$','');
    precoBebidaNum = precoBebidaNum.replace(',','.');
    precoBebidaNum = Number(precoBebidaNum);

    let precoSobremesaNum = precoSobremesa.replace('R$','');
    precoSobremesaNum = precoSobremesaNum.replace(',','.');
    precoSobremesaNum = Number(precoSobremesaNum);


    let valorTotal = precoPratoNum + precoBebidaNum + precoSobremesaNum;
    valorTotal = valorTotal.toFixed(2);
    valorTotal = valorTotal.replace('.',',');

    let valorTotalText = `R$ ${valorTotal}`    
    

    const mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${pratoSelecionado}
    - Bebida: ${bebidaSelecionado}
    - Sobremesa: ${sobremesaSelecionado}
    Total: ${valorTotalText}
    
    Nome: ${nome}
    Endereço: ${endereco}`

    const msgWhats = encodeURIComponent(mensagem);

    window.open(`https://wa.me//5581995092147?text=${msgWhats}`)

}

function cancelar() {

    const backgroundWhite2 = document.querySelector('.background-branco')
    const telaConfirma2 = document.querySelector('.janela-confirma')
    
    backgroundWhite2.classList.remove('aparece')
    telaConfirma2.classList.remove('aparece')

}