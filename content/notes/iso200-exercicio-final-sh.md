---
author: "Gabriel Coelho Soares"
title: "ISO200 - Aula Prática: Automatização com Shell Scripts"
date: "2025-06-07"
description: "Análise detalhada de cinco exercícios práticos de shell scripting abordando classificação de arquivos, sincronização, verificação de rede e compactação"
tags: ["notes", "shell-script", "linux"]
categories: ["ads-fatec"]
---

# Sistemas Operacionais II - Aula Prática: Shell Scripts

## Conceitos Fundamentais

O shell script representa uma das ferramentas mais poderosas para automatização em sistemas Unix/Linux, permitindo a criação de soluções eficientes para tarefas repetitivas e complexas. Durante esta aula prática, exploramos cinco exercícios que demonstram diferentes aspectos da programação em shell, desde manipulação básica de arquivos até operações avançadas de sincronização e compactação.

> Shell script é uma linguagem de programação interpretada que utiliza o shell do sistema operacional como interpretador, proporcionando acesso direto às funcionalidades do kernel através de comandos nativos.

### Estrutura Fundamental dos Scripts

Todos os scripts analisados seguem uma estrutura padronizada que inclui:

- **Shebang (`#!/bin/bash`)**: Especifica o interpretador a ser utilizado
- **Validação de entrada**: Verificação de parâmetros e condições iniciais
- **Lógica principal**: Implementação da funcionalidade desejada
- **Tratamento de erros**: Verificação de códigos de saída e condições excepcionais
- **Logging**: Registro de atividades para auditoria e debugging

## Exercício 1: Sistema de Classificação de Arquivos

### Objetivo Acadêmico

Demonstrar o uso de loops, condicionais e operações de sistema de arquivos para análise automatizada de diretórios.

### Análise Técnica

O primeiro exercício implementa um sistema de classificação que diferencia arquivos regulares de diretórios e categoriza arquivos por tamanho:

```bash
for arquivo in *
do
    if [ ! -d $arquivo ]
    then
        tamanho=$(du -b $arquivo | cut -f1)
        limite=200
        if [ $tamanho -gt $limite ]
        then
            echo "O arquivo $arquivo com size $tamanho é maior que o limite" >> classificacao.log
        else
            echo "O arquivo $arquivo com size $tamanho é menor que o limite" >> classificacao.log
        fi
    else
        echo "$arquivo é um diretório" >> classificacao.log
    fi
done
```

#### Conceitos Aplicados

**Expansão de Wildcards**: O asterisco (`*`) expande para todos os itens do diretório atual, demonstrando como o shell processa padrões de arquivo.

**Substituição de Comandos**: A sintaxe `$(comando)` executa o comando e substitui o resultado na linha, permitindo captura dinâmica de informações do sistema.

**Redirecionamento de Saída**: Os operadores `>` e `>>` controlam o fluxo de dados para arquivos, sendo fundamentais para logging e persistência de informações.

> O uso de `du -b` combinado com `cut -f1` demonstra a filosofia Unix de combinar ferramentas simples para realizar tarefas complexas.

## Exercício 2: Sincronização de Diretórios com rsync

### Objetivo Acadêmico

Implementar um sistema robusto de sincronização que demonstra validação de entrada, criação dinâmica de diretórios e uso de ferramentas avançadas de cópia.

### Análise Técnica

Este exercício utiliza o comando `rsync` para sincronização eficiente:

```bash
read -p "Digite o diretório de origem: " ORIGEM
read -p "Digite o diretório de destino: " DESTINO

if [ ! -d "$ORIGEM" ]; then
    echo "ERRO: Diretório de origem não existe. Não é possível realizar a tarefa."
    exit 1
fi

if [ ! -d "$DESTINO" ]; then
    echo "Diretório de destino não existe. Criando..."
    mkdir -p "$DESTINO"
fi

rsync -av --delete "$ORIGEM/" "$DESTINO/"
```

#### Conceitos Aplicados

**Interação com Usuário**: O comando `read -p` demonstra como criar interfaces interativas em shell scripts.

**Validação Defensiva**: Verificação de pré-condições antes da execução principal, seguindo princípios de programação defensiva.

**Sincronização Incremental**: O `rsync` com opções `-av --delete` realiza sincronização eficiente, transferindo apenas diferenças e removendo arquivos obsoletos.

