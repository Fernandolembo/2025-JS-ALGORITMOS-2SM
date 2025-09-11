//menu 

var cartao="4"; 

switch(cartao){
    case "1": 
             console.log("Você pediu um novo cartão");
             break;
    case "2":
             console.log("Sua fatura é R$ 1000,00");
             break
    case "3":
             console.log("Seu limite é R$ 2000,00");
             break
    case "4":
             console.log("Você pediu um empréstimo");
             break
             default:
             console.log("Você falará com um atendente");     
}


//Atividade lanchonete

var lanche="2";

switch(lanche){
    case "1":
             console.log("Você selecionou o x-salada");
             break;
    case "2":
             console.log("Você selecionou o x-burguer");
             break
    case "3":     
             console.log("Você selecionou o x-bacon");
             break;
    case "4":
             console.log("Você selecionou o x-vegano");
             break;
             default:
             console.log("Você selecionou o x-tudo");
}             

// Atividade 2

var dia= "domingo"


switch(dia){
    case "sábado":
                  console.log("Hoje é dia de semana")
                  break;
    case "domingo":                                        
                   console.log("Hoje é final de semana") 
                   break;   
                   default:
                   console.log("Hoje é dia útil")    
}

//atividade 3

var nota1= 8;
    nota2= 4;
    nota3= 7;
var media=(nota1+nota2+nota3)/3;

if (media>10){
    console.log ("Aprovado");
}else (media<5);     
    console.log ("Reprovado");









