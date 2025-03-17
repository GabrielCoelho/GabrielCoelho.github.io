---
author: "Gabriel Coelho Soares"
title: "Singleton x Prototype - Springboot"
date: "2025-03-17"
description: "Unidades fundamentais na arquitetura dos Beans em Springboot"
tags: ["development", "java", "oop"]
categories: ["decola-tech-2025"]
---

# Escopos de Beans no Spring Framework: Singleton versus Prototype

## Tipos Principais de Escopos

O Spring Framework suporta diferentes escopos para atender diversas necessidades arquiteturais:

| Escopo | Descrição | Contexto de Uso |
|--------|-----------|-----------------|
| **singleton** | Uma única instância por container IoC (padrão) | Objetos stateless, serviços, configurações |
| **prototype** | Nova instância a cada solicitação | Objetos com estado, entidades específicas por requisição |
| **request** | Uma instância por requisição HTTP | Aplicações web, dados de requisição |
| **session** | Uma instância por sessão HTTP | Carrinhos de compra, preferências de usuário |
| **application** | Uma instância por ServletContext | Dados compartilhados entre usuários |
| **websocket** | Uma instância por sessão WebSocket | Comunicação em tempo real |

## Singleton: Características e Implementação

### Definição Formal

> O escopo singleton garante a existência de apenas uma instância de um bean por container Spring, que é compartilhada em todas as solicitações deste bean.

### Comportamento

1. **Instanciação**: O bean é instanciado quando o container Spring é inicializado
2. **Caching**: A instância criada é armazenada em cache no container
3. **Compartilhamento**: A mesma instância é fornecida para todas as dependências e solicitações
4. **Destruição**: A instância é destruída apenas quando o container é finalizado

### Implementação

```java
// Declaração explícita (opcional, pois singleton é o escopo padrão)
@Component
@Scope("singleton")
public class ConfigService {
    private Map<String, String> configurations = new HashMap<>();
    
    public void setConfig(String key, String value) {
        configurations.put(key, value);
    }
    
    public String getConfig(String key) {
        return configurations.get(key);
    }
}

// Injeção do bean singleton
@Service
public class ApplicationService {
    private final ConfigService configService;
    
    // A mesma instância será injetada em todos os componentes
    public ApplicationService(ConfigService configService) {
        this.configService = configService;
    }
}
```

### Casos de Uso Recomendados

O escopo singleton é ideal para:

- **Serviços stateless**: Classes de serviço que não mantêm estado entre chamadas
- **Repositórios**: Componentes de acesso a dados
- **Configurações**: Objetos com dados de configuração compartilhados
- **Caches**: Estruturas de armazenamento em memória
- **Factories e Helpers**: Utilitários e geradores de objetos

### Considerações de Performance

- **Memória**: Economiza recursos por manter apenas uma instância
- **Inicialização**: Custo de inicialização é pago apenas uma vez
- **Compartilhamento**: Facilita compartilhamento de dados entre diferentes partes da aplicação

## Prototype: Características e Implementação

### Definição Formal

> O escopo prototype determina que uma nova instância do bean será criada sempre que for solicitada ao container Spring.

### Comportamento

1. **Instanciação**: Uma nova instância é criada a cada solicitação ao container
2. **Independência**: Cada instância é totalmente independente das demais
3. **Gerenciamento de Ciclo de Vida**: O Spring não gerencia a destruição de beans prototype
4. **Responsabilidade**: O código cliente deve liberar recursos associados aos prototypes

### Implementação

```java
@Component
@Scope("prototype")
public class ShoppingCart {
    private List<Product> items = new ArrayList<>();
    
    public void addItem(Product product) {
        items.add(product);
    }
    
    public List<Product> getItems() {
        return new ArrayList<>(items);
    }
}

// Injeção de prototype via lookup method
@Service
public abstract class OrderService {
    
    // Método abstrato que será implementado pelo Spring
    // Cada chamada retorna uma nova instância
    @Lookup
    public abstract ShoppingCart createCart();
    
    public void processOrder(Customer customer) {
        // Nova instância a cada chamada
        ShoppingCart cart = createCart();
        // Processamento do pedido
    }
}
```

### Casos de Uso Recomendados

O escopo prototype é apropriado para:

- **Objetos stateful**: Componentes que mantêm estado específico por requisição
- **Carrinhos de compra**: Estruturas que acumulam dados para cada cliente
- **Wizards**: Fluxos sequenciais com estados intermediários
- **Objetos pesados não compartilháveis**: Recursos que não podem ser concorrentemente acessados
- **Objetos transientes**: Componentes de curta duração com estados transitórios

