---
author: "Gabriel Coelho Soares"
title: "Estatística Aplicada - Exercícios de Revisão"
date: "2025-04-03"
description: "Revisão do conteúdo de aula"
tags: ["met100"]
categories: ["ads-fatec"]
math: true
---

# Revisão para Prova

1.

![tabela 1](tabela1.png)

| Classe   | fi  | FR%a | FR  | Pm  | Pm * fi| Pm²    | Pm². fi   |
|--------  |---- |----  |---- |---- |--------|-----   |--------   |
| 70├─90   | 28  | 14   | 14  | 80  | 2.240  | 6400   | 179.200   |
| 90├─110  | 38  | 33   | 19  | 100 | 3.800  | 10000  | 380.000   |
| 110├─130 | 40  | 53   | 20  | 120 | 4.800  | 14400  | 576.000   |
| 130├─150 | 44  | 75   | 22  | 140 | 6.160  | 19600  | 862.400   |
| 150├─170 | 20  | 85   | 10  | 160 | 3.200  | 25600  | 512.000   |
| 170├─190 | 14  | 92   | 7   | 180 | 2.520  | 32400  | 453.600   |
| 190├─210 | 16  | 100  | 8   | 200 | 3.200  | 40000  | 640.000   |
| Total    | 200 |      | 100 |     | 25.920 | 148400 | 3.603.200 |

Calcule:

a. Média amostral

$$
\begin{align}
\bar{x} = \frac{\sum{f_i \cdot P_m}}{\sum{f_i}} \\\
\bar{x} = \frac{25920}{200} = 129.6
\end{align}
$$

b. Variância amostral

$$
\begin{align}
s^2 = \frac{1}{\sum{f_i} -1} \times \left(\sum{f_i \cdot (P_m)^2} - \frac{\sum{f_i \cdot P_m}^2}{\sum{f_i}}\right) \\\
s^2 = \frac{1}{199} \times \left(3603200 - \frac{671846400}{200}\right) \\\
s^2 = \frac{1}{199} \times \left(3603200 - 3359232\right) \\\
s^2 = \frac{1}{199} \times 243968 \\\
s^2 = 1225.96
\end{align}
$$

c. Desvio padrão amostral

$$
s^2 = 1225.96
s = \sqrt{1225.96} = 35.01
$$

d. O CV e sua classificação

$$
CV = \frac{s}{\bar{x}} \times 100 = \frac{35.01}{129.6} \times 100 = 27.016\\%
$$

Média dispersão

2.

$$
P = \frac{n+1}{2} = \frac{63}{2} = 31.5
$$

$$
\text{mediana} = \frac{110+111}{2} = 110.5
$$

3.

a.

| Situação     | Frequência (fi) |
|--------------|-----------------|
| APROVADOS    | 16              |
| REPROVADOS   | 9               |
| **Total**    | **25**          |

REPROVADOS

| Nota (xi) | Frequência (fi) | xi * fi | xi^2 | xi^2 * fi |
|-----------|-----------------| ----- | ---- |---- |
| 3         | 2               | 6 | 9 | 18 |
| 4         | 7               | 28 | 16 | 112 |
| **Total** | **9**           | 34 | |   130 |

APROVADOS

| Nota (xi) | Frequência (fi) | xi * fi | xi^2 | xi^2 * fi |
|-----------|-----------------| --- | ---- | ---- |
| 5         | 7               | 35 | 25 | 175 |
| 6         | 6               | 36 | 36 | 216 |
| 7         | 1               | 7 | 49 | 49 |
| 8         | 2               | 16 | 64 | 128 |
| **Total** | **16**          | 94 |    | 568 |

b.

Grupo 1 - APROVADOS

Média
$$
\bar{x} = \frac{\sum{xi * fi}}{fi} = \frac{94}{16} \approxeq 5.88
$$

Mediana:
$$
Md = \frac{\sum{fi} + 1}{2} = 8.5 \rightarrow \text{mediana = 6}
$$

Moda: 5 pois a frequência é maior.

Grupo 2 - REPROVADOS

