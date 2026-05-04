limparCampo();

function comprar(){  
    let quantidade = document.getElementById('qtd').value;
    let tipoIngresso = document.getElementById('tipo-ingresso').value;


    if(tipoIngresso == 'pista'){
        comprarPista(quantidade);
    }else if(tipoIngresso == 'superior'){
        comprarSuperior(quantidade);
    }else if(tipoIngresso == 'inferior'){
        comprarInferior(quantidade);
    }else{
        alert('Selecione algum tipo de ingresso e adicione o valor primeiro!');
    }
}

function comprarPista(quantidade){
    let qntdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > qntdPista){
        alert('Quantidade de ingresso indisponivel');
    }else if(quantidade == 0){
        alert('Adicione a quantidade de ingressos!');
    }else{
        qntdPista = qntdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qntdPista;
        alert('Compra realiazada com Sucesso');
        limparCampo();
    } 
}

function comprarSuperior(quantidade){
    let qntdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > qntdSuperior){
        alert('Quantidade de ingresso indisponivel');
    }else if(quantidade == 0){
        alert('Adicione a quantidade de ingressos!');
    }else{
        qntdSuperior = qntdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qntdSuperior;
        alert('Compra realiazada com Sucesso');
        limparCampo();
    }
}

function comprarInferior(quantidade){
    let qntdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > qntdInferior){
        alert('Quantidade de ingresso indisponivel');
    }else if(quantidade == 0){
        alert('Adicione a quantidade de ingressos!');
    }else{
        qntdInferior = qntdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qntdInferior;
        alert('Compra realiazada com Sucesso');
        limparCampo();
    }
}

function limparCampo(){
    document.getElementById('qtd').value = '';
    document.getElementById('tipo-ingresso').value = '';
}
