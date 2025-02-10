---
author: "Gabriel Coelho Soares"
title: "Introdução à Lógica de Programação"
date: "2023-08-11"
description: "Anotações da aula de IAL002 (Introdução à Lógica de Programação)"
tags: ["development", "ial002"]
categories: ["ads-fatec"]
ShowToc: true
TocOpen: true
ShowReadingTime: true
ShowWordCount: true
---

# IAL002

Primeiro contato será o acordo do semestre, tendo em vista a ementa → quais serão os tópicos abordados até o último dia.  Se não existem regras estabelecidas, nós como humanos teremos a tendência à vitimizar por n motivos, sejam eles quais forem. Numa empresa, por exemplo, se não tem regra estabelecida, às vezes, alguém que trabalhe menos que você mas esteja numa outra função, ganhe mais fazendo menos que você. E aí entramos no mundo da abstração e passamos a pensar diversas besteiras → mas tudo isso acontece pois não foram estabelecidas boas regras; ou melhor, que se tiveram, não foram cumpridas.

O trabalho do professor será como um facilitador, um intermediador para que possamos entender a **Lógica** para passar esta ao momento de **desenvolver o algoritmo**.

É interessante olhar para a grade e para os assuntos abordados em todas as aulas e ver aquilo que ressoa (*resonates*) com você, para buscar depois uma especialização. E enfim, não buscar somente pelo dinheiro (porque tem, sim, muito dinheiro envolvido). Tem espaço para todos, em todo lugar da TI → Suporte, Redes, Infraestrutura, Nuvem;

Para além do Desenvolvimento de Sistemas; Não ficar preso ao nome do curso, mas focar no conteúdo que é passado pela ementa.

Para isso usaremos a lógica, na hora de escolher aquilo que ressoa, pois é ilógico escolher algo que não ressoa contigo para trabalhar. E a Lógica segue um tanto de passos. Por exemplo, escovar os dentes:

```md
1. Andar até o banheiro;
2. Se
 1. O Banheiro está vazio: 
  1. Entrar
  2. Pegar a escova
  3. Pegar a Pasta de Dentes
  4. Abrir a Pasta
  5. Expremer um pouco da pasta nas cerdas da escova
  6. Tampar a pasta
  7. Depositar a pasta no lugar original
  8. Escovar os dentes
 2. O Banheiro está ocupado:
  1. Aguardar o banheiro desocupar ↑ e voltar ao passo 2.1
```

Nossos pais foram, à sua maneira, um instrutor de lógica, de diversos algorítmos para nós, enquanto cresciamos. `Não põe o dedo na tomada pois **SE** você colocar vai tomar choque.`.

Pouco diferente de nós são os computadores, pois nós delimitaremos todas as funçoẽs que ele deverá executar, através de "ensinamentos lógicos". E porque são pouco diferentes? Pois nós temos um cérebro dotado de inteligência emotiva, coisa que o computador não possui. Assim, independente do humor que estamos, a aplicação fará tudo da mesma maneira. Está com fome? Ele funciona! Está triste? Ele funciona! E assim por diante.

Essa disciplina é uma base para muitas outras nesse curso → ainda que não gostem, entender essa base vai auxiliar no entendimento de todas as outras disciplinas do curso, para auxiliar na questão da escolha do seu futuro emprego.

### Conteúdo da Aula

- Teremos um teste de raciocínio lógico.

5 integrantes da família, cada um passa a ponte em `x` segundos. temos 30 segundos antes da lamparina apagar. Sempre vão dois no máximo, e um tem que voltar com a lamparina.

Filho → 1
Pai → 3
Mãe → 6
Tio → 8
Avô → 12

1. Vai o Filho com o Pai `27`
2. Volta o Pai `24`
3. Vai o Tio e a Mãe `18`
4. Volta o Filho `17`
5. Vai o Pai e o Filho `14`
6. Volta o Filho `13`
7. Vai o Filho e o Avô `1`

### Continuação da Aula

#### Algorítmos

- Sequência de passos em ordem.

##### Exercício

1. Faça um algoritmo para trocar pneu de carro.

