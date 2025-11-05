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
  console.log(i === 0 ? "🚀 Lançar foguete!" : i);
}




