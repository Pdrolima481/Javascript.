/* 1.Contagem Regressiva

Escreva um loop
  Use um for que exiba números de 10 a 1 (em ordem decrescente) no console.*/

  for (let i =10; i >= 1; i--) {
    console.log(i);
  }

  /*2.Soma de Números
  Use um loop for para somar todos os números de 1 a 100 e exibir o resultado no console. */
  let soma=0;
  const n=100;
  for (let g = 0; g <= n; g++) {
  soma+= g;
  }
  console.log(soma);
  
  /*3.Crie um loop for que exiba todos os números pares entre 1 e 50.*/
  const x = 50;

  for (let j = 0; j <= x; j++) {
   if (j % 2 ===0 ) {
    console.log(j);
   }
  }

/*4.Utilize um loop for para percorrer um array de nomes e exiba cada nome no console.*/

const compras=["RTX 4090","LG ULTRAWIDE 144 HTZ","CADEIRA GAMER","TECLADO MECANICO HYPERX","WATERCOLE RISEMODE"];

for (let t = 0; t < compras.length; t++) {
  console.log(compras[t]);
  
}

/*5.Escreva um loop for que conte de 10 até 0 e exiba "Lançamento!" quando terminar.*/

for (let k =10; k >= 0; k--) {
  console.log(k);
}
console.log("Lançamento!");

  

  
