---
author: "Gabriel Coelho Soares"
title: "Programação Orientada a Objetos - Resumo para Prova 1"
date: "2025-04-01"
description: "Resumo geral de todos os conceitos que vimos em POO"
tags: ["development", "ilp007", "oop"]
categories: ["ads-fatec"]
---

# Programação Orientada a Objetos em Java: Guia Abrangente para a Avaliação (ILP007)

> Este guia sistematiza os principais conceitos e práticas da Programação Orientada a Objetos em Java, conforme abordado na disciplina ILP007, e constitui material essencial para preparação para a avaliação.

## Fundamentos Conceituais da Orientação a Objetos

### Paradigma Orientado a Objetos

> "A Programação Orientada a Objetos representa uma abordagem de desenvolvimento que organiza o software como coleções de objetos que incorporam estrutura de dados e comportamentos."

A compreensão deste paradigma exige o domínio de quatro princípios fundamentais, detalhados a seguir.

### Princípios Essenciais

#### 1. Encapsulamento
- **Definição**: Mecanismo que combina dados e métodos em uma unidade protegida, controlando o acesso aos componentes internos do objeto.
- **Implementação**: Utilização de modificadores de acesso (`private`, `protected`, `public`, default).
- **Benefícios**: Segurança de dados, redução da complexidade, aumento da modularidade.

#### 2. Herança
- **Definição**: Mecanismo que permite uma classe herdar atributos e métodos de outra classe.
- **Implementação**: Utilização da palavra-chave `extends`.
- **Taxonomia**: Superclasse (classe base) → Subclasse (classe derivada).
- **Limitação em Java**: Herança única (uma subclasse só pode estender uma superclasse).

#### 3. Polimorfismo
- **Definição**: Capacidade de objetos de classes diferentes responderem à mesma mensagem de formas distintas.
- **Tipos**:
  - **Sobrescrita (Override)**: Reimplementação de método da superclasse na subclasse.
  - **Sobrecarga (Overload)**: Múltiplas implementações do mesmo método com parâmetros diferentes.
- **Assinatura de método**: Nome + Parâmetros (tipos e ordem).

#### 4. Abstração
- **Definição**: Processo de identificar características relevantes e comportamentos essenciais.
- **Implementação**: Classes abstratas e interfaces.
- **Objetivo**: Redução da complexidade através de modelos representativos.

## Estruturas Fundamentais em Java

### 1. Classes e Objetos

```java
public class Conta {
    // Atributos (estado)
    private int numero;
    private String titular;
    private double saldo;
    
    // Construtor
    public Conta(int numero, String titular) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0.0;
    }
    
    // Métodos (comportamento)
    public void depositar(double valor) {
        this.saldo += valor;
    }
    
    public boolean sacar(double valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }
    
    // Métodos de acesso (getters e setters)
    public double getSaldo() {
        return this.saldo;
    }
}
```

#### Instanciação de Objetos
```java
Conta contaCliente = new Conta(1234, "João Silva");
contaCliente.depositar(1000.0);
```

### 2. Classes Abstratas

```java
public abstract class Veiculo {
    protected String modelo;
    protected int ano;
    
    public Veiculo(String modelo, int ano) {
        this.modelo = modelo;
        this.ano = ano;
    }
    
    public abstract void mover();
    
    public void exibirDados() {
        System.out.println("Modelo: " + modelo + ", Ano: " + ano);
    }
}

public class Carro extends Veiculo {
    private int numPortas;
    
    public Carro(String modelo, int ano, int numPortas) {
        super(modelo, ano);
        this.numPortas = numPortas;
    }
    
    @Override
    public void mover() {
        System.out.println("Carro em movimento");
    }
}
```

### 3. Interfaces

```java
public interface Autenticavel {
    boolean autenticar(String senha);
}

public class Gerente extends Funcionario implements Autenticavel {
    private String senha;
    
    // Construtor e outros métodos
    
    @Override
    public boolean autenticar(String senha) {
        return this.senha.equals(senha);
    }
}
```

