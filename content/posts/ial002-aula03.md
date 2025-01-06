---
author: "Gabriel Coelho Soares"
title: "Aprendendo algoritmos em C"
date: "2023-08-25"
description: "Continuação das aulas de IAL002 - Aprendendo C"
tags: ["development", "ial002"]
categories: ["ads-fatec"]
ShowToc: true
TocOpen: true
ShowReadingTime: true
ShowWordCount: true
---

# Algoritmos em C

C tem várias funções. Para que o C reconheça essas funções, precisamos iniciar os algoritmos com `include <stdio.h>`.
Com isso, o programa em C irá receber as funções principais, como o "leia", "escreva" do portugol.

## Base de um programa C

```c
#include <stdio.h>

int main()
{
 //declaração de variáveis

 //códigos de interação
}
```

## Funções já aprendidas

### Escreva

A Função escreva, que aprendemos na [[Aula 02 - IAL002]] recebe o seu nome em iglês da seguinte maneira: `printf("TEXTO"):`

### Leia

A função leia, recebe seu nome em inglês com a seguinte sintaxe: `scanf("%VERABAIXO", &variavel);
> Sobre o scanf, precisamos seguir o seguinte padrão:
> > Tipo da variável inteiro: `%i` ou `%d`
> > Tipo da varívael texto (char): `%s` ou `%s`
> > Tipo da variável float: `%f`
>
> Outra questão importante é que, para a variável receber o valor digitado pelo usuário, precisamos "&screver" dentro da variável. Sendo assim, após o programa receber no scanf, precisamos digitar o & (e comercial) logo antes da variável.
> > **SOBRE A VARIÁVEL FLOAT**
> > É importante notar que o número de casas decimais, por padrão que o compilador identifica uma variável float é alto, sendo necessário, à vontade do programador, delimitar este número. Assim, quando formos "printar" para o usuário, e queremos somente duas casas decimais, devemos utilizar o %f da seguinte maneira: `%.2f`

### Declaração de variáveis

Para declaração de variáveis, temos 3 tipos:

- Integer (int)
- Character (char)
- Float (float)

#### Regras da declaração de variável Char

Por não poder receber uma string, isto é, uma cadeia, uma frase ou conjunto delas, todas as vezes que quisermos declarar um char com vários caracteres, utilizaremos o seguinte modelo:

```c
int main(void)
{
 char inicialNome; //recebe um caractere
 char primeiroNome[10]; //recebe um nome de até 10 caracteres, ou seja, uma cadeia. 
}
```

### Concatenação de texto e variável

Para concatenar em C, precisamos escrever o texto inteiro, indicando no lugar da variável, o esquema apresentado acima na [[#Declaração de variáveis]].

Assim, um exemplo seria:

```c
int main(void)
{
 int numero;
 char nome[10];
 printf("Escreva o nome");
 scanf("%s", &nome);
 printf("Informe o número");
 scanf("%d", &numero);
 printf("Seu nome é %s e seu número é %d", nome, numero);
}
```

## Desafio
>
> Crie um algoritmo para caćulo de venda de produto.
> PERGUNTAR nome do cliente, produto, valor unitário. quantidade adquirida
> MOSTRAR o total a pagar

# Códigos dos exercícios em sala

```c
#include <stdio.h>
#include <string.h>

