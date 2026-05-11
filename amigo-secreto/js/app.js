let todosAmigos = [];

function adicionar(){
    let amigos = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    todosAmigos.push(amigos.value);
    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = amigos.value;
    }else{
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigos.value;
    }
    amigos.value = '';   
}

function sortear(){
    embaralha(todosAmigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < todosAmigos.length; i++){

        if(i == todosAmigos.length - 1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + todosAmigos[i] + ' -> ' + todosAmigos[0] + '<br>';
        }else{
            listaSorteio.innerHTML = listaSorteio.innerHTML + todosAmigos[i] + ' -> ' + todosAmigos[i + 1] + '<br>';
        }
    }

}

function embaralha(listaAmigos){
    for(indice = listaAmigos.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

        //atribuição via destructuring
        [listaAmigos[indice - 1], listaAmigos[indiceAleatorio]] =
            [listaAmigos[indiceAleatorio], listaAmigos[indice - 1]];
    }
}

function reiniciar (){
    todosAmigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';

}