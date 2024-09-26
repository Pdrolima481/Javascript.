/*1.Verificação de Estação do Ano
Escreva um programa que recebe um número de 1 a 4 e imprime a estação do ano correspondente:

1: Verão
2: Outono
3: Inverno
4: Primavera */ 
let estacaodoano;
estacaodoano=1
switch (estacaodoano) {
    case 1:
        console.log("Verão");
        break;
        case 2:
        console.log("outono");
        break;
        case 3:
        console.log("Inverno");
        break;
        case 4:
        console.log("Primavera");
        break;        

    default: 
    console.log("Estação não identificada!");
        break;
}