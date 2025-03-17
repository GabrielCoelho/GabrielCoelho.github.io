---
author: "Gabriel Coelho Soares"
title: "Beans - Springboot"
date: "2025-03-17"
description: "Objeto instanciado, gerenciado e configurado pelo container IoC"
tags: ["development", "java", "oop"]
categories: ["decola-tech-2025"]
---

# Beans no Spring Framework: Análise Conceitual e Prática

## Fundamentos Teóricos

### Definição Formal

> "Um Bean no contexto do Spring Framework é um objeto que é instanciado, gerenciado e configurado pelo container {{<backlink "springboot-ioc">}} do Spring, constituindo a espinha dorsal das aplicações desenvolvidas neste ecossistema."

Os Beans representam componentes fundamentais na arquitetura do Spring, sendo as unidades básicas sobre as quais todo o framework opera. Estes objetos são gerenciados pelo container de Inversão de Controle, que coordena seu ciclo de vida completo, desde a instanciação até a destruição.

## Anatomia dos Spring Beans

### Características Essenciais

Os Spring Beans apresentam características distintivas que os diferenciam de objetos Java convencionais:

1. **Gerenciamento de Ciclo de Vida**: São criados, inicializados e destruídos pelo container Spring
2. **Escopo Definido**: Existem conforme regras de escopo específicas
3. **Configurabilidade**: Podem ser configurados via XML, anotações ou código Java
4. **Resolução de Dependências**: Têm suas dependências automaticamente resolvidas

### Declaração e Configuração

#### Métodos de Declaração

Os Beans podem ser declarados através de múltiplas abordagens:

**1. Configuração Baseada em Anotações**
```java
@Component
public class ClienteServiceImpl implements ClienteService {
    // implementação
}
```

**2. Configuração Baseada em Java**
```java
@Configuration
public class AppConfig {
    @Bean
    public ClienteService clienteService() {
        return new ClienteServiceImpl();
    }
}
```

**3. Configuração Baseada em XML**
```xml
<beans>
    <bean id="clienteService" class="com.exemplo.ClienteServiceImpl"/>
</beans>
```

#### Anotações Estereotipadas

O Spring fornece um conjunto de anotações estereotipadas que, além de declarar um Bean, comunicam sua função arquitetural:

- **@Component**: Anotação genérica para qualquer componente Spring
- **@Service**: Indica componentes da camada de serviço (regras de negócio)
- **@Repository**: Designa componentes de acesso a dados
- **@Controller/@RestController**: Marca componentes da camada de apresentação
- **@Configuration**: Identifica classes que definem configurações

## Escopos dos Beans

### Definição e Tipos

O escopo determina o padrão de criação, ciclo de vida e visibilidade de um Bean dentro da aplicação. O Spring suporta os seguintes escopos principais:

| Escopo | Descrição | Contexto de Uso |
|--------|-----------|-----------------|
| **singleton** | Uma única instância por container (padrão) | Componentes stateless |
| **prototype** | Nova instância a cada solicitação | Componentes stateful |
| **request** | Uma instância por requisição HTTP | Aplicações web |
| **session** | Uma instância por sessão HTTP | Dados de sessão |
| **application** | Uma instância por aplicação web | Dados globais |
| **websocket** | Uma instância por sessão WebSocket | Comunicação bidirecional |

Exemplo de definição de escopo:
```java
@Component
@Scope("prototype")
public class CarrinhoCompras {
    // implementação
}
```

## Ciclo de Vida dos Beans

### Fases Principais

O ciclo de vida de um Bean no Spring compreende diversas fases desde sua instanciação até sua destruição:

1. **Instanciação**: Criação do objeto
2. **Definição de Propriedades**: Injeção de dependências
3. **Callbacks de Pré-Inicialização**: BeanNameAware, BeanFactoryAware, etc.
4. **Inicialização**: Métodos @PostConstruct, afterPropertiesSet(), etc.
5. **Uso do Bean**: Período de atividade no sistema
6. **Destruição**: Métodos @PreDestroy, destroy(), etc.

### Personalização do Ciclo de Vida

O Spring oferece múltiplos mecanismos para personalizar o ciclo de vida:

**1. Interfaces de Callback**
```java
@Component
public class MeuBean implements InitializingBean, DisposableBean {
    @Override
    public void afterPropertiesSet() throws Exception {
        // código de inicialização
    }
    
    @Override
    public void destroy() throws Exception {
        // código de limpeza
    }
}
```

**2. Anotações de Ciclo de Vida**
```java
@Component
public class MeuBean {
    @PostConstruct
    public void inicializar() {
        // código de inicialização
    }
    
    @PreDestroy
    public void finalizar() {
        // código de limpeza
    }
}
```

**3. Configuração XML**
```xml
<bean id="meuBean" class="com.exemplo.MeuBean" 
      init-method="inicializar" 
      destroy-method="finalizar"/>
```

## Injeção de Dependências em Beans

### Estratégias de Injeção

Beans frequentemente dependem de outros Beans, e o Spring oferece três estratégias principais para injeção:

#### 1. Injeção via Construtor
```java
@Component
public class RelatorioPedidoService {
    private final PedidoRepository repository;
    
    public RelatorioPedidoService(PedidoRepository repository) {
        this.repository = repository;
    }
}
```

#### 2. Injeção via Setter
```java
@Component
public class NotificacaoService {
    private EmailService emailService;
    
    @Autowired
    public void setEmailService(EmailService emailService) {
        this.emailService = emailService;
    }
}
```

#### 3. Injeção via Campo
```java
@Component
public class ClienteController {
    @Autowired
    private ClienteService clienteService;
}
```

## Considerações Arquiteturais Avançadas

### Lazy Loading vs. Eager Loading

Por padrão, os Beans singleton são inicializados eagerly (ansiosamente) durante a inicialização do contexto:

```java
// Bean carregado durante inicialização do contexto (padrão)
@Component 
public class ServicoRelatorio { }

// Bean carregado apenas quando solicitado
@Component
@Lazy
public class ServicoRelatorioComplexo { }
```

### Configuração Condicional

O Spring Boot amplia o conceito de Beans com a capacidade de criação condicional:

```java
@Configuration
public class DataSourceConfig {
    @Bean
    @ConditionalOnProperty(name = "app.datasource", havingValue = "postgres")
    public DataSource postgresDataSource() {
        // configuração para PostgreSQL
    }
    
    @Bean
    @ConditionalOnProperty(name = "app.datasource", havingValue = "mysql")
    public DataSource mysqlDataSource() {
        // configuração para MySQL
    }
}
```

## Referências Bibliográficas

- WALLS, C. "Spring in Action". Manning Publications, 2018.
- JOHNSON, R. et al. "Expert One-on-One J2EE Design and Development". Wiley, 2002.
- COSMINA, I.; HARROP, R. "Pro Spring 5: An In-Depth Guide to the Spring Framework and Its Tools". Apress, 2017.
- GUTIERREZ, F. "Pro Spring Boot 2: An Authoritative Guide to Building Microservices, Web and Enterprise Applications". Apress, 2019.

### Notas Complementares

¹ O termo "Bean" no Spring é uma referência aos "JavaBeans", componentes reutilizáveis introduzidos no Java 1.1.

² A configuração de Beans evoluiu significativamente desde as primeiras versões do Spring, privilegiando gradualmente a configuração baseada em anotações e Java em detrimento da configuração XML.

³ A compreensão adequada do mecanismo de Beans é fundamental para o design eficiente de aplicações Spring, impactando diretamente na performance, modularidade e manutenibilidade do sistema.