## Exercício 3: Verificação de Conectividade de Rede

### Objetivo Acadêmico

Demonstrar processamento de arquivos linha por linha, redirecionamento de saída e verificação de conectividade de rede.

### Análise Técnica

```bash
while read linha
do
    echo "Testando IP: $linha"
    ping -c 4 $linha > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "A máquina $linha está online e respondendo ao ping." >> ping_log.txt
    else
        echo "A máquina $linha não está respondendo ao ping." >> ping_log.txt
    fi
done < lista_ips.txt
```

#### Conceitos Aplicados

**Processamento de Arquivos**: O loop `while read` com redirecionamento `< arquivo` demonstra processamento eficiente linha por linha.

**Supressão de Saída**: A construção `> /dev/null 2>&1` redireciona tanto stdout quanto stderr para o dispositivo nulo, silenciando a saída.

**Códigos de Saída**: A variável `$?` captura o código de retorno do último comando, fundamental para controle de fluxo baseado em sucesso/falha.

## Exercício 4: Cópia com Timestamp Automático

### Objetivo Acadêmico

Implementar sistema de backup automático com nomenclatura baseada em timestamp, demonstrando manipulação de argumentos e formatação de data.

### Análise Técnica

```bash
if [ $# -eq 0 ]; then
    echo "Uso: $0 <arquivo_para_copiar>"
    exit 1
fi

ARQUIVO_ORIGEM="$1"
TIMESTAMP=$(date +"%d-%m-%y-%H-%M")
ARQUIVO_DESTINO="${ARQUIVO_ORIGEM}-${TIMESTAMP}"

cp "$ARQUIVO_ORIGEM" "$ARQUIVO_DESTINO"
```

#### Conceitos Aplicados

**Argumentos de Linha de Comando**: As variáveis `$#`, `$0` e `$1` demonstram acesso aos parâmetros passados ao script.

**Formatação de Data**: O comando `date` com especificadores de formato permite criação de timestamps padronizados.

**Concatenação de Strings**: A sintaxe `${variavel}` garante delimitação clara em operações de concatenação.

## Exercício 5: Menu Interativo para Operações TAR

### Objetivo Acadêmico

Implementar interface de menu complexa demonstrando estruturas de controle avançadas e operações de compactação/descompactação.

### Análise Técnica

```bash
while true; do
    echo "===== MENU DE OPÇÕES ====="
    echo "1 - Compactar arquivos"
    echo "2 - Descompactar arquivos"
    echo "3 - Descompactar um único arquivo"
    echo "4 - Sair"
    read -p "Escolha uma opção (1-4): " opcao

    case $opcao in
        1)
            tar -zcvf "${nome_arquivo}.tar.gz" $arquivos
            ;;
        2)
            tar -zxvf "$arquivo_tar" -C /home/restore
            ;;
        3)
            tar -zxvf "$arquivo_tar" "$arquivo_especifico" -C /home/restore
            ;;
        4)
            exit 0
            ;;
        *)
            echo "Opção inválida"
            ;;
    esac
done
```

#### Conceitos Aplicados

**Estrutura Case**: Alternativa elegante a múltiplos `if-else` para controle baseado em valores discretos.

**Loop Infinito**: A construção `while true` com controle de saída via `exit` demonstra interfaces persistentes.

**Operações TAR**: Os comandos `tar` com diferentes combinações de flags (`-zcvf`, `-zxvf`) mostram versatilidade na manipulação de arquivos compactados.

## Boas Práticas Identificadas

### Tratamento de Erros

Todos os scripts implementam verificação sistemática de códigos de saída através da variável `$?`, seguindo o princípio de **fail-fast** comum em sistemas robustos.

### Logging e Auditoria

O uso consistente de arquivos de log com timestamps permite rastreabilidade e debugging eficiente das operações realizadas.

### Validação de Entrada

Verificação proativa de condições iniciais (existência de arquivos, diretórios, argumentos) previne execuções com falha e melhora a experiência do usuário.

### Modularidade

Cada script é autocontido e pode ser executado independentemente, facilitando manutenção e reutilização.

## Aplicações Práticas no Ambiente Corporativo

### Automação de Backup

Os conceitos demonstrados nos exercícios 2 e 4 formam a base para sistemas empresariais de backup automatizado.

