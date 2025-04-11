---
author: "Gabriel Coelho Soares"
title: "Resumo para prova - Programação de Scripts"
date: "2025-04-11"
description: "Compilação de conteúdos para a prova do primeiro bimestre"
tags: ["development", "ilp502"]
categories: ["ads-fatec"]
---

# Resumo Bimestral: Programação de Scripts (ILP502)

## 1. Fundamentos do Desenvolvimento Web

### 1.1 Estrutura Básica de Aplicações Web
- **Front-end**: HTML (estrutura), CSS (estilo) e JavaScript (funcionalidades)
- **Back-end**: Node.js/TypeScript (lógica de servidor e processamento)

> "HTML é o chassi do carro, CSS é o estilo e pintura, JavaScript são as funcionalidades, e Node.js é o motor que faz tudo funcionar."

### 1.2 Avaliação da Disciplina
- Fórmula: (((P1×0.3) + (T1×0.7))/2) + (((P2×0.3) + (T2×0.7))/2)
- Primeira etapa: HTML, CSS e JavaScript
- Segunda etapa: HTML, CSS, JavaScript, Node.js e TypeScript

## 2. HTML: Estrutura e Semântica

### 2.1 Fundamentos do HTML5
- Linguagem de marcação para estruturação de conteúdo web
- Mantida pela WHATWG (desde 2014) seguindo diretrizes da W3C
- Baseada em três pilares:
  1. Esquema de nomes (URI)
  2. Protocolo de acesso (HTTP/S)
  3. Linguagem de hipertexto (HTML)

### 2.2 Estrutura Básica de um Documento HTML
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Descrição da página">
    <title>Título da Página</title>
</head>
<body>
    <!-- Conteúdo da página -->