### Considerações de Performance

- **Memória**: Maior consumo devido à criação de múltiplas instâncias
- **Garbage Collection**: Maior pressão no coletor de lixo
- **Isolamento**: Garante independência entre diferentes solicitações

## Análise Comparativa

### Dimensões de Contraste

| Característica | Singleton | Prototype |
|----------------|-----------|-----------|
| **Instanciação** | Uma vez, no início | A cada solicitação |
| **Compartilhamento** | Instância única compartilhada | Cada cliente recebe instância própria |
| **Estado** | Melhor para objetos stateless | Preferível para objetos stateful |
| **Concorrência** | Requer considerações thread-safety | Naturalmente thread-safe (isolamento) |
| **Uso de memória** | Econômico | Maior consumo |
| **Ciclo de vida** | Gerenciado pelo Spring | Criação gerenciada, destruição não |

### Desafios de Implementação

#### Singleton

1. **Thread-safety**: Deve ser implementada explicitamente se o bean mantiver estado
2. **Testes**: Testes unitários podem ser afetados pelo estado compartilhado
3. **Dependência Circular**: Mais suscetível a problemas de dependência circular

#### Prototype

1. **Destruição de Recursos**: O Spring não chama métodos de destruição automaticamente
2. **Integração com Singletons**: Cuidado ao injetar singletons em prototypes
3. **Performance**: Criação frequente pode impactar a performance

## Implementações Avançadas

### ObjectFactory e Provider

Para obter uma nova instância de um bean prototype dentro de um singleton:

```java
@Service
@Scope("singleton")
public class OrderProcessor {
    // Interfaces para obter instâncias frescas
    @Autowired
    private ObjectFactory<ShoppingCart> cartFactory;
    
    @Autowired
    private Provider<ShoppingCart> cartProvider;
    
    public void processOrder() {
        // Ambos retornam uma nova instância
        ShoppingCart cart1 = cartFactory.getObject();
        ShoppingCart cart2 = cartProvider.get();
    }
}
```

### Método @Lookup

Solução elegante para obter beans prototype em singletons:

```java
@Service
public abstract class UserService {
    // Spring implementa este método para retornar uma nova instância
    @Lookup
    protected abstract UserSession createSession();
    
    public void processUserRequest(String userId) {
        UserSession session = createSession();
        // Processar com a nova sessão
    }
}
```

### Configuração Programática

Definição de escopos via configuração Java:

```java
@Configuration
public class AppConfig {
    @Bean
    @Scope("singleton")
    public DataSource dataSource() {
        // Configuração do DataSource
        return new BasicDataSource();
    }
    
    @Bean
    @Scope(value = "prototype", proxyMode = ScopedProxyMode.TARGET_CLASS)
    public ShoppingCart shoppingCart() {
        return new ShoppingCart();
    }
}
```

## Considerações Arquiteturais

### Seleção do Escopo Adequado

A escolha entre singleton e prototype deve considerar:

1. **Natureza do estado**: O componente mantém estado entre chamadas?
2. **Requisitos de compartilhamento**: Os dados precisam ser compartilhados globalmente?
3. **Demandas de recursos**: Qual o impacto de múltiplas instâncias?
4. **Requisitos de concorrência**: Como o componente lida com acesso concorrente?

### Diretrizes de Design

1. **Preferência por singleton**: Utilize como escopo padrão para maximizar performance
2. **Isolamento de estado**: Migre para prototype quando o isolamento for essencial
3. **Imutabilidade**: Objetos imutáveis são naturalmente thread-safe como singletons
4. **Injeção consciente**: Cuidado ao injetar singletons em prototypes

### Padrões de Implementação

1. **Injeção via construtor**: Preferível para beans singleton (dependências obrigatórias)
2. **Method injection**: Recomendado para obtenção de beans prototype
3. **Proxy por escopo**: Útil para dependências prototype em beans singleton

## Notas Complementares

¹ O escopo singleton no Spring difere do padrão de projeto Singleton tradicional, pois é escopo por container e não por classloader.

² Um desafio comum é a necessidade de beans prototype dentro de singletons. O Spring oferece mecanismos como ObjectFactory, Provider e @Lookup para estes cenários.

³ Em aplicações web, considere também os escopos request, session e application além de singleton e prototype.

