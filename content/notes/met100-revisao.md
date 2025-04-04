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

| Nº de acidentes (xi) | Frequência (fi) |
|----------------------|-----------------|
| 0                    | 25              |
| 1                    | 9               |
| 2                    | 15              |
| 3                    | 12              |
| 4                    | 8               |
| 5                    | 5               |
| 6                    | 3               |
| 7                    | 2               |
| **Total**            | **79**          |