</body>
</html>
```

### 2.3 Elementos HTML Essenciais

#### 2.3.1 Categorias de Elementos
- **Metadata content**: Elementos que configuram o comportamento do documento (detalhados abaixo)
- **Flow content**: Maioria dos elementos visíveis (`<div>`, `<p>`, etc.)
- **Sectioning content**: `<article>`, `<section>`, `<nav>`, `<aside>`
- **Heading content**: `<h1>` a `<h6>`, `<hgroup>`
- **Phrasing content**: Elementos de texto (`<span>`, `<a>`, `<em>`, etc.)
- **Embedded content**: `<img>`, `<video>`, `<audio>`, `<iframe>`
- **Interactive content**: `<button>`, `<a>`, `<select>`, elementos de formulário

##### Metadata content em Detalhe
O professor enfatizou a importância desses elementos que devem estar dentro da tag `<head>`:

1. **`<meta>`**: Define metadados que não podem ser definidos por outras tags HTML.
   - `charset`: Define a codificação de caracteres do documento.
     ```html
     <meta charset="UTF-8">
     ```
   - `name` e `content`: Combinados para definir várias propriedades.
     - `viewport`: Controla como a página se adapta a diferentes dispositivos.
       ```html
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       ```
     - `description`: Descreve o conteúdo da página (importante para SEO).
       ```html
       <meta name="description" content="Descrição da página para motores de busca">
       ```
     - `keywords`: Palavras-chave para indexação (menor relevância hoje em SEO).
       ```html
       <meta name="keywords" content="HTML, CSS, JavaScript, programação">
       ```
     - `author`: Identifica o autor da página.
       ```html
       <meta name="author" content="Nome do Autor">
       ```

2. **`<title>`**: Define o título do documento que aparece na aba do navegador.
   ```html
   <title>Título da Página</title>
   ```
   - Essencial para SEO e experiência do usuário
   - Deve ser descritivo e conter palavras-chave relevantes
   - Recomendação: 50-60 caracteres para não ser cortado nos resultados de busca

3. **`<link>`**: Estabelece relações entre o documento atual e recursos externos.
   - Uso mais comum: vincular arquivos CSS.
     ```html
     <link rel="stylesheet" href="styles.css">
     ```
   - Outros usos:
     - Favicon (ícone da página):
       ```html
       <link rel="icon" href="favicon.ico" type="image/x-icon">
       ```
     - Fontes web:
       ```html
       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
       ```
     - Arquivos para dispositivos móveis:
       ```html
       <link rel="apple-touch-icon" href="apple-touch-icon.png">
       ```

4. **`<style>`**: Contém informações de estilo CSS diretamente no documento.
   ```html
   <style>
     body {
       font-family: Arial, sans-serif;
       margin: 0;
       padding: 20px;
     }
     h1 {
       color: #333;
     }
   </style>
   ```
   - Útil para estilos específicos da página
   - Em projetos maiores, geralmente é melhor usar CSS externo com `<link>`
   - Pode ser usado com o atributo `media` para estilos responsivos:
     ```html
     <style media="screen and (max-width: 768px)">
       /* Estilos para dispositivos móveis */
     </style>
     ```

#### 2.3.2 Elementos de Linha vs. Bloco
- **Elementos de linha**: `<a>`, `<img>`, `<span>`, etc.
- **Elementos de bloco**: `<div>`, `<p>`, `<section>`, `<header>`, etc.

#### 2.3.3 Tags Estruturais
- `<header>`: Cabeçalho da página ou seção
- `<nav>`: Menu de navegação
- `<main>`: Conteúdo principal
- `<section>`: Seção temática
- `<article>`: Conteúdo independente
- `<aside>`: Conteúdo relacionado mas separado
- `<footer>`: Rodapé da página ou seção

#### 2.3.4 Elementos de Formulário
- `<form>`: Container para elementos de formulário
- `<input>`: Campo de entrada (vários tipos)
- `<textarea>`: Área de texto multilinha
- `<select>` e `<option>`: Lista de seleção
- `<button>`: Botão
- Atributos: `name`, `id`, `required`, `placeholder`, `value`

#### 2.3.5 Metadados e SEO
- Importância para SEO e acessibilidade
- Influência na indexação por motores de busca
- Impacto direto na taxa de cliques nos resultados de busca
- Elementos essenciais:
  - `<title>`: O título da página é um dos fatores mais importantes para SEO
  - `<meta description>`: Resume o conteúdo da página (aparece nos resultados de busca)
  - `<meta viewport>`: Essencial para responsividade e SEO móvel
  - Tags semânticas: Ajudam os buscadores a entender a estrutura do conteúdo
  - URLs amigáveis: Complementam a estrutura de metadata para melhor indexação

### 2.4 Acessibilidade em HTML

#### 2.4.1 Fundamentos de Acessibilidade Web
- Conceito: tornar conteúdo web acessível a todos os usuários, independentemente de suas limitações físicas ou cognitivas
- Importância: atender usuários com deficiências visuais, auditivas, motoras ou cognitivas
- Aspecto legal: em muitos países, existem legislações que exigem acessibilidade em sites governamentais e comerciais
- Padrões: WCAG (Web Content Accessibility Guidelines) estabelece diretrizes de conformidade

#### 2.4.2 HTML Semântico para Acessibilidade
- Uso de tags com significado semântico em vez de divs genéricas
- Estrutura correta de cabeçalhos (`<h1>` a `<h6>`) para hierarquia de conteúdo
- Listas (`<ul>`, `<ol>`, `<dl>`) para conteúdo estruturado
- Tabelas com cabeçalhos apropriados e atributos de escopo
- Elementos de figura com legendas adequadas (`<figure>` e `<figcaption>`)

#### 2.4.3 Atributos ARIA (Accessible Rich Internet Applications)
ARIA é um conjunto de atributos que definem formas de tornar o conteúdo web mais acessível para pessoas com deficiências. O professor enfatizou sua importância para interfaces dinâmicas e interativas.

**Categorias principais de atributos ARIA:**

1. **Roles (Funções)**
   - Definem o que um elemento é ou faz
   - Exemplo: `role="navigation"`, `role="button"`, `role="alert"`, `role="search"`
   ```html
   <div role="button" tabindex="0">Clique aqui</div>
   ```

2. **Properties (Propriedades)**
   - Fornecem informações adicionais sobre um elemento
   - Exemplo: `aria-required="true"`, `aria-label="Descrição"`, `aria-expanded="false"`
   ```html
   <input type="text" aria-required="true" aria-label="Nome completo">
   ```

3. **States (Estados)**
   - Comunicam condições ou estados que podem mudar
   - Exemplo: `aria-disabled="true"`, `aria-hidden="true"`, `aria-selected="false"`
   ```html
   <button aria-pressed="false" onclick="toggleState(this)">Alternar</button>
   ```

4. **Landmarks (Pontos de referência)**
   - Identificam regiões da página para ajudar na navegação
   - Exemplo: `role="banner"`, `role="main"`, `role="contentinfo"`
   ```html
   <header role="banner">
     <h1>Título do Site</h1>
   </header>
   <main role="main">
     <!-- Conteúdo principal -->
   </main>
   <footer role="contentinfo">
     <!-- Informações de rodapé -->
   </footer>
   ```

**Atributos ARIA mais utilizados:**

- `aria-label`: Fornece um rótulo para elementos sem texto visível
  ```html
  <button aria-label="Fechar janela" class="close-btn">X</button>
  ```

- `aria-labelledby`: Refere-se a outro elemento que serve como rótulo
  ```html
  <div id="titulo">Preferências do usuário</div>
  <form aria-labelledby="titulo">
    <!-- Campos do formulário -->
  </form>
  ```

- `aria-describedby`: Aponta para um elemento que fornece descrição adicional
  ```html
  <input type="password" aria-describedby="pwd-help">
  <div id="pwd-help">A senha deve ter pelo menos 8 caracteres</div>
  ```

- `aria-live`: Define como as alterações em um elemento devem ser anunciadas
  - `off`: não anunciar (padrão)
  - `polite`: anunciar quando o usuário estiver ocioso
  - `assertive`: anunciar imediatamente (interrompendo)
  ```html
  <div aria-live="polite" id="status">Formulário enviado com sucesso!</div>
  ```

- `aria-expanded`: Indica se um elemento expansível está expandido ou recolhido
  ```html
  <button aria-expanded="false" onclick="toggleMenu()">Menu</button>
  ```

#### 2.4.4 Práticas Recomendadas para Acessibilidade
- Sempre fornecer texto alternativo para imagens (`alt`)
- Garantir contraste de cores adequado entre texto e fundo
- Implementar navegação por teclado (focus e tabindex)
- Usar formulários com labels associados corretamente
- Testar com leitores de tela (NVDA, JAWS, VoiceOver)
- Validar a acessibilidade usando ferramentas como axe, WAVE, Lighthouse

#### 2.4.5 Benefícios da Acessibilidade
- Inclusão de mais usuários, aumentando o alcance do site
- Conformidade com requisitos legais e éticos
- Melhoria na SEO (muitas práticas de acessibilidade beneficiam o SEO)
- Experiência de usuário aprimorada para todos os visitantes
- Código mais limpo, semântico e de fácil manutenção

## 3. CSS: Estilização e Layout

### 3.1 Introdução ao CSS
- CSS (Cascading Style Sheets): controla a apresentação visual dos elementos HTML
- Separa conteúdo da apresentação
- Melhora a manutenção, acessibilidade e eficiência de carregamento

### 3.2 Formas de Aplicação de CSS
1. **CSS Inline**: Diretamente no elemento com atributo `style`
   ```html
   <p style="color: blue; font-size: 16px;">Texto estilizado</p>
   ```

2. **CSS Interno**: Na seção `<head>` com tag `<style>`
   ```html
   <head>
     <style>
       p { color: blue; font-size: 16px; }
     </style>
   </head>
   ```

3. **CSS Externo**: Arquivo separado referenciado com `<link>`
   ```html
   <head>
     <link rel="stylesheet" href="styles.css">
   </head>
   ```

### 3.3 Seletores CSS
- **Seletores simples**:
  - Elemento: `p { color: blue; }`
  - Classe: `.destaque { font-weight: bold; }`
  - ID: `#cabecalho { background-color: gray; }`

