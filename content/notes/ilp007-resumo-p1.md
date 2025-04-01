---
author: "Gabriel Coelho Soares"
title: "Programação Orientada a Objetos - Resumo para Prova 1"
date: "2025-04-01"
description: "Resumo geral de todos os conceitos que vimos em POO"
tags: ["development", "ilp007", "oop"]
categories: ["ads-fatec"]
---
# Programação Orientada a Objetos: Conceitos Fundamentais em Java

## Introdução

A Programação Orientada a Objetos (POO) representa um paradigma de desenvolvimento de software que utiliza "objetos" como elementos fundamentais. Este artigo sistematiza os conceitos essenciais da POO implementados na linguagem Java, oferecendo uma visão estruturada e didática para estudantes e desenvolvedores.

## Fundamentos da Orientação a Objetos

### Classes e Objetos

> "Uma classe é uma estrutura molde para criar objetos. É como uma receita de bolo: você tem os ingredientes (atributos, dados) e o modo de preparo (métodos ou funções)."

As classes definem a estrutura dos objetos, enquanto os objetos são instâncias concretas dessas classes. Como exemplo prático, podemos considerar a classe `Pizza`:

```java
class Pizza {
    private int quantidadeDePedacos;
    private String saborMetade1;
    private String saborMetade2;
    private int tempoDePreparo; // em segundos
    
    public void montar() {
        // instruções para montagem da Pizza
    }
    
    public void assar() {
        // verificar se já está montada e colocá-la no forno
    }
    
    public void comer() {
        // implementação do método
    }
}
```

Um objeto seria criado por meio da instanciação:

```java
Pizza margherita = new Pizza();
```

### Encapsulamento

O encapsulamento é a prática de proteger os dados de um objeto, permitindo que apenas métodos específicos da classe acessem ou modifiquem esses dados. Isto é implementado através dos modificadores de acesso:

- **public**: Acessível por qualquer classe
- **private**: Acessível apenas dentro da própria classe
- **protected**: Acessível dentro da classe, subclasses e classes do mesmo pacote
- **default** (sem modificador): Acessível apenas para classes do mesmo pacote

### Herança

A herança permite que características comuns a diversas classes sejam definidas em uma classe base (superclasse), sendo herdadas pelas classes derivadas (subclasses). Este mecanismo é fundamental para a reutilização de código e representa uma das principais vantagens da POO em relação a outros paradigmas.

```java
class Comida {
    protected String nome;
    protected double valorCalorico;
    
    public void comer() {
        System.out.println("Comendo " + nome);
    }
}

class Pizza extends Comida {
    private String tipoDeMassa;
    private String[] coberturas;
    
    // A classe Pizza herda os atributos e métodos da classe Comida
}
```

### Polimorfismo

O polimorfismo permite que subclasses de uma mesma superclasse invoquem métodos com a mesma assinatura, mas com comportamentos distintos:

```java
class Comida {
    public void preparar() {
        System.out.println("Preparando uma comida genérica...");
    }
}

class Pizza extends Comida {
    @Override
    public void preparar() {
        System.out.println("Preparando uma pizza com molho, queijo e pepperoni...");
    }
}

class Macarronada extends Comida {
    @Override
    public void preparar() {
        System.out.println("Preparando uma macarronada com molho de tomate...");
    }
}
```

## Abstração em POO

A abstração é o processo de identificar características essenciais de um objeto, ignorando detalhes menos relevantes. Em Java, isto é implementado através de:

### Classes Abstratas

Uma classe abstrata é um tipo de classe que não pode ser instanciada diretamente, servindo como modelo para subclasses mais específicas:

```java
public abstract class Conta {
    protected int agencia;
    protected int numero;
    protected String titular;
    protected double saldo;
    
    public abstract void gerarRelatorio();
}
```

### Métodos Abstratos

Os métodos abstratos são declarados sem implementação na classe abstrata, obrigando as subclasses a fornecerem uma implementação concreta:

```java
public abstract class Animal {
    public abstract void emitirSom();
    public abstract void mover();
}

public class Cachorro extends Animal {
    @Override
    public void emitirSom() {
        System.out.println("Au au!");
    }
    
    @Override
    public void mover() {
        System.out.println("Cachorro anda em quatro patas");
    }
}
```