## Mecanismos Avançados em Java

### 1. Construtores e Sobrecarga de Construtores

```java
public class Produto {
    private String nome;
    private double preco;
    private int quantidade;
    
    // Construtor padrão
    public Produto() {
        this.nome = "Sem nome";
        this.preco = 0.0;
        this.quantidade = 0;
    }
    
    // Construtor com nome
    public Produto(String nome) {
        this.nome = nome;
        this.preco = 0.0;
        this.quantidade = 0;
    }
    
    // Construtor completo
    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    
    // Construtor usando outro construtor
    public Produto(String nome, double preco) {
        this(nome, preco, 1); // Chama o construtor completo
    }
}
```

#### Aplicações da Sobrecarga de Construtores
- **Flexibilidade na criação de objetos**: Permite múltiplas formas de inicialização.
- **Valores padrão**: Facilita a definição de valores iniciais.
- **Reutilização de código**: Evita duplicação de código de inicialização.

### 2. Atributos Estáticos (Static)

```java
public class Contador {
    private static int contagem = 0; // Atributo estático
    private int id;
    
    public Contador() {
        contagem++;
        this.id = contagem;
    }
    
    public int getId() {
        return this.id;
    }
    
    public static int getContagem() {
        return contagem;
    }
}
```

#### Características e Aplicações
- **Pertence à classe**: Compartilhado por todas as instâncias.
- **Inicialização**: Ocorre quando a classe é carregada pela JVM.
- **Acesso**: Através do nome da classe (`Contador.getContagem()`).
- **Aplicações comuns**:
  - **Contadores**: Para controlar número de instâncias.
  - **Constantes**: Valores imutáveis (`public static final`).
  - **Utilitários**: Métodos que não dependem de estado do objeto.

### 3. Manipulação de Strings e Arrays

#### Manipulação de Strings
```java
String texto = "Programação Java";
int comprimento = texto.length(); // 16
String subTexto = texto.substring(0, 11); // "Programação"
String[] palavras = texto.split(" "); // ["Programação", "Java"]
```

#### Operações com Arrays
```java
// Declaração e inicialização
int[] numeros = new int[5];
String[] nomes = {"Ana", "Carlos", "Pedro"};

// Acesso e modificação
numeros[0] = 10;
String primeiroNome = nomes[0]; // "Ana"

// Percorrendo arrays
for (int i = 0; i < numeros.length; i++) {
    System.out.println(numeros[i]);
}

// Enhanced for loop
for (String nome : nomes) {
    System.out.println(nome);
}
```

### 4. Contagem de Algarismos em um Número

```java
// Método 1: Usando String.valueOf() e length()
public static int contarDigitos(int numero) {
    return String.valueOf(Math.abs(numero)).length();
}

// Método 2: Abordagem matemática
public static int contarDigitosMatematico(int numero) {
    if (numero == 0) return 1;
    numero = Math.abs(numero);
    return (int) Math.floor(Math.log10(numero)) + 1;
}

// Método 3: Divisão sucessiva
public static int contarDigitosDivisao(int numero) {
    int contador = 0;
    numero = Math.abs(numero);
    
    if (numero == 0) return 1;
    
    while (numero > 0) {
        contador++;
        numero /= 10;
    }
    
    return contador;
}
```

## Organização e Modularização do Código

### 1. Pacotes em Java

```java
// Declaração de pacote
package br.com.empresa.modulo;

// Importações
import java.util.ArrayList;
import java.util.List;
```

#### Convenções de Nomenclatura
- **Domínio invertido**: `com.empresa.projeto.modulo`
- **Letras minúsculas**: Evitar caracteres especiais e palavras reservadas.
- **Organização hierárquica**: Do mais geral para o mais específico.

### 2. Documentação com JavaDoc

