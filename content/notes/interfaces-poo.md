---
author: "Gabriel Coelho Soares"
title: "Interfaces em POO"
date: "2025-02-10"
description: "Conceitos de Orientação a Objetos"
tags: ["development", "ies300", "ilp007", "oop"]
categories: ["ads-fatec"]
---
# Interfaces

O Java não permite a herança de duas classes distintas, assim nasce a interface que "burla" essa regra.

Uma interface ela necessariamente é uma {{<backlink "abstracao-poo">}}, por isso, por mais que você não coloque a palavra chave `abstract`, ela é automaticamente interpretada como se tivesse.

Seus métodos sempre serão públicos e abstratos, forçando o *@Override* na classe que implementa essa interface.

Pense no exemplo da Classe Abstrata "Animal".

```java
// Animal.java
public abstract class Animal{

 public abstract void comer();

 public abstract void mover_se();
}

// Pet.java <- Interface 
public interface Pet{
 void brincar();

 void passear();
}

// Cachorro.java 
public class Cachorro extends Animal implements Pet{
 private String raca;
 private String porte;

 @Override
 public void comer(){
  System.out.println("Cachorro come ração");
 }

 @Override
 public void mover_se(){
  System.out.println("Cachorro anda em quatro patas");
 }

 @Override
 public void brincar(){
  System.out.println("Cachorros correm para brincar");
 }

 @Override
 public void passear(){
  System.out.println("Cachorros adoram passear");
 }
}
```

Referências
{{<backlink "ilp007-01">}}