- **Pseudo-seletores**:
  - Estados: `:hover`, `:focus`, `:active`
  - Posição: `:first-child`, `:nth-child()`

- **Seletores compostos**:
  - Descendentes: `.container p { margin: 10px; }`
  - Filhos diretos: `.container > p { padding: 5px; }`
  - Adjacentes: `h2 + p { font-weight: bold; }`

### 3.4 Propriedades CSS Fundamentais
- **Texto**: `font-family`, `font-size`, `font-weight`, `color`, `text-align`
- **Box Model**: `margin`, `padding`, `border`, `width`, `height`
- **Layout**: `display`, `position`, `float`
- **Visual**: `background-color`, `opacity`, `box-shadow`

### 3.5 Responsividade
- **Media Queries**: Aplicam estilos com base no tamanho da tela
  ```css
  @media (max-width: 768px) {
    .container { width: 100%; }
  }
  ```
- **Unidades relativas**: %, em, rem, vh, vw
- **Design Mobile-First**: Começar o design para dispositivos móveis
- **Layouts flexíveis**: Flexbox e Grid

## 4. Bootstrap Framework

### 4.1 Introdução ao Bootstrap
- Framework front-end para desenvolvimento de interfaces responsivas
- Agiliza o desenvolvimento com componentes pré-definidos
- Promove consistência visual e responsividade