```md
// Dirigindo o carro, indo para o clube em plena segunda, e numa estrada interna o pneu fura: Qual o primeiro e próximos passos: 
1. Acionar a seta para a direita; 
2. Verificar no retrovisor se a via está livre;
3. Guiar o carro ao acostamento;
4. Comece a freiar e segure firme no volante; 
5. Tendo o carro parado, desligue o mesmo;
6. Retire o cinto de segurança;
7. Olhe no retrovisor esquerdo para verificar se está segura sua saída : se sim, passo 8. Se não, aguarde.
8. Abra a porta e saia do carro.
9. Feche a porta. 
10. Dirija-se ao lado cujo pneu estourou/furou : certifique-se da situação
11. Dirija-se ao porta-malas/parte traseira do carro, abra-o, para localizar o STEP e as ferramentas necessárias. 
12. Retire o triangulo e o posicione corretamente para sinalizar. 
13. Tire os itens necessários para a troca (STEP, Macaco, Chaves)
14. Feche o porta-malas e dirija-se ao pneu.
15. Posicione o macaco no chassis do carro, e execute o procedimento para elevar o eixo do chão. 
16. Realize o procedimento da retirada do pneu. 
17. Após removido, posicione o step e realize a troca. 
18. Desca o carro com o procedimento reverso do Macaco. 
19. Recolha as ferramentas com o pneu furado. 
20. Dirija-se ao porta-malas, abra-o. 
21. Deposite os itens no porta-malas no local próprio. 
22. Retorne, com segurança, à porta do motorista
23. Abra a porta
24. Entre
25. Feche a porta
26. Coloque o Cinto de Segurança
27. Dê partida no carro. 
28. Dirija com segurança. 
29. FIM. 
```

##### Exemplo

```portugol
INÍCIO
 inteiro a, b, soma;
 escreva("Digite um valor para a")
 leia a 
 escreva("Digite um valor para b")
 leia b
 soma = a+b
 escreva("Resultado", soma)
 pausa;
FIM
```

Conceito de varíáveis → São objetos dentro da área computacional que constantemente mudam a partir do que o algoritmo possa pedir. Outro exemplo é pensarmos em gavetas num móvel. No exemplo acima, temos três gavetas que iremos nomear de `a`, `b` e `soma`. Ao chegarmos e depositarmos na gaveta `a` o valor `4` e na gaveta `b` o valor `9`, o programa irá armazenar na gaveta `soma` a soma de ambas, e retornará o valor `13`.

> Nas provas poderemos utilizar de uma cola. Quem trouxer a cola, ganha um ponto na média final.

```portugol focado em c
Início
{
 inteiro a, b, soma;
 escreva("Digite um valor para a");
 leia(a);
 escreva("Digite um valor para b");
 leia(b);
 soma = a+b;
 escreva("Resultado", soma);
 pausa;
}
```

-----

## Variáveis

- Definição: Sujeito a variação.
- Programa tem um objetivo mas é sujeito a variar resultados dependendo da interação do usuário.
- Constante → fixo
- Tipo de dados: Inteiro, real e character, cadeia
- *Em C: Int, Float e Char, String*

### Exercícios

#### Problema 1
>
> Crie um algorítmo, representado em portugol para calcular a média de três notas que o usuário deve fornecer.

```portugol
Início
{
 real n1, n2, n3, media;
 escreva("Digite a primeira nota:\n")
 leia(n1)
 escreva("Digite a segunda nota\n")
 leia(n2)
 escreva("Digite por fim a terceira nota:\n")
 leia(n3)
 media = (n1+n2+n3)/3
 escreva("A média das notas, ",n1,", ",n2," e ",n3," resultou em: ",media,"")

}
```

#### Problema 2
>
> Mostrar a idade de uma pessoa com base no ano de nascimento dele

```portugol
Início{
 Inteiro anoAtual, anoNasc, idadeAtual
 anoAtual=2023
 escreva("Digite o ano que você nasceu: ")
 leia(anoNasc)
 idadeAtual = anoAtual - anoNasc
 escreva("Você tem, ou fará ", idadeAtual, " anos.")
}
```

#### Problema 3
>
> Perguntar para o usuário o nome, o salário e calcular o INSS (8%) do salário.

