---
author: "Gabriel Coelho Soares"
title: "Programação Linear e Aplicações (PLA) - Aula 02 - Exercícios"
date: "2025-08-18"
description: "Exercícios conceituais sobre matrizes"
tags: ["notes", "mmd002"]
categories: ["ads-fatec"]
math: true
---


# Exercícios Matriciais - Programação Linear

**Disciplina:** Programação Linear e Aplicações
**Área:** Matemática - Matrizes
**Data:** 18/08/2025

---

## 📊 Matrizes Fornecidas

```
A = [1  -3]     B = [-7   3]     C = [5   0   2]     D = [2   6  -2]
    [3   8]         [ 6   8]         [-8   4   0]         [0   5   9]
                    [ 0  -1]                              [4   0  -1]
```

---

## 🔢 Exercícios e Soluções

### 1. Dimensão das Matrizes

**Pergunta:** Determine qual é a dimensão de cada matriz

**Método:** Contar linhas × colunas

- **A:** 2 linhas × 2 colunas = **2×2**
- **B:** 3 linhas × 2 colunas = **3×2**
- **C:** 2 linhas × 3 colunas = **2×3**
- **D:** 3 linhas × 3 colunas = **3×3**

**Resposta:** A₂ₓ₂; B₃ₓ₂; C₂ₓ₃; D₃ₓ₃

---

### 2. Elementos Negativos

**Pergunta:** Identifique quais são os elementos negativos dentre as matrizes

**Método:** Examinar cada posição aᵢⱼ (linha i, coluna j) procurando valores < 0

**Elementos encontrados:**

- **A:** a₁,₂ = -3
- **B:** b₁,₁ = -7; b₃,₂ = -1
- **C:** c₂,₁ = -8
- **D:** d₁,₃ = -2; d₃,₃ = -1

**Resposta:** a₁,₂; b₁,₁; b₃,₂; c₂,₁; d₁,₃; d₃,₃

---

### 3. Elementos Nulos

**Pergunta:** Identifique quais são os elementos nulo dentre as matrizes

**Método:** Examinar cada posição procurando valores = 0

**Elementos encontrados:**

- **A:** nenhum elemento nulo
- **B:** b₃,₁ = 0
- **C:** c₁,₂ = 0; c₂,₃ = 0
- **D:** d₂,₁ = 0; d₃,₂ = 0

**Resposta:** b₃,₁; c₁,₂; c₂,₃; d₂,₁; d₃,₂

---

### 4. Matriz Condicional E

**Pergunta:** Determina a matriz condicional E₂ₓ₃ calculando seus elementos conforme: **eᵢⱼ = 4j + 3i**

**Método:** Aplicar fórmula para cada posição (i=linha, j=coluna)

**Cálculos:**

- e₁,₁ = 4(1) + 3(1) = 7
- e₁,₂ = 4(2) + 3(1) = 11
- e₁,₃ = 4(3) + 3(1) = 15
- e₂,₁ = 4(1) + 3(2) = 10
- e₂,₂ = 4(2) + 3(2) = 14
- e₂,₃ = 4(3) + 3(2) = 18

**Resposta:** E = [7   11  15]
                [10  14  18]

---

### 5. Matriz Condicional F

**Pergunta:** Calcule os elementos da matriz linha de ordem 5 definida por **fᵢⱼ = j³ - 10**

**Método:** Como é matriz linha (1×5), i=1 fixo e j varia de 1 a 5

**Cálculos:**

- f₁,₁ = 1³ - 10 = 1 - 10 = -9
- f₁,₂ = 2³ - 10 = 8 - 10 = -2
- f₁,₃ = 3³ - 10 = 27 - 10 = 17
- f₁,₄ = 4³ - 10 = 64 - 10 = 54
- f₁,₅ = 5³ - 10 = 125 - 10 = 115

**Resposta:** F = [-9  -2  17  54  115]

---

## 🎯 Conceitos-Chave Aprendidos

- **Dimensão matricial:** sempre formato "linhas × colunas"
- **Notação de elementos:** aᵢⱼ indica elemento na linha i, coluna j
- **Matrizes condicionais:** elementos calculados por fórmulas matemáticas
- **Matriz linha:** formato 1×n (uma linha, n colunas)
