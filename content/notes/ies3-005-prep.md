---
author: "Gabriel Coelho Soares"
title: "Diagrama de Sequência - Preparação para aula"
date: "2025-03-17"
description: "Diagrama de Sequência UML - Características e Componentes"
tags: ["development", "ies300", "oop"]
categories: ["ads-fatec"]
---

# Diagramas de Sequência UML: Conceitos e Exemplos

## Fundamentos do Diagrama de Sequência

O Diagrama de Sequência é um dos diagramas comportamentais mais importantes na Linguagem de Modelagem Unificada (UML), focado em ilustrar as interações entre objetos ao longo do tempo. Este diagrama é especialmente útil para representar o fluxo de mensagens, eventos e ações que ocorrem em um cenário específico de um sistema orientado a objetos.

### Características Principais

- **Dimensão temporal**: Representa a sequência cronológica de eventos e mensagens
- **Foco nas interações**: Demonstra como objetos se comunicam entre si
- **Baseado em casos de uso**: Geralmente deriva de um caso de uso específico, detalhando sua implementação

> "O Diagrama de Sequência determina a sequência de eventos que ocorrem em um determinado processo, identificando quais condições devem ser satisfeitas e quais métodos devem ser disparados entre os objetos envolvidos."

## Componentes Fundamentais

### 1. Atores

Representam entidades externas ao sistema que interagem com ele, iniciando processos através de eventos. São os mesmos atores presentes nos Diagramas de Caso de Uso.

### 2. Objetos

Instâncias de classes que participam da interação. São representados por retângulos com o nome do objeto seguido de dois pontos e o nome da classe:

```
nomeDoObjeto : NomeDaClasse
```

### 3. Linha de Vida

Linha vertical tracejada que representa a existência do objeto ao longo do tempo, partindo do retângulo que representa o objeto.

### 4. Foco de Controle (Ativação)

Retângulo vertical mais espesso sobreposto à linha de vida, indicando o período em que o objeto está ativamente participando do processo ou executando uma operação.

### 5. Mensagens

Comunicações entre objetos, representadas por setas horizontais entre linhas de vida. Podem ser:

- **Mensagens síncronas**: Setas com ponta preenchida (→)
- **Mensagens assíncronas**: Setas com ponta aberta (→)
- **Mensagens de retorno**: Setas tracejadas (- - →)
- **Autochamadas**: Mensagens que um objeto envia para si mesmo

### 6. Condições

Expressas entre colchetes ([condição]), indicam que uma mensagem só será enviada se a condição for verdadeira.

## Exemplos de Diagramas de Sequência

### Exemplo 1: Sistema de Login