```portugol
Início
{
 cadeia nomeFunc
 real salBruto, salLiq, valorINSS
 escreva("Digite seu nome: ")
 leia(nomeFunc)
 escreva("Agora nos informe seu salário bruto ")
 leia(salBruto)
 valorINSS = salBruto * 0.08
 salLiq = salBruto - valorINSS
 escreva(nomeFunc," com seu salário bruto de R$", salBruto," é descontado R$",valorINSS," te restando um montante liquido de R$",salLiq)
}
```

Todos os códigos foram testados no site [Portugol Webstudio](https://dgadelha.github.io/Portugol-Webstudio/)

## Condicional

No [Problema 1](#problema-1), adicionar uma condição de, caso a média seja maior que 9, exiba "Parabéns", e menor que 3, exiba "Cuidado".

```portugol
Início
{
 real n1, n2, n3, media;
 escreva("Digite a primeira nota:\n")
 leia(n1)
 escreva("Digite a segunda nota\n")
 leia(n2)
 escreva("Digite por fim a terceira nota:\n")
 leia(n3)
 media = (n1+n2+n3)/3
 escreva("A média das notas, ",n1,", ",n2," e ",n3," resultou em: ",media,"")
 se media > 9
 {
  escreva("Parabéns!")
 }
 se media < 3
 {
  escreva("Cuidado")
 }

}
```

No [#Problema 2](#problema-2) uma condicional que verifique a idade, se é menor que 50 exiba adulto e senão exiba idoso.

```portugol
Início{
 Inteiro anoAtual, anoNasc, idadeAtual
 anoAtual=2023
 escreva("Digite o ano que você nasceu: ")
 leia(anoNasc)
 idadeAtual = anoAtual - anoNasc
 escreva("Você tem, ou fará ", idadeAtual, " anos.")
 se idadeAtual < 50
 {
  escreva("Você é adulto")
 } senao
 {
  escreva("Você é idoso")
 }
}
```

No [#Problema 3](#problema-3) verifique a faixa salarial conforme tabela abaixo, cobre o imposto relacionado

| salário  | porcentagem imposto |
| -------- | ------------------- |
| 0 a 1500 | 8%                  |
| +1500    | 12%                 |

```portugol
Início
{
 cadeia nomeFunc
 real salBruto, salLiq, valorINSS, taxa
 escreva("Digite seu nome: ")
 leia(nomeFunc)
 escreva("Agora nos informe seu salário bruto ")
 leia(salBruto)
 se salBruto < 1500{
  taxa = 0.08
 }senao
 {
  taxa = 0.12
 }
 valorINSS = salBruto * taxa
 salLiq = salBruto - valorINSS
 escreva(nomeFunc," com seu salário bruto de R$", salBruto," é descontado R$",valorINSS," te restando um montante liquido de R$",salLiq)
}
```

## Exercício Final

Criar um algoritmo que solicite o nome do cliente, saldo atual em conta bancária, apresente o saldo e pergunta qual valor quer sacar.
Após o saque efetivado, apresentam o saldo final e uma mensagem: Se o saldo ficar abaixo de 100, informar para ter mais cuidado, senão agradecer o saque.

```portugol
Início{
 cadeia nomeCliente, mensagemSaldo, mensagemAgr
 real saque, saldoAtual, saldo
 mensagemSaldo = "Tome cuidado para não ficar sem saldo!"
 mensagemAgr = "Nós agradecemos a preferência"
 escreva("Digite seu nome: ")
 leia(nomeCliente)
 escreva("Olá ",nomeCliente," é bom tê-lo conosco novamente\nDigite seu saldo atual: ")
 leia(saldoAtual)
 escreva("Digite o quanto você deseja sacar: R$")
 leia(saque)
 se (saque > saldoAtual)
 {
  escreva("Operação não realizada! Saque desejado é maior que o Saldo Atual.")
 }senao
 {
  saldo = saldoAtual - saque
  se (saldo < 100)
  {
   escreva(mensagemSaldo)
  }
  escreva(nomeCliente, "seu saldo atual é de R$",saldo," tendo acabado de sacar R$",saque)
  escreva (mensagemAgr)
 }
}
```