### 4.2 Sistema de Grid
- Sistema baseado em 12 colunas
- Classes responsivas: col-sm, col-md, col-lg, col-xl
- Containers: `.container` (largura fixa) e `.container-fluid` (largura 100%)
- Rows (`.row`) agrupam colunas

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Coluna 1</div>
    <div class="col-md-6">Coluna 2</div>
  </div>
</div>
```

### 4.3 Componentes Principais
- **Navbar**: Menus de navegação responsivos
- **Cards**: Containers flexíveis para conteúdo
- **Buttons**: Botões estilizados
- **Forms**: Elementos de formulário
- **Modals**: Janelas de diálogo
- **Carousel**: Slideshows de imagens

### 4.4 Utilização do Bootstrap
- Inclusão via CDN:
  ```html
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  ```
- Ou download/instalação local

### 4.5 Bootstrap vs CSS Grid
- **Bootstrap**: Mais HTML (divs e classes) e menos CSS
- **CSS Grid**: Mais CSS e menos HTML, maior flexibilidade e controle
- Escolha depende das necessidades do projeto e preferência pessoal

## 5. JavaScript: Fundamentos

### 5.1 Introdução ao JavaScript
- Linguagem de programação que adiciona interatividade às páginas web
- Executado no navegador do cliente
- Essencial para manipulação do DOM e interação com o usuário

### 5.2 Inclusão de JavaScript
```html
<!-- Na tag head ou body -->
<script>
  console.log("JavaScript interno");
</script>

<!-- Arquivo externo -->
<script src="script.js"></script>
```

> Boa prática: Colocar scripts no final do body para não atrasar o carregamento da página.

### 5.3 Variáveis e Tipos de Dados

#### 5.3.1 Declaração de Variáveis
- `var`: Escopo global ou de função (evitar usar)
- `let`: Escopo de bloco (preferível)
- `const`: Constantes (não podem ser reatribuídas)

```javascript
var x = 1;         // Escopo global/função (não recomendado)
let y = 2;         // Escopo de bloco
const PI = 3.14;   // Constante
```

#### 5.3.2 Tipos de Dados Primitivos
- `Number`: Números inteiros e de ponto flutuante
- `String`: Texto (com aspas simples, duplas ou backticks)
- `Boolean`: true ou false
- `Undefined`: Variável declarada mas não inicializada
- `Null`: Ausência intencional de valor
- `Symbol`: Valor único e imutável (ES6)
- `BigInt`: Inteiros de precisão arbitrária (ES2020)

#### 5.3.3 Tipo Complexo
- `Object`: Coleção de propriedades (arrays, funções, datas, etc.)

```javascript
// Objetos
let pessoa = {nome: "Ana", idade: 30};

// Arrays (também são objetos)
let numeros = [1, 2, 3];

// Funções (também são objetos)
let somar = function(a, b) { return a + b; };
```

### 5.4 Hoisting
- Comportamento do JavaScript onde declarações são "elevadas" para o topo do escopo
- Apenas a declaração é elevada, não a inicialização

```javascript
console.log(x);  // undefined (não gera erro com var)
var x = 5;

console.log(y);  // ReferenceError (com let/const)
let y = 10;
```

### 5.5 Operadores

#### 5.5.1 Operadores Aritméticos
- `+`, `-`, `*`, `/`, `%`, `**`

#### 5.5.2 Operadores de Comparação
- `==`: Igual (com coerção de tipo)
- `===`: Estritamente igual (valor e tipo)
- `!=`: Diferente (com coerção de tipo)
- `!==`: Estritamente diferente (valor ou tipo)
- `>`, `<`, `>=`, `<=`

```javascript
5 == "5"    // true (com coerção de tipo)
5 === "5"   // false (tipos diferentes)
```

#### 5.5.3 Operadores Lógicos
- `&&` (AND), `||` (OR), `!` (NOT)

### 5.6 Estruturas de Controle

#### 5.6.1 Condicionais
```javascript
// if...else
if (condição) {
  // código se verdadeiro
} else if (outraCondição) {
  // código se outra condição for verdadeira
} else {
  // código se todas as condições forem falsas
}

