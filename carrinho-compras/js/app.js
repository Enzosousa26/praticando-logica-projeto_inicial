let subTotal = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';
document.getElementById('produto').value = '';

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    //calcular o preço, o nosso subtotal
    //adicionar no carrinho
    //atualizar o valor total
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;

    if(confirm(`Quer realmente adicionar o produto "${nomeProduto}" ao carrinho?`)){
        let listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML =  listaProdutos.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`;

        subTotal = subTotal + preco;

        let resultado = document.getElementById('valor-total');
        resultado.innerHTML = `<span class="texto-azul" id="valor-total">R$${subTotal}</span>`;

        document.getElementById('quantidade').value = '';
    }

    
    
}

function limpar(){
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
    let subTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';


}