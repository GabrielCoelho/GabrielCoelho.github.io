---
author: "Gabriel Coelho Soares"
title: "Fundamentos de Orientação a Objetos"
date: "2025-02-10"
description: "Conceitos de Orientação a Objetos"
tags: ["development", "ies300", "ilp007", "oop"]
categories: ["ads-fatec"]
---
{{<backlink "ies3-001">}}

# Fundamentos da Orientação à Objetos

A grande diferença da programação orientada a objetos em relação às outras formas de programação que permitem estruturas está no conceito de *herança*, sendo este o mecanismo pelo qual as definições existentes podem ser facilmente estendidas.

Pode parecer tudo confuso agora, mas ao explicar sobre estes e outros fundamentos, tudo se tornará mais claro.

## Classes

> [!hot] Definição
> Uma **classe** é uma estrutra molde para criar objetos. É como uma receita de bolo: Você tem os ingredientes (atributos, dados) e o modo de preparo (métodos ou funções). A classe em si, neste exemplo, não faz nada tirando declarar que é uma receita de bolo, mas que para fazer o bolo precisaremos iniciar os preparativos (instanciar) e executá-la.

**Exemplo prático**

Sendo somente um molde, podemos pensar em qualquer coisa do mundo real. Imagine uma Pizza. Você com certeza pensou em um sabor que goste mais, ou que goste menos. Mas é tudo "Pizza". Logo, Pizza é a classe, contendo quantidade de pedaços, sabor da primeira metade, sabor da segunda metade, tipo de borda, tempo de preparo... inúmeros atributos para esta classe.

Além dos atributos, nós podemos ter algumas funções padrão da classe Pizza - como montar a pizza, assar e comer.

```md
Classe Pizza {
 - valor inteiro: quantidadeDePedaços; 
 - valor String: saborMetade1;
 - valor String: saborMetade2;
 - valor inteiro: tempoDePreparo; // em segundos
}

Pizza.montar(){
 // instruções para montagem da Pizza.
}

Pizza.assar(){
 // checar se já está montada, e colocá-la no fogo
}

Pizza.comer(){
 // melhor parte ;P 
}

```

O **nome da classe** é um identificador para a mesma, permitindo referenciá-la posteriormente na criação do objeto.

Os atributos também são identificados por um nome e possuem um tipo associado, podendo ou não ter um valor padrão/inicial.

Os métodos definem as funcionalidades da classe, tendo uma "assinatura" composta por um identificador, o tipo de valor de retorno e sua lista de argumentos/parâmetros. Estes parâmetros são identificados por seu tipo e nome.

## Visibilidade dos atributos e métodos

Os métodos, atributos das classes podem ter um modificador de visibilidade, sendo três categorias mais comuns:

- **public** O atributo/método pode ser acessado por qualquer outro objeto.
- **private** O atributo/método não pode ser acessado por nenhum outro objeto.
- **protected** O atributo/método de um objeto poderá ser acessado *apenas* por objetos de classes que sejam derivadas através de herança.

### Modificadores de acesso no Java

![[screenshot-20241220-025237Z-selected.png]]

## Objetos

Objetos são instâncias de [[#Classes]], sendo, através deles, que quase todo o processamento ocorre nos sistemas orientados à objetos.

Sendo um elemento que representa alguma entidade abstrata ou concreta, objetos similares são agrupados em classes.

Ainda sobre o exemplo da pizza, eu posso ter o seguinte:

```md
Objeto Margheritta = nova Pizza(); 
```

Dentro da programação orientada a objetos, um objeto não é muito diferente de uma variável normal, pois o mesmo adquire um espaço em memória armazenando seu estado.

### Encapsulamento

As técnicas de POO recomendam que a estrutura de um objeto e sua implementação a partir dos métodos sejam o mais privados possíveis; recomendam, inclusive, que os atributos de um objeto não devem ser visíveis externamente, isto é, não deve ser *tão* fácil acessar o sabor da segunda metade da pizza.

A partir disso surge o conceito de **Encapsulamento**

> [!note] Definição
> Encapsulamento é a prática de manter os dados de um objeto protegidos, permitindo que apenas métodos específicos da classe acessem ou modifiquem esses dados. Isso evita alterações acidentais ou inadequadas nos atributos e garante que o comportamento do objeto seja controlado e previsível.

### Ocultamento de Informação

Assim como criou-se a necessidade de encapsular os atributos de um objeto, houve a necessidade de criar um mecanismo de ocultar as informações.

Para utilizar esse componente oculto, apenas o mínimo necessário para sua execução/operação deve ser revelado, tornando-o público.

# Herança

> [!hot] Um mecanismo que permite que características comuns a diversas classes sejam herdadas em uma classe base, ou superclasse.

No exemplo da classe Pizza, podemos criar uma superclasse `Comida` de onde a classe `Pizza` herdará atributos como `nutrientes, valor calórico`, etc, bem como métodos onde `Pizza.comer()` seja uma herança da "superclasse" `Comida`.

> [!important]
> Cada classe derivada (ou subclasse) apresenta as características (estrutura e métodos) da classe base (ou superclasse) e acrescenta a elas o que for definido de particularidade.

# Polimorfismo

> [!hot] Princípio pelo qual duas subclasses de uma mesma superclasse podem invocar métodos de mesmo nome/assinatura, mas que possuam comportamentos distintos e específicos de cada classe derivada.

Para que o Polimorfismo seja utilizado, é necessário que os métodos definidos na classe derivada tenham exatamente a mesma assinatura do método definido na superclasse.

```java
// Superclasse
class Comida {
    public void preparar() {
        System.out.println("Preparando uma comida genérica...");
    }
}

// Subclasse Pizza
class Pizza extends Comida {
    @Override
    public void preparar() {
        System.out.println("Preparando uma pizza com molho, queijo e pepperoni...");
    }
}

// Subclasse Macarronada
class Macarronada extends Comida {
    @Override
    public void preparar() {
        System.out.println("Preparando uma macarronada com molho de tomate...");
    }
}

// Classe principal para testar o polimorfismo
public class Main {
    public static void main(String[] args) {
        // Polimorfismo em ação
        Comida comidaGen = new Comida();
        Comida comida1 = new Pizza();
        Comida comida2 = new Macarronada();

        // Chamando o método que é sobrescrito nas subclasses
        comida1.preparar(); // Saída: Preparando uma pizza com molho, queijo e pepperoni...
        comida2.preparar(); // Saída: Preparando uma macarronada com molho de tomate...
        comidaGen.preparar(); // Saída: Preparando uma comida genérica...
    }
}
```