```java
/**
 * Representa um cliente no sistema bancário.
 * 
 * @author Seu Nome
 * @version 1.0
 * @since 2023-11-15
 */
public class Cliente {
    private String nome;
    private String cpf;
    
    /**
     * Construtor que inicializa um cliente com nome e CPF.
     * 
     * @param nome O nome completo do cliente
     * @param cpf O número de CPF do cliente (somente dígitos)
     * @throws IllegalArgumentException Se o CPF não tiver 11 dígitos
     */
    public Cliente(String nome, String cpf) {
        this.nome = nome;
        
        if (cpf.length() != 11) {
            throw new IllegalArgumentException("CPF deve ter 11 dígitos");
        }
        this.cpf = cpf;
    }
}
```

### 3. Estruturas de Controle de Acesso

```java
public class SistemaSeguranca {
    public enum NivelAcesso {
        BASICO(1),
        INTERMEDIARIO(2),
        AVANCADO(3),
        ADMINISTRADOR(4);
        
        private int valor;
        
        NivelAcesso(int valor) {
            this.valor = valor;
        }
        
        public int getValor() {
            return this.valor;
        }
    }
    
    public boolean verificarPermissao(Usuario usuario, NivelAcesso nivelRequerido) {
        return usuario.getNivelAcesso().getValor() >= nivelRequerido.getValor();
    }
}
```

## Aplicações Práticas - Exercícios de Revisão

### 1. Projeto de Classe com Atributos e Métodos

```java
public class Funcionario {
    private String nome;
    private int matricula;
    private double salario;
    
    public Funcionario(String nome, int matricula, double salario) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }
    
    public double calcularSalarioLiquido() {
        return salario * 0.9; // Desconto fixo de 10%
    }
    
    // Getters e Setters
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public int getMatricula() {
        return matricula;
    }
    
    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }
    
    public double getSalario() {
        return salario;
    }
    
    public void setSalario(double salario) {
        this.salario = salario;
    }
}
```

### 2. Utilização de Atributo Estático

```java
public class Carro {
    private String modelo;
    private int ano;
    private String cor;
    private static int quantidadeProduzida = 0;
    
    public Carro(String modelo, int ano, String cor) {
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        quantidadeProduzida++; // Incrementa o contador global a cada instanciação
    }
    
    // Método estático para acessar o contador
    public static int getQuantidadeProduzida() {
        return quantidadeProduzida;
    }
    
    // Getters e Setters dos atributos de instância
    public String getModelo() {
        return modelo;
    }
    
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    
    public int getAno() {
        return ano;
    }
    
    public void setAno(int ano) {
        this.ano = ano;
    }
    
    public String getCor() {
        return cor;
    }
    
    public void setCor(String cor) {
        this.cor = cor;
    }
}
```

### 3. Métodos Estáticos vs. Métodos de Instância

```java
public class Conversor {
    private String unidade;
    
    public Conversor(String unidade) {
        this.unidade = unidade;
    }
    
    // Método estático - independe de instância
    public static double converterCelsiusParaFahrenheit(double celsius) {
        return celsius * 9/5 + 32;
    }
    
    // Método de instância - requer objeto
    public void exibirConversao(double celsius) {
        double fahrenheit = Conversor.converterCelsiusParaFahrenheit(celsius);
        System.out.println(celsius + "°C equivale a " + fahrenheit + "°F (" + this.unidade + ")");
    }
}
```

### 4. Sobrecarga de Métodos em Situação Real

