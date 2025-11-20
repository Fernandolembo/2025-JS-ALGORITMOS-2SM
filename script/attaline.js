//1-10

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  
  //1-100
  
  let soma = 0;
  for (let i = 1; i <= 100; i++) {
    soma += i;
  }
  console.log("Soma de 1 a 100:", soma);
  
  
  //até 20
  
  for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
  
  
  //10-1
  
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
  
  
  //fatorial de 5
  
  let fat = 1;
  for (let i = 1; i <= 5; i++) {
    fat *= i;
  }
  console.log("Fatorial de 5 =", fat);
  
  
  //1-5
  
  let n = 1;
  do {
    console.log(n);
    n++;
  } while (n <= 5);
  
  
  //7
  
  let numeros = [3, 7, 9, 12]; // simulação de entradas
  let i = 0;
  
  while (numeros[i] <= 10) {
    console.log("Número lido:", numeros[i]);
    i++;
  }
  console.log("Número maior que 10 encontrado:", numeros[i]);
  
  
  //8 
  
  let somaImpares = 0;
  for (let i = 1; i <= 15; i += 2) {
    somaImpares += i;
  }
  console.log("Soma dos ímpares até 15:", somaImpares);
  
  
  //9 
  
  for (let i = 5; i <= 50; i += 5) {
    console.log(i);
  }
  
  
  //10
  
  for (let i = 10; i >= 0; i--) {
    console.log(i === 0 ? " Lançar foguete!" : i);
  }
  

  //1 

function cofreDoPirata(ouroTotal, gasto) {
  let restante = ouroTotal - gasto;
  console.log(`Ouro restante: ${restante} moedas`);

  if (restante >= 100) {
    console.log("🏴 BarbaCurta pode fugir com o tesouro!");
  } else {
    console.log(" BarbaCurta não tem ouro suficiente para fugir!");
  }
}


//2

function poderMagico(pedra) {
  let cubo = pedra ** 3;
  console.log(`✨ O poder mágico da pedra é: ${cubo}`);
}

//3

function testeVampiro(numeroCasa) {
  let raiz = Math.sqrt(numeroCasa);

  if (Number.isInteger(raiz)) {
    console.log(` Raiz exata (${raiz}) → O vampiro pode entrar! `);
  } else {
    console.log(` Raiz não é exata (${raiz.toFixed(2)}) → O vampiro NÃO pode entrar!`);
  }
}

//4

function treinoHeroi(dias) {
  let forca = 0;
  for (let i = 1; i <= dias; i++) {
    forca += 5;
    console.log(`Dia ${i}: força total = ${forca}`);
  }
  console.log(`Após ${dias} dias de treino, o herói tem ${forca} pontos de força!`);
}

//5

function descerTorre() {
  let andar = 10;
  while (andar >= 0) {
    if (andar === 0) {
      console.log("👸 A princesa chegou ao térreo! 🏰");
    } else {
      console.log(`A princesa está descendo... agora no ${andar}º andar`);
    }
    andar--;
  }
}
