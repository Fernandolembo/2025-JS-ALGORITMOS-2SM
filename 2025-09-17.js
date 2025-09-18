// 1- Faça um programa que receba a idade da pessoa e informe se ela é maior ou menor de idade



var idade;

if(!isNaN(process.argv[2])) {
    idade = Number(process.argv[2]);
} else {
    idade = 18;
    console.log(`O valor dado ${process.argv[2]} não é um valor numérico para representar a idade. Executaremos o programa com o valor default ${idade}`);
}

var resultado;
if(idade >= 18) {
    resultado = "maior";
} else {
    resultado = "menor";
}

console.log(`Esta pessoa é ${resultado} de idade`)

// 2-  

var idade;


if(!isNaN(process.argv[2])) {
    idade = Number(process.argv[2]);
} else {
    idade = 18;
    console.log(`O valor dado ${process.argv[2]} não é um valor numérico para representar a idade. Executaremos o programa com o valor default ${idade}`);
}

var resultado;  

if(idade < 16) {
    resultado = "não pode";
} else if(idade >= 18 && idade <= 70) {
    resultado = "é obrigada a"
} else {
    resultado = "pode mas não é obrigada a"
}

console.log(`Esta pessoa ${resultado} votar`);


// 3- 

var nota1;
var nota2;
var nota3;

if(!isNaN(process.argv[2]) && !isNaN(process.argv[3]) && !isNaN(process.argv[4])) {
    nota1 = Number(process.argv[2]);
    nota2 = Number(process.argv[3]);
    nota3 = Number(process.argv[4]);
} else {
    console.log(`Pelo menos um dos valores dados ${process.argv[2]}, ${process.argv[3]} e ${process.argv[4]} não é um valor numérico para representar as notas . Executaremos o programa com o valor default ${nota1}, ${nota2} e ${nota3}`);
}

var media = (nota1 + nota2 + nota3) / 3;

var resultado;

if(media > 6) {
    resultado = "aprovado";
} else {
    resultado = "reprovado";
}

console.log(`Este aluno foi ${resultado}!`)

// 4-


var numero;

if(!isNaN(process.argv[2])) {
    numero = Number(process.argv[2]);
} else {
    numero = 14;
    console.log(`O valor dado ${process.argv[2]} não é um valor numérico. Executaremos o programa com o valor default ${numero}`);
}

if(numero > 0) {
    resultado = "positivo";
} else if(numero < 0) {
    resultado = "negativo";
} else {
    resultado = "nem positivo, nem negativo";
}

console.log(`O número ${numero} é ${resultado}`);


// 5-

var numero = 5;

if(!isNaN(process.argv[2])) {
    numero = Number(process.argv[2]);
} else {
    numero = 18;
    console.log(`O valor dado ${process.argv[2]} não é um valor numérico. Executaremos o programa com o valor default ${numero}`);
}

var resultado;

if(numero % 2 === 0) {
    resultado = "par";
} else {
    resultado = "impar";
}

console.log(`O numero ${numero} é ${resultado}`);


// 6- 

var idade;

if(!isNaN(process.argv[2])) {
    idade = Number(process.argv[2]);
} else {
    idade = 37;
    console.log(`O valor dado ${process.argv[2]} não é um valor numérico para representar a idade. Executaremos o programa com o valor default ${idade}`);
}

var resultado;

if(idade < 15) {
    resultado = "criança";
} else if(idade < 18) {
    resultado = "adolescente";
} else if(idade < 60) {
    resultado = "adulta";
} else {
    resultado = "idosa";
}

console.log(`Esta pessoa com idade ${idade} é ${resultado}!`);


// 7- 

var num1;
var num2;
var operacao;

const operacoesValidas = ["÷", "*", "-", "+"];

if(!isNaN(process.argv[2]) && !isNaN(process.argv[4]) && operacoesValidas.includes(process.argv[3])) {
    num1 = Number(process.argv[2]);
    num2 = Number(process.argv[4]);
    operacao = process.argv[3];
} else {
    num1 = 30;
    num2 = 88;
    operacao = "*";
    console.log(`Os valores dados ${process.argv[2]} e ${process.argv[4]} não são valores numéricos, ou a operação ${process.argv[3]} 
        não é uma operação válida. Executaremos o programa com os valores default ${num1} e ${num2} e a operação default ${operacao}`);
}

var resultado;

num1 = 20
num2 = 30

if(operacao === "*") {
    resultado = num1 * num2;
} else if(operacao === "÷") {
    resultado = num1 / num2;
} else if(operacao === "+") {
    resultado = num1 + num2;
} else if(operacao === "-") {
    resultado = num1 - num2;
} else {
    resultado = "operação inválida"
}

console.log(`${num1} ${operacao} ${num2} = ${resultado}`);