```java
public class Pagamento {
    private double valor;
    private String metodo;
    private String codigoCartao;
    private int parcelas;
    
    // Sobrecarga de construtores
    public Pagamento(double valor) {
        this.valor = valor;
        this.metodo = "Dinheiro";
    }
    
    public Pagamento(double valor, String codigoCartao) {
        this.valor = valor;
        this.metodo = "Cartão";
        this.codigoCartao = codigoCartao;
        this.parcelas = 1;
    }
    
    public Pagamento(double valor, String codigoCartao, int parcelas) {
        this.valor = valor;
        this.metodo = "Cartão Parcelado";
        this.codigoCartao = codigoCartao;
        this.parcelas = parcelas;
    }
    
    // Sobrecarga do método pagar
    public void pagar() {
        System.out.println("Pagamento em dinheiro no valor de R$" + valor);
    }
    
    public void pagar(String codigoCartao) {
        System.out.println("Pagamento com cartão " + codigoCartao + " no valor de R$" + valor);
    }
    
    public void pagar(String codigoCartao, int parcelas) {
        double valorParcela = valor / parcelas;
        System.out.println("Pagamento parcelado em " + parcelas + "x de R$" + valorParcela);
    }
}
```

### 5. Encapsulamento e Proteção dos Dados

```java
public class Produto {
    private String nome;
    private double preco;
    
    public Produto(String nome, double preco) {
        this.nome = nome;
        this.setPreco(preco); // Usa o setter para validação
    }
    
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public double getPreco() {
        return preco;
    }
    
    public void setPreco(double preco) {
        // Validação para impedir preços negativos
        if (preco < 0) {
            throw new IllegalArgumentException("Preço não pode ser negativo");
        }
        this.preco = preco;
    }
}
```

## Projeto Prático - Sistema de Pedidos

O projeto `ProjetoPedidos` exemplifica a aplicação integrada dos conceitos de POO na construção de um sistema de comércio eletrônico simplificado.

### Estrutura de Classes do Projeto

#### Classe Cliente
```java
public class Cliente {
    private String nome;
    private String email;
    private String telefone;
    
    public Cliente(String nome, String email, String telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
    
    // Getters, Setters e toString()
}
```

#### Classe Produto
```java
public class Produto {
    private String nome;
    private double preco;
    private int quantidade;
    
    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    
    public void reduzirEstoque(int qtd) {
        if (qtd > this.quantidade) {
            throw new IllegalArgumentException("Estoque insuficiente");
        }
        this.quantidade -= qtd;
    }
    
    // Getters, Setters e toString()
}
```

#### Classe Pedido com Contador Estático
```java
public class Pedido {
    private static int contador = 0;
    private int numero;
    private Cliente cliente;
    private List<Produto> produtos = new ArrayList<>();
    private Pagamento pagamento;
    
    public Pedido(Cliente cliente) {
        contador++;
        this.numero = contador;
        this.cliente = cliente;
    }
    
    public void adicionarProduto(Produto produto, int quantidade) {
        // Implementação da adição de produtos
    }
    
    public double calcularTotal() {
        // Implementação do cálculo de total
        return 0.0;
    }
    
    // Métodos relacionados ao pagamento, getters, setters e toString()
}
```

## Exemplos de Implementação para a Avaliação

### 1. Exemplo de Modelagem com Classes Interconectadas

```java
public class Computador {
    private String marca;
    private String modelo;
    private int anoFabricacao;
    private Usuario usuario;
    
    public Computador(String marca, String modelo, int anoFabricacao) {
        this.marca = marca;
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
    }
    
    public void associarUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    
    public boolean temPermissao(SistemaSeguranca.NivelAcesso nivelRequerido) {
        if (this.usuario == null) {
            return false;
        }
        
        SistemaSeguranca seguranca = new SistemaSeguranca();
        return seguranca.verificarPermissao(usuario, nivelRequerido);
    }
    
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Computador: ").append(marca).append(" ").append(modelo);
        sb.append("\nAno de Fabricação: ").append(anoFabricacao);
        
        if (usuario != null) {
            sb.append("\nUsuário: ").append(usuario.getNome());
            sb.append("\nNível de Acesso: ").append(usuario.getNivelAcesso());
        } else {
            sb.append("\nSem usuário associado");
        }
        
        return sb.toString();
    }
}

public class Usuario {
    private String nome;
    private String login;
    private String senha;
    private SistemaSeguranca.NivelAcesso nivelAcesso;
    
    public Usuario(String nome, String login, String senha, SistemaSeguranca.NivelAcesso nivelAcesso) {
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.nivelAcesso = nivelAcesso;
    }
    
    public boolean autenticar(String senhaFornecida) {
        return this.senha.equals(senhaFornecida);
    }
    
    public String getNome() {
        return nome;
    }
    
    public SistemaSeguranca.NivelAcesso getNivelAcesso() {
        return nivelAcesso;
    }
    
    @Override
    public String toString() {
        return "Usuario: " + nome + " (Login: " + login + "), Nível: " + nivelAcesso;
    }
}
```

