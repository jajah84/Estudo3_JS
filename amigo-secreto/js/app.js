let nomeAmigo = document.getElementById("nome-amigo"); 
let agrupaAmigo = [];
let listaAmigos = document.getElementById("lista-amigos");
let listaSorteio = document.getElementById("lista-sorteio");

function adicionar(){
    agrupaAmigo.push(nomeAmigo.value);
    document.getElementById("nome-amigo").value='';
    listaAmigos.innerHTML = agrupaAmigo;

}

function sortear(){

for (let i = 0; i < listaAmigos.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [listaAmigos[i], listaAmigos[j]] = [listaAmigos[j], listaAmigos[i]];
   }
   alert(listaAmigos.innerHTML)

    }


function reiniciar(){
    alert('TesteA');
}