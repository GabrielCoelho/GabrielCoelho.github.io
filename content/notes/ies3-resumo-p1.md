---
author: "Gabriel Coelho Soares"
title: "Engenharia de Software III - Resumo para p1"
date: "2025-04-07"
description: "Resumo do conteúdo passado em aula"
tags: ["development", "ies300"]
categories: ["ads-fatec"]
---
# Resumo Completo de Engenharia de Software III

## 1. Fundamentos de Orientação a Objetos

### Evolução dos Paradigmas de Programação
- **Sequencial** → **Procedural** → **Orientado a Eventos** → **Orientado a Objetos**
- POO surgiu para reutilização de código e redução do consumo de memória

### Conceitos Fundamentais
- **Classe**: Representação de objetos com mesma estrutura (ex: Carro)
- **Objeto**: Instância específica de uma classe (ex: Ford Ka, Toyota Corolla)
- **Atributos**: Características/dados da classe (ex: portas, motor)
- **Métodos**: Comportamentos/operações (ex: acelerar, frear)

### Princípios da POO
- Facilidade de manutenção
- Reutilização de código
- Legibilidade
- Simplificação de alterações

## 2. Diagrama de Classes UML

### Elementos Básicos
- Classes com nome, atributos e métodos
- Visibilidade: + (público), - (privado), # (protegido)

### Tipos de Relacionamentos
1. **Associação** (linha simples): Classes relacionadas
   - **Navegabilidade**: Indica direção de acesso (seta/x)
   - **Multiplicidade**: Quantificação do relacionamento (1, *, 0..1, etc.)

2. **Agregação** (losango não preenchido): Relação "tem um"
   - Objetos podem existir independentemente
   - Ex: Universidade tem alunos, ambos podem existir separadamente

3. **Composição** (losango preenchido): Relação "possui um"
   - Objetos dependentes do objeto principal
   - Ex: Carro possui rodas e motor; sem o carro, não fazem sentido

4. **Dependência** (linha pontilhada): Relação "usa um"
   - Uma classe utiliza outra temporariamente
   - Ex: Comissão de funcionário depende da venda

5. **Herança/Generalização** (seta triangular): Relação "é um"
   - Subclasse herda características da superclasse
   - Ex: Cliente, Funcionário e Fornecedor herdam de Pessoa

### Estereótipos
- **Entity**: Armazena informações do sistema
- **Boundary**: Interface com atores externos
- **Control**: Intermediário entre boundary e entity

## 3. Diagrama de Casos de Uso

### Elementos
- **Atores**: Entidades externas que interagem com o sistema
- **Casos de Uso**: Funcionalidades do sistema (elipses)
- **Limites do Sistema**: Retângulo delimitando o escopo

### Relacionamentos
- **Associação**: Comunicação entre ator e caso de uso
- **Include** (`<<include>>`): Funcionalidade obrigatória, sempre executada
  - Seta do caso base para o incluído
- **Extend** (`<<extend>>`): Funcionalidade opcional condicional
  - Seta do caso opcional para o caso base
- **Generalização**: Herança entre atores ou entre casos de uso

### Finalidade
- Comunicação com stakeholders
- Definição do escopo do sistema
- Visão das funcionalidades sob perspectiva do usuário

## 4. Diagrama de Sequência

### Elementos
- **Objetos/Atores**: Retângulos no topo
- **Linhas de Vida**: Linhas verticais tracejadas
- **Mensagens**: Setas horizontais entre linhas de vida
  - Síncronas: Seta com ponta preenchida
  - Assíncronas: Seta com ponta aberta
  - Retorno: Seta tracejada
- **Foco de Controle**: Retângulo vertical (ativação)

### Características
- Representação temporal (de cima para baixo)
- Mostra interações entre objetos
- Foco nos fluxos de mensagens e eventos
- Baseado em casos de uso específicos

## 5. Diagrama de Atividades

### Elementos
- **Estado Inicial**: Círculo preto sólido
- **Estado de Ação**: Retângulo com bordas arredondadas
- **Ponto de Decisão**: Losango com condições
- **Estado Final**: Círculo com ponto interno
- **Raias (Swimlanes)**: Divisão de responsabilidades

### Características
- Similar a fluxogramas
- Representa algoritmos e processos
- Detalha passos para concluir uma atividade
- Mostra fluxo de controle e decisões

## 6. Diagramas de Implementação

### Diagrama de Componentes
- Representa módulos físicos do software
- **Estereótipos**:
  - `<<executable>>`: Arquivos executáveis
  - `<<library>>`: Bibliotecas de funções
  - `<<table>>`: Repositórios de dados
  - `<<document>>`: Arquivos de documentação
  - `<<file>>`: Outros arquivos

### Diagrama de Implantação
- Representa hardware e infraestrutura física
- **Nós**: Máquinas físicas (servidores, dispositivos)
- **Associações**: Conexões entre nós com protocolos
- Pode incluir componentes dentro dos nós