Média
$$
\bar{x} = \frac{\sum{xi * fi}}{fi} = \frac{34}{9} = 3.77
$$

Mediana:
$$
Md = \frac{\sum{fi} + 1}{2} = \frac{10}{2} = 5 \rightarrow \text{mediana = 4}
$$

Moda: 4, pois a frequência é maior.

c. Variância e desvio padrão dos dois grupos

APROVADOS
$$
\begin{align}
s^2 = \frac{1}{n-1}\left[\sum(x_i^2 \times f_i) - \frac{(\sum x_i \times f_i)^2}{\sum f_i}\right] \\\
s^2 = \frac{1}{15}\left[568 - \frac{(8836}{16}\right] \\\
s^2 = \frac{1}{15}\left[568 - 552.25\right] \\\
s^2 = \frac{1}{15} \times 15.75 \\\
\color{red} s^2 = 1.05 \\\
s = \sqrt{1.05} = \color{red} 1.02
\end{align}
$$

REPROVADOS
$$
\begin{align}
s^2 = \frac{1}{n-1}\left[\sum(x_i^2 \times f_i) - \frac{(\sum x_i \times f_i)^2}{\sum f_i}\right] \\\
s^2 = \frac{1}{8}\left[130 - \frac{(1156}{9}\right] \\\
s^2 = \frac{1}{8}\left[130 - 128.44 \right] \\\
s^2 = \frac{1}{8} \times 1.56 \\\
\color{red} s^2 = 0.195 \\\
s = \sqrt{0.195} = \color{red} 0.44
\end{align}
$$

d. Ache o CV dos grupos

APROVADOS
$$
CV = \frac{1.02}{5.88} \times 100 \approxeq 17.4\\%
$$

REPROVADOS
$$
CV = \frac{0.44}{3.77} \times 100 \approxeq 11.8\\%
$$

e. Qual teve maior variação?

**O Grupo dos aprovados teve maior variação.**

4.

# Tabela de Frequência de Acidentes

| Nº de acidentes (xi) | Frequência (fi) | xi * fi |
|----------------------|-----------------| ------- |
| 0                    | 20              | 0   |
| 1                    | 10              | 10 |
| 2                    | 16              | 32 |
| 3                    | 9               | 27 |
| 4                    | 6               | 24 |
| 5                    | 5               | 25 |
| 6                    | 3               | 18 |
| 7                    | 1               | 7 |
| **Total**            | **70**          | 143 |

a. 20 motoristas não sofreram acidentes
b. 15 motoristas sofreram *ao menos* 4 acidentes
c.

$$
\frac{(16 \times 100)}{70} = 22.85\\% \text{dos motoristas sofreram 2 acidentes}
$$

d. média

$$
\bar{x} = \frac{\sum{x_i * f_i}}{f_i} = \frac{143}{70} = 2.04
$$

e. mediana

$$
Md = \frac{\sum{f_i} + 1}{2} = \frac{71}{2} = 35.5
$$
**Portanto, a mediana de acidentes/motorista = 2**

f. A moda é não haver acidentes (0 acidentes)

5.

$$
\begin{align}
528 = \frac{600h + 420m}{h+m} \\\
528h + 528m = 600h + 420m \\\
528m - 420m = 600h - 528h \\\
108m = 72h
\text{relacao: 108/72} \\\
\text{h/m = 1.5} \\\
\sqrt[3]{1.5} = \color{red}1.14
\end{align}
$$

6.

A = 40 alunos media 6.0
B = 25 alunos media 5.0

Sairam 5 da A e suas notas eram:

- 8.0
- 7.0
- 7.0
- 7.0
- 8.0
- soma: 37

A = 35 alunos media ?
B = 30 alunos media ?

Sala A sem os 5 alunos
$$
6\times40 = 240-37 = 203
$$

$$
\frac{203}{35} = \color{red}5.8
$$

Sala B com os 5 alunos
$$
5\times 25 = 125 + 37 = 162
$$

$$
\frac{162}{30} = \color{red}5.4
$$

7.

$$
f_i = -i^2 + 8i + 9
$$

Primeiro dia i = 0
$$
f_i = -0^2 + 8 \times 0 + 9 = 9
$$

segundo dia i = 1
$$
f_i = -1^2 + 8 \times 1 + 9 = 16
$$

terceiro dia i = 2
$$
f_i = -2^2 + 8 \times 2 + 9 = -4 + 16+9 = 21
$$

quarto dia i = 3
$$
f_i = -3^2 + 8 \times 3 + 9 = -9 + 24 + 9 = 24
$$

quinto dia i = 4
$$
f_i = -4^2 + 8 \times 4 + 9 = -16 + 32 + 9 = 25
$$

sexto dia i = 5
$$
f_i = -5^2 + 8 \times 5 + 9 = -25 + 40 + 9 = 24
$$

setimo dia i = 6
$$
f_i = -6^2 + 8 \times 6 + 9 = -36 + 48 + 9 = 21
$$

| xi | fi | xi * fi | fiac |
| :-: | :-: | :-: | :-: |
| 0 | 9 | 0 | 9 |
| 1  | 16 | 16 | 25 |
| 2  | 21 | 42 | 46 |
| 3  | 24 | 72 | 70 |
| 4  | 25 | 100 | 95 |
| 5  | 24 | 120 | 119 |
| 6 | 21 | 126 | 140 |
| total | 140 | 476 | |

Média:

$$
\bar{x} = \frac{\sum{xi * fi}}{fi} = \frac{476}{140} = 3.4
$$

Mediana:
$$
Md = \frac{\sum{f_i} + 1 }{2} = \frac{141}{2} = 70.5
$$
Mediana se encontra entre 3 e 4, portanto é 3.5

Moda: 4 pela maior frequência

SOMA:
$$
3.4 + 3.5 + 4 = 10.9
$$

8.

H -> 35 de 140 = 25% \
M -> 10 de 100 = 10% \
C -> 15 de 30 = 50%

a\)
$$
\frac{25\\% + 10\\% + 50\\%}{3} = \frac{85\\%}{3} = 28,33\\% \approx 28\\%
$$

b\)

