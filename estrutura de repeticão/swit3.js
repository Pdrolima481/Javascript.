/*Dias da Semana
Escreva um programa que recebe um número de 1 a 7 e imprime o nome do dia da semana correspondente (1 para "Domingo", 2 para "Segunda", e assim por diante).*/
var week;
week = 1;

switch (week) {
    case 1:
    console.log("Domingo");
        break;
    case 2:
    console.log("Segunda-Feira");
    break;
    case 3:
        console.log("Terça-Feira");
        break;  
        case 4:
        console.log("Quarta-Feira");
        break;  
        case 5:
        console.log("Quinta-Feira");
        break; 
        case 6:
        console.log("Sexta-Feira");
        break;  
        case 7:
        console.log("Sábado");
        break;

    default:
        console.log("Escolha invalida!!");
        
        break;
}