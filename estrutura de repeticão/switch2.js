/*2. Menu de Operações
Crie um programa que recebe dois números e uma operação aritmética (+, -, *, /) através de um switch. O programa deve realizar a operação correspondente e imprimir o resultado.*/

let operação;
operação = "soma"
var A=10;
var B=124;
switch (operação) {
    case "soma":
 console.log(A+B);
        break;
    case "subtra": 
    console.log(B-A);
    break;
    case "multi":
    console.log(A*B);
    break;
    case "Div":
        if(A!==0){
       console.log(A/B);
        } else{
            console.log("Divisão por zero não permitida");
        }
        break;

    default:
        console.log("Operação invalida!");
        break;
}