$$
(200 * 0.25) + (80 * 0.1) + (20 * 0.5) = 50 + 8 + 10 = 68
$$

9.

| Cor | Custo por metro (R$) | Quantidade (fi) | xi·fi | xi² | fi·xi² | fiac | (xi·fi)² |
|-----|---------------------|--------------|--------|------|--------|------|----------|
| Branca | 6,00 | 41 | 246,00 | 36,00 | 1.476,00 | 41 | 60.516,00 |
| Verde | 8,00 | 52 | 416,00 | 64,00 | 3.328,00 | 93 | 173.056,00 |
| Preta | 9,00 | 93 | 837,00 | 81,00 | 7.533,00 | 186 | 700.569,00 |
| Total | - | 186 | 1499,00 | - | 12.337,00 | - | 934.141,00 |

a) O custo médio geral das mangueiras

$$\bar{x} = \frac{\sum_{i=1}^{n} x_i \cdot f_i}{\sum_{i=1}^{n} f_i}$$

$$\bar{x} = \frac{6,00 \cdot 41 + 8,00 \cdot 52 + 9,00 \cdot 93}{41 + 52 + 93}$$

$$\bar{x} = \frac{246,00 + 416,00 + 837,00}{186}$$

$$\bar{x} = \frac{1499,00}{186}$$

$$\bar{x} \approx 8,05$$

b) O custo mediano geral das mangueiras

$$
\frac{186+1}{2} = 93.5
$$

Portanto a Mediana = R$ 8,50 (estando entre o 8 e 9 reais)

c) O custo modal geral das mangueiras

Moda = R$ 9,00

d) O desvio padrão