### Monitoramento de Infraestrutura

O exercício 3 ilustra princípios fundamentais para sistemas de monitoramento de rede e disponibilidade de serviços.

### Gestão de Arquivos

Os exercícios 1 e 5 demonstram técnicas aplicáveis em sistemas de gestão documental e organização automatizada de dados.

## Conclusões e Próximos Passos

A análise destes cinco exercícios revela a versatilidade e poder do shell scripting para automação de tarefas administrativas. Os conceitos fundamentais apresentados - loops, condicionais, redirecionamento, e manipulação de arquivos - formam a base para scripts mais complexos utilizados em ambientes de produção.

### Pontos-Chave para Memorização

- **Validação sempre precede execução**: Verificar condições antes de processar
- **Logging é fundamental**: Registrar atividades para auditoria e debugging
- **Códigos de saída comunicam sucesso/falha**: Usar `$?` para controle de fluxo
- **Redirecionamento controla fluxo de dados**: Dominar `>`, `>>`, `|`, e `2>&1`
- **Combinação de ferramentas amplifica capacidades**: Filosofia Unix de composição

> O domínio de shell scripting representa uma competência fundamental para profissionais de TI, proporcionando autonomia na automação de tarefas e otimização de processos operacionais.

---

## Resolução dos Exercícios - Gabriel Coelho Soares

