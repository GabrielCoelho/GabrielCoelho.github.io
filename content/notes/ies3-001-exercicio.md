---
author: "Gabriel Coelho Soares"
title: "Exercícios de Diagrama de Classes"
date: "2025-02-11"
description: "Relembrando conceitos UML"
tags: ["development", "ies300", "oop", "ilp007"]
categories: ["ads-fatec"]
---
# Exercício de classes

## 1. Uma Farmácia necessita informatizar seus processos

Considerar o seguinte cenário para esta empresa:

- a) Classe cliente
  - Atributos: Código, Nome, Endereço, Cidade, Fone, E-mail e CPF
  - Operações: Incluir, Alterar e Consultar;
- b) Classe funcionário
  - Atributos: Código, Nome, Endereço, Cidade, Fone, E-mail e Cargo
  - Operações: Incluir, Alterar e Consultar;
- c) Classe fornecedor
  - Atributos: Código, Nome, Endereço, Cidade, Fone, E-mail e CNPJ
  - Operações: Incluir, Alterar e Consultar;
- d) Classe produto
  - Atributos: Código, Descrição, Valor unitário e Quantidade
  - Operações: Incluir, Alterar e Consultar;
- e) Classe serviço
  - Atributos: Código, Nome, Tipo, Valor
  - Operações: Incluir, Alterar e Consultar;

> Criar as classes de forma aproveitar os dados aplicando generalização e especialização
(herança).

## Resolução

Abaixo irei postar a resolução em `plantuml` uma ferramenta para facilitar a criação
de diagramas UML via textual, aproximando já da maneira como será programado. Em
seguida, postarei a *imagem* realizada em sala pelo professor no Astah.

```plantuml
@startuml
    class Pessoa {
        -int codigo
        -String nome
        -String endereco
        -String cidade
        -String fone
        -String email
        +getCodigo()
        +setCodigo(int codigo)
        +getNome()
        +setNome(String nome)
        +getEndereco()
        +setEndereco(String endereco)
        +getCidade()
        +setCidade(String cidade)
        +getFone()
        +setFone(String fone)
        +getEmail()
        +setEmail(String email)
    }

    class Cliente {
        -String cpf
    }

    class Funcionario {
        -String cargo
        +getCargo()
        +setCargo(String cargo)
    }

    class Fornecedor {
        -String cnpj
        +getCnpj()
        +setCnpj(String cnpj)
    }

    class Produto {
        -int codigo
        -String descricao
        -double valorUnitario
        -int quantidade
        +getCodigo()
        +setCodigo(int codigo)
        +getDescricao()
        +setDescricao(String descricao)
        +getValorUnitario()
        +setValorUnitario(double valorUnitario)
        +getQuantidade()
        +setQuantidade(int quantidade)
    }

    class Servico {
        -int codigo
        -String nome
        -String tipo
        -double valor
        +getCodigo()
        +setCodigo(int codigo)
        +getNome()
        +setNome(String nome)
        +getTipo()
        +setTipo(String tipo)
        +getValor()
        +setValor(double valor)
    }

    class Modelo {
        +Inserir()
        +Alterar()
        +Consultar()
    }

    Pessoa <|-- Funcionario
    Pessoa <|-- Fornecedor
    Pessoa <|-- Cliente

    Modelo <|-- Pessoa
    Modelo <|-- Servico
    Modelo <|-- Produto
@enduml
```

![Resolucao-exercicio](resolucao-exercicio.jpg)