![Sistema de Login](https://miro.medium.com/v2/resize:fit:1200/1*7Z16llzUVXCbzSU45hFPHg.png)¹

```
Usuário                    TelaLogin                   SistemaAutenticação                BancoDados
   |                           |                               |                               |
   |---(1) acessarSistema()-->|                               |                               |
   |                           |                               |                               |
   |                           |<--(2) exibirTelaLogin()------|                               |
   |                           |                               |                               |
   |---(3) inserirCredenciais(login, senha)-->|               |                               |
   |                           |                               |                               |
   |                           |---(4) validarUsuario(login, senha)-->|                       |
   |                           |                               |                               |
   |                           |                               |---(5) consultarUsuario(login)-->|
   |                           |                               |                               |
   |                           |                               |<--(6) retornarDados()---------|
   |                           |                               |                               |
   |                           |                               |---(7) verificarSenha()------->|
   |                           |                               |                               |
   |                           |<--(8) retornarResultado()-----|                               |
   |                           |                               |                               |
   |<--(9) exibirMensagem()---|                               |                               |
```

### Exemplo 2: Processo de Compra Online

```
Cliente                    InterfaceUsuario                CarrinhoCompras                  Pagamento                   Estoque
   |                             |                              |                               |                           |
   |---(1) selecionarProduto()-->|                              |                               |                           |
   |                             |                              |                               |                           |
   |                             |---(2) adicionarAoCarrinho()-->|                               |                           |
   |                             |                              |                               |                           |
   |                             |<--(3) atualizarExibição()---|                               |                           |
   |                             |                              |                               |                           |
   |---(4) finalizarCompra()---->|                              |                               |                           |
   |                             |                              |                               |                           |
   |                             |---(5) calcularTotal()------->|                               |                           |
   |                             |                              |                               |                           |
   |                             |<--(6) retornarValorTotal()--|                               |                           |
   |                             |                              |                               |                           |
   |                             |---(7) solicitarDadosPagamento()-->|                         |                           |
   |                             |                              |                               |                           |
   |---(8) informarDadosPagamento()-->|                         |                               |                           |
   |                             |                              |                               |                           |
   |                             |---(9) processarPagamento()------------------->|              |                           |
   |                             |                              |                               |                           |
   |                             |                              |                               |---(10) verificarEstoque()-->|
   |                             |                              |                               |                           |
   |                             |                              |                               |<--(11) confirmarEstoque()--|
   |                             |                              |                               |                           |
   |                             |<--(12) confirmarTransação()----------------------|          |                           |
   |                             |                              |                               |                           |
   |<--(13) exibirComprovante()--|                              |                               |                           |
```

### Exemplo 3: Sistema de Agendamento Médico

```
Paciente                   RecepcionistaVirtual           AgendaMédicos                    Notificações
   |                              |                             |                                |
   |---(1) solicitarConsulta()--->|                             |                                |
   |                              |                             |                                |
   |                              |---(2) verificarDisponibilidade()-->|                        |
   |                              |                             |                                |
   |                              |<--(3) retornarHorariosDisponiveis()--|                      |
   |                              |                             |                                |
   |<--(4) apresentarOpções()-----|                             |                                |
   |                              |                             |                                |
   |---(5) selecionarHorário()---->|                             |                               |
   |                              |                             |                                |
   |                              |---(6) reservarHorário()---->|                                |
   |                              |                             |                                |
   |                              |                             |---(7) registrarAgendamento()--->|
   |                              |                             |                                |
   |                              |<--(8) confirmarReserva()---|                                |
   |                              |                             |                                |
   |<--(9) enviarConfirmação()---|                             |                                |
   |                              |                             |                                |
   |                              |                             |<--(10) enviarLembrete()--------|
```

## Benefícios dos Diagramas de Sequência

1. **Visualização temporal**: Permite visualizar claramente a ordem cronológica das interações
2. **Detalhamento de processos**: Oferece uma visão detalhada de como um processo específico é implementado
3. **Identificação de responsabilidades**: Esclarece quais objetos são responsáveis por quais operações
4. **Comunicação eficiente**: Facilita a comunicação entre desenvolvedores e stakeholders
5. **Validação de requisitos**: Ajuda a validar se os requisitos de interação estão sendo atendidos corretamente

## Boas Práticas na Elaboração

- **Mantenha a simplicidade**: Foque em um cenário específico por diagrama
- **Utilize condições quando necessário**: Represente fluxos condicionais com colchetes
- **Nomeie as mensagens adequadamente**: Use nomes claros que indiquem a ação realizada
- **Inclua parâmetros relevantes**: Adicione parâmetros às mensagens quando necessário
- **Organize cronologicamente**: Mantenha a ordem temporal das mensagens de cima para baixo
- **Destaque retornos importantes**: Use mensagens de retorno para valores significativos

---

### Referências Bibliográficas

- BOOCH, G.; RUMBAUGH, J.; JACOBSON, I. **UML: Guia do Usuário**. 2ª ed. Rio de Janeiro: Elsevier, 2012.
- FOWLER, M. **UML Distilled: A Brief Guide to the Standard Object Modeling Language**. 3ª ed. Addison-Wesley, 2003.
- GUEDES, G. T. A. **UML 2: Uma Abordagem Prática**. 3ª ed. São Paulo: Novatec, 2018.
- OMG. **Unified Modeling Language Specification**. Object Management Group, 2017.

___
¹ Os diagramas apresentados são exemplos didáticos para ilustrar a estrutura e a aplicação de Diagramas de Sequência em diferentes contextos. Em ambientes de desenvolvimento reais, estes diagramas seriam criados com ferramentas CASE específicas como Astah, Enterprise Architect ou Visual Paradigm.