```sh
#!/bin/bash

# =================================================================
# EXERCÍCIO 1: Classificar arquivos e verificar tamanhos
# =================================================================

# Script 1: classificar_arquivos.sh
#!/bin/bash

echo "=== SCRIPT 1: Classificação de Arquivos ==="
echo "Iniciando classificação em: $(date)" > classificacao.log

for arquivo in *
do
    if [ ! -d $arquivo ]
    then
        tamanho=$(du -b $arquivo | cut -f1)
        limite=200
        if [ $tamanho -gt $limite ]
        then
            echo "O arquivo $arquivo com size $tamanho é maior que o limite" >> classificacao.log
        else
            echo "O arquivo $arquivo com size $tamanho é menor que o limite" >> classificacao.log
        fi
    else
        echo "$arquivo é um diretório" >> classificacao.log
    fi
done

echo "Fim da classificação" >> classificacao.log

# =================================================================
# EXERCÍCIO 2: Sincronização com rsync
# =================================================================

# Script 2: sincronizar_diretorios.sh
#!/bin/bash

echo "=== SCRIPT 2: Sincronização de Diretórios ==="

read -p "Digite o diretório de origem: " ORIGEM
read -p "Digite o diretório de destino: " DESTINO

if [ ! -d "$ORIGEM" ]; then
    echo "ERRO: Diretório de origem não existe. Não é possível realizar a tarefa."
    exit 1
fi

if [ ! -d "$DESTINO" ]; then
    echo "Diretório de destino não existe. Criando..."
    mkdir -p "$DESTINO"
fi

echo "Realizando sincronização..."
rsync -av --delete "$ORIGEM/" "$DESTINO/"

if [ $? -eq 0 ]; then
    echo "Sincronização realizada com sucesso em $(date)" >> sync.log
else
    echo "Erro na sincronização em $(date)" >> sync.log
fi

# =================================================================
# EXERCÍCIO 3: Verificação de ping em lista de IPs
# =================================================================

# Script 3: verificar_ping.sh
#!/bin/bash

echo "=== SCRIPT 3: Verificação de Ping ==="

# Arquivo com lista de IPs (criar se não existir)
if [ ! -f "lista_ips.txt" ]; then
    echo "192.168.1.1" > lista_ips.txt
    echo "8.8.8.8" >> lista_ips.txt
    echo "127.0.0.1" >> lista_ips.txt
    echo "Arquivo lista_ips.txt criado com IPs de exemplo"
fi

echo "Verificação de conectividade iniciada em $(date)" > ping_log.txt

while read linha
do
    echo "Testando IP: $linha"

    # Enviar ping para o host
    ping -c 4 $linha > /dev/null 2>&1

    # Verificar o status do ping
    if [ $? -eq 0 ]; then
        echo "A máquina $linha está online e respondendo ao ping." >> ping_log.txt
    else
        echo "A máquina $linha não está respondendo ao ping." >> ping_log.txt
    fi
done < lista_ips.txt

echo "Verificação finalizada em $(date)" >> ping_log.txt

# =================================================================
# EXERCÍCIO 4: Cópia de arquivo com timestamp
# =================================================================

# Script 4: copia_com_timestamp.sh
#!/bin/bash

echo "=== SCRIPT 4: Cópia com Timestamp ==="

if [ $# -eq 0 ]; then
    echo "Uso: $0 <arquivo_para_copiar>"
    exit 1
fi

ARQUIVO_ORIGEM="$1"

if [ ! -f "$ARQUIVO_ORIGEM" ]; then
    echo "ERRO: Arquivo $ARQUIVO_ORIGEM não encontrado."
    exit 1
fi

# Gerar timestamp no formato DD-MM-AA-HH-MM
TIMESTAMP=$(date +"%d-%m-%y-%H-%M")

# Construir nome do arquivo de destino
ARQUIVO_DESTINO="${ARQUIVO_ORIGEM}-${TIMESTAMP}"

# Realizar a cópia
cp "$ARQUIVO_ORIGEM" "$ARQUIVO_DESTINO"

if [ $? -eq 0 ]; then
    echo "Cópia do arquivo $ARQUIVO_ORIGEM para $ARQUIVO_DESTINO realizada em $(date)" >> copia_log.txt
    echo "Arquivo copiado com sucesso: $ARQUIVO_DESTINO"
else
    echo "ERRO na cópia do arquivo $ARQUIVO_ORIGEM em $(date)" >> copia_log.txt
    echo "Erro ao copiar arquivo"
fi

# =================================================================
# EXERCÍCIO 5: Menu com operações TAR usando CASE
# =================================================================

# Script 5: menu_tar.sh
#!/bin/bash

echo "=== SCRIPT 5: Menu de Operações TAR ==="

# Criar diretório restore se não existir
if [ ! -d "/home/restore" ]; then
    mkdir -p /home/restore
    echo "Diretório /home/restore criado."
fi

while true; do
    echo ""
    echo "===== MENU DE OPÇÕES ====="
    echo "1 - Compactar arquivos"
    echo "2 - Descompactar arquivos"
    echo "3 - Descompactar um único arquivo"
    echo "4 - Sair"
    echo "=========================="
    read -p "Escolha uma opção (1-4): " opcao

    case $opcao in
        1)
            echo "Opção 1: Compactar arquivos"
            read -p "Digite o nome do arquivo tar.gz a ser criado (sem extensão): " nome_arquivo
            read -p "Digite os arquivos/diretórios a compactar (separados por espaço): " arquivos

            if [ -n "$arquivos" ]; then
                tar -zcvf "${nome_arquivo}.tar.gz" $arquivos
                if [ $? -eq 0 ]; then
                    echo "Compactação realizada com sucesso: ${nome_arquivo}.tar.gz"
                else
                    echo "Erro na compactação"
                fi
            else
                echo "Nenhum arquivo especificado"
            fi
            ;;

        2)
            echo "Opção 2: Descompactar arquivos"
            read -p "Digite o nome do arquivo tar.gz para descompactar: " arquivo_tar

            if [ -f "$arquivo_tar" ]; then
                tar -zxvf "$arquivo_tar" -C /home/restore
                if [ $? -eq 0 ]; then
                    echo "Arquivos descompactados em /home/restore"
                else
                    echo "Erro na descompactação"
                fi
            else
                echo "Arquivo $arquivo_tar não encontrado"
            fi
            ;;

        3)
            echo "Opção 3: Descompactar um único arquivo"
            read -p "Digite o nome do arquivo tar.gz: " arquivo_tar
            read -p "Digite o nome do arquivo específico dentro do tar.gz: " arquivo_especifico

            if [ -f "$arquivo_tar" ]; then
                tar -zxvf "$arquivo_tar" "$arquivo_especifico" -C /home/restore
                if [ $? -eq 0 ]; then
                    echo "Arquivo $arquivo_especifico extraído para /home/restore"
                else
                    echo "Erro na extração ou arquivo não encontrado no tar.gz"
                fi
            else
                echo "Arquivo $arquivo_tar não encontrado"
            fi
            ;;

        4)
            echo "Saindo do script..."
            exit 0
            ;;

        *)
            echo "Opção inválida"
            echo "Não foi encontrada opção para este parâmetro"
            ;;
    esac
done
```
