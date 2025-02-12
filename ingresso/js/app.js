let qtdSelecionados = 0;




function comprar(){
   
        //quantidade de ingressos selecionados
    qtdSelecionados = document.getElementById('qtd').value

   
     if(qtdSelecionados>0){
    
        //selecionando o tipo de ingresso
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    
    //selecionando a quantidade de ingressos disponíveis por ingresso
    let idDisponivel = `qtd-${tipoIngresso}`;

   
    let qtdDisponivel = document.getElementById(idDisponivel).innerHTML;
    


    if((qtdDisponivel)>= (qtdSelecionados)){
     //totalIngressos Selecionados
    let totalIngressos = parseInt(qtdDisponivel)-parseInt(qtdSelecionados);
     alert('Você realizou compra!');
    //Atualizar quanti;dade de disponíveis
     let novoValor = document.getElementById(idDisponivel);
    
     novoValor.innerText = totalIngressos
    }else{
        alert('Quantidade insuficiente de ingressos!')
    }
    
    document.getElementById('qtd').value='00';
     
    
     } else{
        alert('A quantidade de ingressos soliciadas é inválida!');
     }
}