int main(void)
{
    //Exercício 1
    int numero;
    char nome[10];

    printf("Informe um numero");
    scanf("%d", &numero);
    printf("Informe o nome");
    scanf("%s", &nome);
    printf("Nome: %s \n e o seu numero: %d",nome,numero);
```

```c
 // Exercício 2
    float notaUm, notaDois, notaTres, media;
    char txt;
    char ap[8] = {'a','p','r','o','v','a','d','o'};
    char re[9] = {'r','e','p','r','o','v','a','d','o'};
   
    printf("Escreva a primeira nota: ");
    scanf("%f", &notaUm);
    printf("Escreva a segunda nota: ");
    scanf("%f", &notaDois);
    printf("Escreva a terceira nota: ");
    scanf("%f", &notaTres);
  
    media = (notaUm + notaDois + notaTres)/3;
  
    if(media > 6)
    {
        strcpy(txt,ap);
    }
    else
    {
        strcpy(txt,re);
    }
    printf("A Media das tres notas foi: %f \n %s", media, txt);
```

```c
//Exercício 3
    int idade, anoNasc;
    float salario, salarioLiq;
    char nome[10];
    printf("Digite seu nome: ");
    scanf("%s", &nome);
    printf("Agora nos informe sua idade: ");
    scanf("%d", &idade);
    printf("Por fim, informe-nos o seu salario: ");
    scanf("%f", &salario);
    anoNasc = 2023-idade;
    salarioLiq = salario*0.92;
    float desconto = salario-salarioLiq;
    printf("Certo sr(a) %s. \n Seu ano de nascimento e: %d estando hoje com %d anos \n Seu salario liquido e %.2f com um desconto de %.2f no valor inicial de %.2f", nome, anoNasc, idade, salarioLiq, desconto, salario);
```

```c
 //Exercício 4 ou Desafio do dia.
    char nomeCliente[20], nomeProduto[20], unidade[30];
    int qntdProduto, parcelado=0, parcelamento=0;
    float valorUnit, valorTotal, valorFinalPGMTO, valorParceladoFinal, valorParcela;
  
    printf("Digite o nome do Cliente: ");
    scanf("%s", &nomeCliente);
    printf("Agora digite o nome do produto a comprar: ");
    scanf("%s", &nomeProduto);
    printf("Qual o valor unitario de %s? : ", nomeProduto);
    scanf("%f", &valorUnit);
    printf("E quantos(as) %s voce deseja comprar? : ", nomeProduto);
    scanf("%d", &qntdProduto);
    if(qntdProduto > 1)
    {
        strcpy(unidade, "unidades");
    }
    else
    {
        strcpy(unidade, "unidade");
    }
    valorTotal = valorUnit * qntdProduto;

 // Ao término da aula, o professor desafiou a fazer os seguintes cálculos:
 // Caso o cliente queira pagar a vista, dar 10% de desconto
 // Caso queira parcelar de 2 a 5 vezes, apenas dividir 
 // Caso queira parcelar de 6 a 10 vezes, 8% de juros no total e parcelar
 // Caso queira parcelar mais de 10 vezes, 12% de juros no total e parcelar
 // Obs: Foi realizado com conhecimentos prévios da linguagem C. 
    while(parcelado == 0)
    {
        printf("%s, voce comprou %d %s de %s, totalizando o valor de R$%.2f", nomeCliente, qntdProduto, unidade,   nomeProduto, valorTotal);
        printf("\nVoce deseja pagar este valor de qual modo: \n\n");
        printf("1. a Vista\n");
        printf("2. A prazo\n");
        scanf("%d", &parcelado);   
  
        if(parcelado == 1)
        {
            valorFinalPGMTO = valorTotal * 0.90;
            printf("O Valor a vista tem 10%% de desconto, total a pagar: R$ %.2f", valorFinalPGMTO);
        }
        else if (parcelado == 2)
        {
            printf("Temos diversas opçoes de parcelamento, conforme se segue:");   
        }
        else
        {
            printf("Digite uma opçao existente");
            parcelado = 0;
        }
    }
  
    while(parcelamento==0)
    {
        printf("\n1. 2 parcelas");
        printf("\n2. 3 parcelas");
        printf("\n3. 4 parcelas");
        printf("\n4. 5 parcelas");
        printf("\n5. 6 parcelas");
        printf("\n6. 7 parcelas");
        printf("\n7. 8 parcelas");
        printf("\n8. 9 parcelas");
        printf("\n9. 10 parcelas");
        printf("\n10. mais de 10 parcelas");
        scanf("%d", &parcelamento);
  
        switch (parcelamento)
        {
            case 1:
                valorParcela = valorTotal / 2;
                printf("Serao duas parcelas de R$%.2f", valorParcela);
            break;
            case 2:
                valorParcela = valorTotal / 3;
                printf("Serao tres parcelas de R$%.2f", valorParcela);
            break;
            case 3:
                valorParcela = valorTotal / 4;
                printf("Serao quatro parcelas de R$%.2f", valorParcela);
            break;
            case 4:
                valorParcela = valorTotal / 5;
                printf("Serao cinco parcelas de R$%.2f", valorParcela);
            break;
            case 5:
                valorParceladoFinal = valorTotal * 1.08;
                valorParcela = valorParceladoFinal / 6;
                printf("Serao seis parcelas de R$%.2f, tendo um acrescimo de 8%% totalizando: R$%.2f", valorParcela, valorParceladoFinal);
            break;
            case 6:
                valorParceladoFinal = valorTotal * 1.08;
                valorParcela = valorParceladoFinal / 7;
                printf("Serao seis parcelas de R$%.2f, tendo um acrescimo de 8%% totalizando: R$%.2f", valorParcela, valorParceladoFinal);
            break;
            case 7:
                valorParceladoFinal = valorTotal * 1.08;
                valorParcela = valorParceladoFinal / 8;
                printf("Serao seis parcelas de R$%.2f, tendo um acrescimo de 8%% totalizando: R$%.2f", valorParcela, valorParceladoFinal);
            break;
            case 8:
                valorParceladoFinal = valorTotal * 1.08;
                valorParcela = valorParceladoFinal / 9;
                printf("Serao seis parcelas de R$%.2f, tendo um acrescimo de 8%% totalizando: R$%.2f", valorParcela, valorParceladoFinal);
            break;
            case 9:
                valorParceladoFinal = valorTotal * 1.08;
                valorParcela = valorParceladoFinal / 10;
                printf("Serao dez parcelas de R$%.2f, tendo um acrescimo de 8%% totalizando: R$%.2f", valorParcela, valorParceladoFinal);
            break;
            case 10:
                valorParceladoFinal = (valorTotal * 1.12)+300;
                valorParcela = valorParceladoFinal / 11;
                printf("Serao mais de dez parcelas de R$%.2f, tendo um acrescimo de 8%% totalizando: R$%.2f", valorParcela, valorParceladoFinal);
            break;
        }
    }
  
    if(valorTotal>300)
    {
        printf("\n Volte Sempre!!!");
    }
    else
    {
        printf("\n Poderia desfrutar mais de nossos produtos na proxima vez");
    }
}
```

----

## Operador Condicional Ternário

Definição
Este tipo de operador possui três operandos, e é frequentemente utilizado como um "atalho" (uma simplificação) do IF.

Sintaxe
```condição ? expr1 : expr2```

Parâmetros
```condição``` → Uma expressão que será avaliada como verdadeiro ou falso.

```expr1, expr2``` → Expressões com valores de qualquer tipo, sendo a primeira o resultado esperado (verdade) e a segunda o "senão" (falso)

### Exemplo em "portugol"

```
escreva("A taxa do serviço ficou em: R$"+ éMembro ? "2,50" : "5,00") 
```

Ou seja, se a pessoa for membro, terá um desconto. Em outras palavras:

```
se (éMembro){
  taxa = 2,5
}senão{
  taxa = 5,0
}

escreva("A taxa do serviço ficou em: R$", taxa)
```

Em apenas uma linha eu escrevi um código que seria em 5 (usando a identação básica)