### 2. Demonstração de Execução no Main

```java
public class Main {
    public static void main(String[] args) {
        // Criação de usuários com diferentes níveis de acesso
        Usuario admin = new Usuario("Administrador", "admin", "senha123", SistemaSeguranca.NivelAcesso.ADMINISTRADOR);
        Usuario usuario1 = new Usuario("João Silva", "joao", "123456", SistemaSeguranca.NivelAcesso.INTERMEDIARIO);
        
        // Criação de computadores
        Computador comp1 = new Computador("Dell", "Inspiron", 2022);
        Computador comp2 = new Computador("HP", "Pavilion", 2021);
        
        // Associação de usuários
        comp1.associarUsuario(admin);
        comp2.associarUsuario(usuario1);
        
        // Verificação de permissões
        System.out.println("Comp1 tem permissão AVANÇADA: " + comp1.temPermissao(SistemaSeguranca.NivelAcesso.AVANCADO));
        System.out.println("Comp2 tem permissão BÁSICA: " + comp2.temPermissao(SistemaSeguranca.NivelAcesso.BASICO));
        System.out.println("Comp2 tem permissão AVANÇADA: " + comp2.temPermissao(SistemaSeguranca.NivelAcesso.AVANCADO));
        
        // Exibição de informações completas
        System.out.println("\n--- Informações Completas ---");
        System.out.println(comp1);
        System.out.println("\n" + comp2);
        
        // Demonstração contagem de algarismos
        int numero = 12345;
        System.out.println("\nNúmero: " + numero);
        System.out.println("Quantidade de algarismos: " + contarDigitos(numero));
    }
    
    public static int contarDigitos(int numero) {
        return String.valueOf(Math.abs(numero)).length();
    }
}
```

## Diretrizes para Resolução da Avaliação

### Questão 1: Modelagem e Documentação de Classes (5 pontos)
Esta questão exige a aplicação do modelo de documentação JavaDoc e a correta implementação de classes, atributos e métodos.

#### Diretrizes para JavaDoc:
- **Blocos de comentários**: Utilize `/**` para iniciar e `*/` para encerrar.
- **Tags obrigatórias**: `@author`, `@version`, `@since`, `@param`, `@return`, `@throws`.
- **Estrutura modelo**:
```java
/**
 * Descrição da classe/método.
 *
 * @author Seu Nome
 * @version 1.0
 * @since Data
 */
```

### Questão 2: Atributos Estáticos e Sobrecarga de Construtores (2 pontos)
Esta questão avalia o entendimento sobre atributos estáticos (compartilhados entre todas as instâncias) e sobrecarga de construtores.

#### Implementação de Atributos Estáticos:
```java
public class Exemplo {
    // Atributo estático compartilhado por todas as instâncias
    private static int contador = 0;
    
    public Exemplo() {
        contador++;
    }
    
    // Método estático para acessar o contador
    public static int getContador() {
        return contador;
    }
}
```

#### Sobrecarga de Construtores:
```java
public class Exemplo {
    private String nome;
    private int idade;
    
    // Construtor básico
    public Exemplo() {
        this.nome = "Padrão";
        this.idade = 0;
    }
    
    // Construtor com nome
    public Exemplo(String nome) {
        this.nome = nome;
        this.idade = 0;
    }
    
    // Construtor completo
    public Exemplo(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
```

