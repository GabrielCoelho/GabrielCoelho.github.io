---
author: "Gabriel Coelho Soares"
title: "Abstração em POO"
date: "2025-02-10"
description: "Conceitos de Orientação a Objetos"
tags: ["development", "ies300", "ilp007", "oop"]
categories: ["ads-fatec"]
---

# Abstração em POO

Quando passamos a criar diversas classes e aplicar os conceitos de Herança nós podemos chegar à `Classes Abstratas`, classes que em si não fazem sentido serem instanciadas, mas chegam a ser um molde perfeito para suas subclasses.
{{<backlink "conceito-poo">}}

Pense o seguinte:

> Um **banco** pode ter vários tipos de contas, como *Conta Corrente, Conta Poupança, Conta de Investimentos, Conta no Exterior, Contas Especiais* e outras contas que podem vir a surgir.
> Todas elas precisam de uma agência, um número de conta e um proprietário. Assim, temos uma classe mãe chamada **CONTA**, contendo esses atributos.
> Não somente, em todas as contas podemos *depositar, sacar, transferir* e movimentar de quaisquer outros métodos.
> Assim, não faz sentido abrir uma "Conta" dessa classe mãe, mas sempre vamos abrir uma conta de algum tipo. Isto torna a classe **Abstrata**.

*Outros exemplos de classes abstratas:*

- Animal (que pode ser dividido em subclasses como Mamíferos, Aquáticos, Répteis...)
- Comida (que pode ser dividido em subclasses como refeição, sobremesa, pizzas, tortas...).
- Veículo (que pode ser dividido em subclasses como moto, carro, lancha, avião...)

==para declarar uma classe abstrata==

```java
public abstract class Conta{
 // atributos e métodos virão aqui. 
}
```

## Métodos abstratos

Nós podemos também criar métodos abstratos. Basicamente, eles não tem implementação nenhuma no momento em que são declarados, mas **obrigam** que esta implementação seja feita em cada sub-classe.

```java
// Conta.java
public abstract class Conta{
  private int agency;
  private int number;
  private String owner;
  private double amount;

// Obriga as subclasses a sobrescrever este método
  public abstract void generateReport();
}
// --------
// ContaCorrente.java
public class ContaCorrente extends Conta{

 @Override
 public void generateReport(){
  System.out.println("Estou sendo obrigado a implementar algum código aqui");
 }
}
```

Observe que...
> **quando o método é abstrato, ele precisa terminar com o `;`**

{{<backlink "ies3-001">}}
