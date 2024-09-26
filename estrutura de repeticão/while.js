/*1.Crie um loop while que exiba os números de 1 a 10 no console.*/
var contador= 1;
while (contador <= 10) {
    console.log( contador);
    contador++
    
}

/*2. Escreva um loop while que exiba todos os números ímpares de 1 a 20.*/

var num = 1;
while (num <= 20) {
    if (num % 2 !==0 ) {
        console.log(num);
        
       }
       
       num++;
    
}/*3.Utilize um loop while para somar os números de 1 a 50 e exiba o resultado no console. */
let soma = 0;
let numb = 1
while (numb <= 50) {
        soma+=numb;
        numb ++;
}
console.log(soma);

/* 4. Escreva um loop while que continue pedindo ao usuário para digitar um número até que o número digitado seja maior que 10.*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero = 0;

function perguntarNumero() {
  rl.question('Digite um número maior que 10: ', (input) => {
    numero = Number(input); // Converte a entrada para número

    // Enquanto o número for menor ou igual a 10 ou não for um número válido
    while (numero <= 10 || isNaN(numero)) {
      if (isNaN(numero)) {
        console.log('Por favor, digite um número válido.');
      } else {
        console.log('O número precisa ser maior que 10.');
      }
      
      // Pergunta novamente
      return perguntarNumero();
    }

    // Se for maior que 10, exibe a mensagem e fecha o readline
    console.log(`Você digitou o número: ${numero}, que é maior que 10!`);
    rl.close();
  });
}

// Inicia o loop de perguntas
perguntarNumero();

/*5.Crie um loop while que percorra um array de números e pare de executar quando encontrar um número maior que 100.*/

const num2 = [90,25,39,67,95,105];
let i = 0;

while (i < num2.length){ 
 let numero2=num2[i];
  
if(numero2>100){
  console.log(`Número maior que 100 encontrado: ${numero2}`);
    break;
}
console.log(`Número atual: ${numero2}`);
  i++;
}