$$s^2 = \frac{\sum_{i=1}^{n} f_i \cdot x_i^2 - \frac{(\sum_{i=1}^{n} f_i \cdot x_i)^2}{\sum_{i=1}^{n} f_i}}{\sum_{i=1}^{n} f_i - 1}$$ \
$$s^2 = \frac{12337 - \frac{(1499)^2}{186}}{186 - 1}$$ \
$$s^2 = \frac{12337 - \frac{2247001}{186}}{185}$$ \
$$s^2 = \frac{12337 - 12080,650537634}{185}$$ \
$$s^2 = \frac{256,349462366}{185}$$ \
$$s^2 \approx 1,39$$ \
$$s = \sqrt{s^2} = \sqrt{1,39} \approx 1,17$$

e) CV e sua classificação

$$CV = \frac{s}{\bar{x}} \cdot 100\%$$
$$CV = \frac{1,18}{8,05} \cdot 100\%$$
$$CV \approx 14,64\%$$

Classificação do CV: temos uma baixa dispersão.

10.

3.1) Rol

| Ramos | Folhas |
|-------|--------|
| 5 | 1, 1, 1, 2, 2 |
| 6 | 0, 0, 1, 2, 3, 4, 7 |
| 7 | 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 |
| 8 | 1, 1, 2, 3, 4, 4, 4, 8 |
| 9 | 1, 2, 2, 2, 3, 4 |

| Ordem | Classes | Pm | fi | fiac | fr | fr% | fr%ac |
|-------|---------|-----|----|----|-----|-----|-------|
| 1ª | 50 \|-- 60 | 55 | 5 | 5 | 0,139 | 13,9 | 13,9 |
| 2ª | 60 \|-- 70 | 65 | 7 | 12 | 0,194 | 19,4 | 33,3 |
| 3ª | 70 \|-- 80 | 75 | 10 | 22 | 0,278 | 27,8 | 61,1 |
| 4ª | 80 \|-- 90 | 85 | 8 | 30 | 0,222 | 22,2 | 83,3 |
| 5ª | 90 \|-- 100 | 95 | 6 | 36 | 0,167 | 16,7 | 100,0 |
| Total | | | 36 | | 1,000 | 100,0 | |

Respostas corrigidas às perguntas

a) Quantos % tiraram notas abaixo de 80?
   Olhando para a tabela, na linha da classe 70 \|-- 80, a fr%ac é 61,1%.
   **Resposta:** 61,1% dos valores estão abaixo de 80.

b) Quantos % dos alunos tiraram notas acima ou igual a 80?
   100% - 61,1% = 38,9%
   **Resposta:** 38,9% dos valores estão acima ou igual a 80.

c) Quantos alunos ficaram com notas no intervalo de [60;80[?
   Somando as frequências absolutas das classes 60 \|-- 70 e 70 \|-- 80:
   7 + 10 = 17 alunos
   **Resposta:** 17 alunos ficaram com notas entre 60 (inclusive) e 80 (exclusive).

d) Quantos alunos tiraram notas abaixo de 90?
   Olhando para a tabela, na linha da classe 80 \|-- 90, a fiac é 30.
   **Resposta:** 30 alunos tiraram notas abaixo de 90.

11.

I. A coleta de dados pertence à primeira fase da construção de um processo estatístico? **V** \
II. A estatística era bem rudimentar nos primórdios tempos, porém foi no século XVIII que ela deu um grande impulso ou avanço. **V** \
III. Dados brutos são os dados organizados em ordem crescente ou decrescente. **F** \
IV. A variância foi criada tendo em vista que a amplitude total não é uma boa medida, pois ela toma somente os valores extremos. **F** \
V. A estatística trabalha com quantidade, aproximação, projeção. **V** \
VI. O CV (coeficiente de variação) foi criado, tendo em vista que desvio padrão eleva todos valores originais ao quadrado. **F** \
VII. As três medidas de posição são assim chamadas porque elas ficam sempre na posição central, em qualquer situação. **F** \
VIII. A secretaria da Fazenda fez um levantamento em duas empresas da região de Limeira, para se fazer um estudo sobre o pagamento do ICMS. Nesse caso a população de interesse é o pagamento do ICMS. **F**

resposta correta: Letra e) somente três afirmações verdadeiras
