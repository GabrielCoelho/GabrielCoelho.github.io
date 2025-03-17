---
author: "Gabriel Coelho Soares"
title: "Components - Springboot"
date: "2025-03-17"
description: "Unidades fundamentais na arquitetura do Springboot"
tags: ["development", "java", "oop"]
categories: ["decola-tech-2025"]
---
# Components no Spring Boot: Fundamentos e Aplicações

## Conceito e Contextualização

> Os Components constituem unidades fundamentais na arquitetura do Spring Boot, representando objetos gerenciados pelo container IoC que formam a base estrutural das aplicações desenvolvidas neste framework. {{<backlink "springboot-ioc">}} {{<backlink "springboot-di">}}

### Definição Formal

O termo "Component" no contexto do Spring Boot refere-se a classes anotadas com `@Component` ou suas especializações, que são automaticamente detectadas, instanciadas e gerenciadas pelo container de Inversão de Controle, proporcionando a base para a construção modular de aplicações.

## Taxonomia dos Components

### Anotação Primária

```java
@Component
public class NotificacaoUtil {
    // Funcionalidade auxiliar genérica
}
```

### Estereótipos Especializados

O Spring Boot fornece anotações estereotipadas que estendem `@Component`, comunicando a função arquitetural do componente:

- **`@Service`**: Componentes da camada de serviço responsáveis pelas regras de negócio
- **`@Repository`**: Componentes de acesso a dados e persistência
- **`@Controller`/`@RestController`**: Componentes da camada de apresentação
- **`@Configuration`**: Componentes que definem beans e configurações do sistema

## Mecanismo de Detecção

### Component Scanning

O Spring Boot implementa o mecanismo de _component scanning_ para identificar automaticamente classes anotadas:

```java
@SpringBootApplication // Inclui @ComponentScan implicitamente
public class AplicacaoFinanceira {
    public static void main(String[] args) {
        SpringApplication.run(AplicacaoFinanceira.class, args);
    }
}
```

O escaneamento ocorre a partir do pacote da classe principal, podendo ser personalizado:

```java
@ComponentScan(
    basePackages = "com.empresa.modulos",
    includeFilters = @ComponentScan.Filter(type = FilterType.REGEX, pattern = ".*Service")
)
```

## Ciclo de Vida e Gestão

### Inicialização e Destruição

```java
@Component
public class CacheManager {
    @PostConstruct
    public void inicializar() {
        // Lógica de inicialização
    }
    
    @PreDestroy
    public void finalizar() {
        // Lógica de limpeza
    }
}
```

### Escopos Disponíveis

```java
@Component
@Scope("prototype") // Cria nova instância a cada solicitação
public class ProcessadorRelatorio {
    // Implementação
}
```

## Injeção de Dependências

### Estratégias de Injeção

Os Components tipicamente recebem dependências através de:

```java
@Service
public class UsuarioServiceImpl implements UsuarioService {
    // 1. Injeção via construtor (recomendada)
    private final UsuarioRepository repository;
    
    public UsuarioServiceImpl(UsuarioRepository repository) {
        this.repository = repository;
    }
    
    // 2. Injeção via setter
    private NotificacaoService notificador;
    
    @Autowired
    public void setNotificador(NotificacaoService notificador) {
        this.notificador = notificador;
    }
    
    // 3. Injeção via campo (evitar para manter testabilidade)
    @Autowired
    private AuditoriaService auditoria;
}
```

## Considerações Arquiteturais

### Vantagens da Abordagem

- **Desacoplamento**: Redução da dependência direta entre componentes
- **Testabilidade**: Facilitação de testes unitários através de mocks
- **Coesão**: Promoção de componentes com responsabilidades bem definidas
- **Flexibilidade**: Substituição de implementações sem alteração de código cliente

### Boas Práticas

1. **Responsabilidade Única**: Components devem ter propósito coeso e bem definido
2. **Injeção via Construtor**: Preferível para dependências obrigatórias
3. **Interfaces**: Definir contratos para Components centrais facilitando implementações alternativas
4. **Nomenclatura**: Utilizar convenções claras que comuniquem a função do componente

### Notas Complementares

¹ A introdução dos estereótipos de Components ocorreu no Spring 2.5 (2007), sendo um marco na evolução do framework.

² Todo Spring Component é um {{<backlink "springboot-beans" "Bean">}}, mas nem todo Bean é necessariamente definido como Component (podem ser definidos via @Bean em classes @Configuration).
