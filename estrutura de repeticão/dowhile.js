/*1. Crie um loop do while que exiba os números de 1 a 5 no console. */

var contador = 1

do {
    console.log(contador)
    contador++
} while (contador <=5);

/*2.Escreva um loop do while que continue pedindo ao usuário para digitar "Sim" até que ele o faça. */

const readline = require('readline');
const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const word = "sim";

function Digasimparamim() {
    r2.question('Digite sim para mim: ',
        (input)=>{
            word= String(input);//converte a entrada para palavra.

            do {
                
            } while (word ='sim'|| isNaN(word)){
                if (isNaN(word)) {
                    console.log("Por favor,digite sim para mim: ");
                    
                }else{
                    console.log("Diga sim porfavor ");
                }
                return Digasimparamim();    
            };  
            console.log(`parabens você digitou: ${word}`);
            r2.close();
        });
}
Digasimparamim();