// switch
switch (expressão) {
  case valor1:
    // código para valor1
    break;
  case valor2:
    // código para valor2
    break;
  default:
    // código padrão
}
```

#### 5.6.2 Loops
```javascript
// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do...while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// for...in (objetos)
const pessoa = {nome: "João", idade: 30};
for (let prop in pessoa) {
  console.log(prop + ": " + pessoa[prop]);
}

// for...of (iteráveis)
const numeros = [1, 2, 3];
for (let num of numeros) {
  console.log(num);
}
```

### 5.7 Arrays e Objetos
```javascript
// Array
let frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]);  // maçã
frutas.push("morango");  // adiciona ao final
frutas.pop();            // remove do final

// Objeto
let pessoa = {
  nome: "Carlos",
  idade: 25,
  saudacao: function() {
    return "Olá, " + this.nome;
  }
};

console.log(pessoa.nome);       // Carlos
console.log(pessoa.saudacao()); // Olá, Carlos
```

## 6. JavaScript e DOM

### 6.1 O que é DOM
- Document Object Model: representação dos elementos HTML na forma de objetos
- Permite que o JavaScript acesse e modifique o conteúdo da página

### 6.2 Seleção de Elementos
```javascript
// Por ID (retorna um único elemento)
const elemento = document.getElementById("meuId");

// Por classe (retorna um HTMLCollection)
const elementos = document.getElementsByClassName("minhaClasse");

// Por tag (retorna um HTMLCollection)
const paragrafos = document.getElementsByTagName("p");

// Por seletor CSS (retorna o primeiro elemento que corresponde)
const primeiro = document.querySelector(".minhaClasse");

// Por seletor CSS (retorna todos os elementos que correspondem)
const todos = document.querySelectorAll(".minhaClasse");
```

### 6.3 Manipulação do DOM
```javascript
// Alterar conteúdo
elemento.innerHTML = "<strong>Novo conteúdo</strong>";  // Com HTML
elemento.textContent = "Texto simples";                 // Apenas texto

// Alterar atributos
elemento.setAttribute("src", "nova-imagem.jpg");
elemento.id = "novoId";

// Alterar estilos
elemento.style.color = "red";
elemento.style.fontSize = "20px";

// Adicionar/remover classes
elemento.classList.add("destaque");
elemento.classList.remove("oculto");
elemento.classList.toggle("ativo");  // Adiciona se não existir, remove se existir

// Criar elementos
const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Novo parágrafo";

// Adicionar ao DOM
document.body.appendChild(novoParagrafo);  // Adiciona ao final
elemento.insertBefore(novoParagrafo, elemento.firstChild);  // Adiciona no início

// Remover elementos
elemento.remove();  // Remove o próprio elemento
elemento.removeChild(elemento.firstChild);  // Remove um filho
```

### 6.4 Eventos
```javascript
// Método tradicional
elemento.onclick = function() {
  alert("Clicou!");
};

// addEventListener (recomendado)
elemento.addEventListener("click", function(event) {
  alert("Clicou!");
  event.preventDefault();  // Previne comportamento padrão
});

// Removendo event listener
function meuHandler() {
  alert("Clicou!");
}
elemento.addEventListener("click", meuHandler);
elemento.removeEventListener("click", meuHandler);
```

#### 6.4.1 Tipos de Eventos Comuns
- Mouse: `click`, `dblclick`, `mouseover`, `mouseout`, `mousedown`, `mouseup`
- Teclado: `keydown`, `keyup`, `keypress`
- Formulário: `submit`, `change`, `focus`, `blur`
- Documento: `DOMContentLoaded`, `load`

#### 6.4.2 Propagação de Eventos (Bubbling e Capturing)
- **Bubbling**: Evento dispara no elemento mais interno e propaga para fora
- **Capturing**: Evento dispara no elemento mais externo e propaga para dentro
- Controle com o terceiro parâmetro do addEventListener:
  `elemento.addEventListener("click", handler, useCapture)` (padrão é false - bubbling)

#### 6.4.3 Event Object
- Contém informações sobre o evento
- Propriedades: `target`, `currentTarget`, `type`, `clientX/Y`, etc.
- Métodos: `preventDefault()`, `stopPropagation()`
