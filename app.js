function exibirTextoNaTela(tag,texto){   //Obs: nâo nomei as coisas com nomes parecidos com o de alguns metodos
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.5});
    let campo=document.querySelector(tag);
    campo.innerHTML=texto;
    //importação de um codigo JS no html, voz responsiva
    
}

let listaNumerosRepetidos=[];

function gerarNumeroAleatorio(){
    let max=11;
    let numeroAleatorio=parseInt(Math.random()*max);
    //if(listaNumerosRepetidos.length==max){
      //  listaNumerosRepetidos=[];
   // }
    if(listaNumerosRepetidos.includes(numeroAleatorio)){
        if(listaNumerosRepetidos.length==max){
            listaNumerosRepetidos=[];
        }
        return gerarNumeroAleatorio();//Metodo da recursividade
    }else{
        listaNumerosRepetidos.push(numeroAleatorio);
        return numeroAleatorio;
    }
}

let limparCampo=function(){
    //let chute=document.querySelector("input");
    let chute=document.getElementsByTagName("input");
    chute[0].value="";
}
function mensagemInicial(){
    exibirTextoNaTela("h1","Jogo do número secreto");
        exibirTextoNaTela("p","Escolha um número de 1 a 10 :");
}
mensagemInicial();

let numeroAleatorio=gerarNumeroAleatorio();
console.log(numeroAleatorio);
let tentativas=1;


//listaNumerosRepetidos.push(numeroAleatorio);



//Obs : Essa é a função principal do jogo, ela que faz todo o funcionamento do jogo, todas as outras funções(exceto a função novo jogo), são suportes para essa.
function verificarChute(){
    //let chute=document.querySelector("input").value;
    let chute=document.getElementsByTagName("input")[0].value;//Usando o metodo get, e pegando o primeiro elemento com a tag "input"

    //.value, armazena o valor da tag html em uma variavel.
    if(chute==numeroAleatorio){
        let palavraTentativa=tentativas>1?"tentativas":"tentativa";
        let mensagemDeAcerto=`Você acertou o número secreto com ${tentativas} ${palavraTentativa} `;//Obs: Pode ser que no html, dê erro mostrar a mensagem em template string, pois quando o texto está no template string
        exibirTextoNaTela("h1","Parabéns !");                                                       //o html espera uma variavel, nesse caso não deu erro.
            exibirTextoNaTela("p",mensagemDeAcerto);
        document.querySelector("#reiniciar").removeAttribute("disabled");
        document.querySelector("input").setAttribute("disabled",true);
        //document.getElementById("reiniciar").removeAttribute("disabled");
    }   
    else{exibirTextoNaTela("h1","Você errou !");
        if(chute>numeroAleatorio){
            exibirTextoNaTela("p","O número é menor.");
        }else{exibirTextoNaTela("p","O número é maior.");}
    }
    tentativas++;//Toda vez que a função é chamada, é somado +1 a variavel tentativa.
    limparCampo();
}
    
function novoJogo(){//A função novo jogo, serve apenas para resetar as tentativas, e renomerar as o titulo e paragrafos, a parte
    limparCampo();//se verificação se o chute foi correto, fica com a função verificarChute, que é chamada após clicar no botão chutar.

    //Minha forma de resolução
    /* while(listaNumerosRepetidos.includes(numeroAleatorio)){
        numeroAleatorio=gerarNumeroAleatorio();
    }
    listaNumerosRepetidos.push(numeroAleatorio);
    if(listaNumerosRepetidos.length>3){
        listaNumerosRepetidos=[];
    } */

    numeroAleatorio=gerarNumeroAleatorio();
    document.querySelector("input").removeAttribute("disabled");
    console.log(numeroAleatorio);
    console.log(listaNumerosRepetidos);
    tentativas=1;
    mensagemInicial();
    //document.querySelector("#reiniciar").setAttribute("disabled",true);
    document.getElementById("reiniciar").setAttribute("disabled",true);
    //document.getElementsByTagName("button")[1].setAttribute("disabled",true);
    //Metodo set, ser
}







