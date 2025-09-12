// Aula do professor Juarez, 27 de agosto de 2025

programa
{
	
	funcao inicio()
	{
		inteiro idade
		escreva ("Entre com sua idade: ")
		leia (idade)
		escreva( "Sua idade é: "+idade)
	}
}


// 1. Cadastro de aluno que receba as seguintes informações (Número da Matricula, Nome, Idade, Sexo, Celular e E-mail) e imprima os valores.
programa
{
	funcao inicio()
	{
 
    inteiro matricula, idade
    cadeia nome,sexo, celular, email
 
    escreva("Digite o número da matrícula: ")
    leia(matricula)
    escreva("Digite o nome do aluno: ")
    leia(nome)
    escreva("Digite a idade do aluno: ")
    leia(idade)
    escreva("Digite o sexo do aluno: ")
    leia(sexo)
    escreva("Digite o celular do aluno: ")
    leia(celular)
    escreva("Digite o e-mail do aluno: ")
    leia(email)

    escreva("\n------ Cadastro do Aluno ------\n")
    escreva("Número da matrícula: "+matricula+"\n")
    escreva("Nome: "+nome+"\n")
    escreva("Idade: "+idade+"\n")
    escreva("Sexo: "+sexo+"\n")
    escreva("Celular: "+celular+"\n")
    escreva("E-mail: "+email+"\n")
    escreva("------ Fim ------")
	}
}

// 2. Faça um controle de orçamento que receba cinco produtos e valor de cada produto, calcule o valor total de produtos, 
// imprima produto/valor - total de produtos.

programa
{
	
	funcao inicio()
	{
		cadeia produto1, produto2, produto3, produto4, produto5
		real valor1, valor2, valor3, valor4, valor5, total
		escreva ("Digite o nome do 1º produto: ")
		leia (produto1)
		escreva ("Digite o valor do 1º produto: ")
		leia (valor1)

		escreva ("\nDigite o nome do 2º produto: ")
		leia (produto2)
		escreva ("Digite o valor do 2º produto: ")
		leia (valor2)

		escreva ("\nDigite o nome do 3º produto: ")
		leia (produto3)
		escreva ("Digite o valor do 3º produto: ")
		leia (valor3)

		escreva ("\nDigite o nome do 4º produto: ")
		leia (produto4)
		escreva ("Digite o valor do 4º produto: ")
		leia (valor4)

		escreva ("\nDigite o nome do 5º produto: ")
		leia (produto5)
		escreva ("Digite o valor do 5º produto: ")
		leia (valor5)

    total = (valor1+valor2+valor3+valor4+valor5)

    escreva ("\n------ Produtos Cadastrados ------")
		escreva ("\nProduto 1: "+produto1+" | Valor: "+valor1)
		escreva ("\nProduto 2: "+produto1+" | Valor: "+valor2)
		escreva ("\nProduto 3: "+produto1+" | Valor: "+valor3)
		escreva ("\nProduto 4: "+produto1+" | Valor: "+valor4)
		escreva ("\nProduto 5: "+produto1+" | Valor: "+valor5)
		escreva("\nValor total dos produtos: "+total)
    escreva ("\n------ Fim ------")
	}
}

// 3. Crie um cadastro que receba carro no estacionamento, e imprima para o usuario as informações.

programa
{
	
	funcao inicio()
	{
		cadeia placa, modelo, cor, horaEntrada
		inteiro vaga

		escreva ("Entre com a placa: ")
		leia (placa)
		
    escreva ("Entre com o modelo: ")
		leia (modelo)
		
    escreva ("Entre com a cor: ")
		leia (cor)
		
    escreva ("Entre com o número da vaga: ")
		leia (vaga)
		
    escreva ("Entre com a hora de entrada: ")
		leia (horaEntrada)
		
    escreva ("\n------ Informações ------")
    escreva ("\nPlaca: "+placa)
    escreva ("\nModelo: "+modelo)
    escreva ("\nCor: "+cor)
    escreva ("\nHora de entrada: "+horaEntrada)
    escreva ("\n------ Fim ------")
	}
}