### Questão 3: Contagem de Algarismos em um Número (5 pontos)
Esta questão requer a implementação de um algoritmo para contar a quantidade de dígitos em um número inteiro.

#### Métodos Recomendados:
1. **Usando String**: `String.valueOf(Math.abs(numero)).length()`
2. **Usando Math**: `(int)(Math.log10(Math.abs(numero)) + 1)`
3. **Usando loop**:
```java
public static int contarDigitos(int numero) {
    numero = Math.abs(numero);
    if (numero == 0) return 1;
    
    int contador = 0;
    while (numero > 0) {
        contador++;
        numero /= 10;
    }
    return contador;
}
```

### Questão 4: Implementação de Métodos em Modelagem de Classes (3 pontos)
Esta questão avalia a capacidade de analisar um diagrama de classes e implementar métodos específicos, incluindo verificação de permissões e listagem de objetos.

#### Implementação do método toString():
```java
@Override
public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("Objeto: ").append(this.getClass().getSimpleName());
    sb.append("\nAtributo1: ").append(atributo1);
    sb.append("\nAtributo2: ").append(atributo2);
    return sb.toString();
}
```

#### Verificação de Permissões:
```java
public boolean verificarPermissao(NivelAcesso nivelRequerido) {
    // Comparação entre o nível do usuário e o nível requerido
    return this.nivelAcesso.getValor() >= nivelRequerido.getValor();
}
```

## Projeto Integrador de Conhecimentos - Sistema de Pedidos

O professor propôs um projeto prático completo (ProjetoPedidos) que integra todos os conceitos fundamentais estudados. Este projeto constitui um excelente exercício de preparação para a avaliação, pois aborda:

1. **Estruturação de pacotes** (model, app)
2. **Encapsulamento de dados** (atributos privados com getters/setters)
3. **Utilização de atributos estáticos** (contador de pedidos)
4. **Composição entre classes** (Pedido contém Cliente, Produtos e Pagamento)
5. **Manipulação de coleções** (ArrayList para armazenamento)
6. **Responsabilidade única** (cada classe com funções bem definidas)

### Diagrama de Classes Simplificado
```
Cliente (nome, email, telefone)
    ↑
    |
Pedido (numero, cliente, produtos, pagamento) ← Produto (nome, preco, quantidade)
    ↓
Pagamento (valor, metodo)
```

### Fluxo de Operações no Sistema
1. Cadastrar clientes e produtos
2. Criar pedido associando a um cliente
3. Adicionar produtos ao pedido
4. Definir forma de pagamento
5. Finalizar pedido calculando totais

Este projeto sintetiza os principais conceitos avaliados e demonstra a aplicação prática da Orientação a Objetos em um contexto realista de desenvolvimento de software.

## Referências Bibliográficas

- DEITEL, H.; DEITEL, P. **Java: Como Programar**. 10ª Edição. Pearson, 2017.
- MENDES, Douglas R. **Programação Java com Ênfase em Orientação a Objetos**. Novatec, 2019.
- ARNOLD, GOSLING, HOLMES. **A linguagem de programação Java** – 4ª edição.
- Apostilas da Caelum.

---

### Notas de Preparação:

¹ Revisar cuidadosamente a sintaxe Java, especialmente em relação à sobrecarga de construtores e atributos estáticos.

² Praticar a implementação dos exercícios propostos pelo professor, com atenção especial ao encapsulamento correto, validação de dados e estruturação de classes.

³ Para a questão 3 (contagem de algarismos), memorizar o método mais eficiente utilizando `String.valueOf(Math.abs(numero)).length()`.

⁴ Compreender profundamente a relação entre classes em um sistema integrado, especialmente no contexto do projeto de pedidos.

⁵ Revisar implementação de `toString()` para formatação adequada de dados de objetos.

⁶ Estudar com atenção os exercícios 1 a 6 do roteiro, implementando as soluções e verificando seu funcionamento.