## Interfaces

As interfaces em Java são estruturas que definem um contrato para classes, especificando métodos que devem ser implementados. Diferente da herança múltipla (não suportada em Java), as interfaces permitem que uma classe implemente múltiplos contratos:

```java
public interface Pet {
    void brincar();
    void passear();
}

public class Cachorro extends Animal implements Pet {
    // Implementação dos métodos da classe Animal (emitirSom, mover)
    
    @Override
    public void brincar() {
        System.out.println("Cachorros correm para brincar");
    }
    
    @Override
    public void passear() {
        System.out.println("Cachorros adoram passear");
    }
}
```

## Recursos Avançados em Java

### Construtores e Sobrecarga

Os construtores são métodos especiais utilizados para inicializar objetos. A sobrecarga permite definir múltiplos construtores com assinaturas diferentes:

```java
public class ClasseA {
    public String texto1;
    public String texto2;
    
    // Construtor 1
    public ClasseA() {
        texto1 = "Primeiro Texto\n";
        texto2 = "Segundo Texto\n";
    }
    
    // Construtor 2 (sobrecarga)
    public ClasseA(String t1) {
        texto1 = t1;
        texto2 = "";
    }
    
    // Construtor 3 (sobrecarga)
    public ClasseA(String t1, String t2) {
        texto1 = t1;
        texto2 = t2;
    }
}
```

### Pacotes

Os pacotes em Java são mecanismos de organização que agrupam classes relacionadas, proporcionando:

- Organização estrutural do código
- Controle de acesso entre componentes
- Prevenção de conflitos de nomes
- Modularidade e reutilização

A convenção de nomenclatura segue uma estrutura hierárquica:

```
br.com.empresa.produto.modulo
└── domínio  └── projeto └── componente
```

### Enumeradores (enum)

Os enumeradores representam um tipo de dados que consiste em um conjunto fixo de constantes:

```java
public enum TipoUsuario {
    OPERADOR,
    SUPERVISOR,
    ADMIN
}
```

## Características da Linguagem Java

### Tipos de Dados em Java

Java trabalha com dois grupos principais de tipos de dados:

1. **Tipos primitivos**: int, double, boolean, char, etc.
2. **Tipos de referência**: Classes, Interfaces, Arrays e Objetos

Os tipos de referência possuem características distintivas:
- **Nullabilidade**: Podem receber o valor `null`
- **Métodos e Atributos**: Contêm comportamentos e estados
- **Alocação Dinâmica**: Criados com a palavra-chave `new`
- **Herança**: Suportam o mecanismo de herança

### Comentários em Java

Java suporta três tipos de comentários:

1. **Comentários de linha única**:
   ```java
   // Este é um comentário de linha única
   ```

2. **Comentários de múltiplas linhas**:
   ```java
   /* Este é um comentário
      de múltiplas linhas */
   ```

3. **Comentários de documentação**:
   ```java
   /**
    * Este é um comentário de documentação.
    * @author Nome do Autor
    * @version 1.0
    */
   ```

## Notas Complementares

¹ A programação orientada a objetos é especialmente útil para projetos complexos que exigem manutenibilidade e escalabilidade.

² A documentação adequada utilizando JavaDoc é essencial para a manutenção a longo prazo de projetos Java.

³ A compreensão profunda dos princípios de encapsulamento, herança, polimorfismo e abstração é fundamental para o desenvolvimento eficaz em Java.

## Referências Bibliográficas

- MENDES. Java com Ênfase em Orientação a Objetos. Novatec.
- DEITEL. Java, como programar – 10ª edição. Java SE 7 e 8
- ARNOLD, GOSLING, HOLMES. A linguagem de programação Java – 4ª edição.
- Apostilas da Caelum.

---

Este artigo apresenta uma visão sistemática dos conceitos fundamentais da Programação Orientada a Objetos em Java, abordando desde os princípios básicos até recursos mais avançados da linguagem. A compreensão destes conceitos é essencial para o desenvolvimento de software orientado a objetos de alta qualidade e manutenibilidade.
