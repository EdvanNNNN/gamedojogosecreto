//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Adivinhe o número';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Informe um número de 1 a 10';
let numeroSecreto = gerarNumeroAleatorio;
let listaDeNumerosSorteados = [];
tentativa = 1;
exibirMensagemInicial();

function exibirTextoNATela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNATela ('h1', 'Adivinhe o número');
    exibirTextoNATela ('p', 'Informe um número de 1 a 10')
}
function verificarChute () {
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        let palavraTentativas = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativa} ${palavraTentativas}` ;
        exibirTextoNATela ('h1', 'Você acertou');
        exibirTextoNATela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exibirTextoNATela ('h1', 'Você errou')
        if (chute < numeroSecreto) {
            exibirTextoNATela ('p', `O número ${chute} é menor do que o número secreto`);
        } else if (chute > numeroSecreto) {
            exibirTextoNATela ('p', `O número ${chute} é maior do que o número secreto`);
        }
        tentativa++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNalista == 10) {

        listaDeNumerosSorteados = []

    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido))  {
        
        return gerarNumeroAleatorio()
    } else {

        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;

    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1 
    exibirMensagemInicial();
}