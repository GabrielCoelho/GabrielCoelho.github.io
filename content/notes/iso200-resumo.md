---
author: "Gabriel Coelho Soares"
title: "Sistemas Operacionais II - Resumo para prova"
date: "2025-04-03"
tags: ["development", "iso200" ]
categories: ["ads-fatec"]
---
# Sistemas Operacionais II - Guia de Estudo Linux

Adaptado do resumo realizado por [DryCaleffi](https://github.com/DryCaleffi).

## 1. Introdução ao Linux

### 1.1 História e Características

- **Criado por**: Linus Torvalds em 1991 na Universidade de Helsinki, Finlândia
- **Primeira versão oficial**: 1992
- **Licença**: Código aberto, distribuído gratuitamente pela Internet

### 1.2 Principais características

- **Multiusuário**: Vários usuários podem utilizar o sistema simultaneamente
- **Multitarefa**: Executa múltiplos programas ao mesmo tempo
- **Multiplataforma**: Funciona em diferentes arquiteturas de hardware
- **Multiprocessador**: Suporta sistemas com mais de um processador
- **Case sensitive**: Diferencia letras maiúsculas e minúsculas
- **Segurança**: Sistema de permissões para arquivos, diretórios e programas

### 1.3 Estrutura do Sistema

- **Kernel**: Núcleo do sistema, responsável pelo funcionamento da máquina e interação com periféricos
- **Shell**: Interface pela qual o usuário interage com o sistema operacional
- **Aplicativos**: Programas e utilitários fornecidos com o sistema ou instalados posteriormente

### 1.4 Distribuições Linux

Algumas das principais distribuições mencionadas no material:

- **Red Hat**: Pioneira, voltada para servidores, criadora do formato RPM
- **Debian**: Base para muitas outras distribuições, inclui Ubuntu
- **SuSE**: Distribuição alemã, grande influência no mercado empresarial
- **Slackware**: Uma das mais antigas, focada em estabilidade e simplicidade
- **Fedora**: Desenvolvida pela Red Hat, para desktops
- **Ubuntu**: Baseada em Debian, popular para desktops e iniciantes

## 2. Estrutura de Diretórios

### 2.1 Hierarquia de Arquivos

O Linux segue uma estrutura hierárquica padrão em formato de árvore, onde todos os diretórios partem de um diretório raiz. Esta organização facilita a administração do sistema e a localização de arquivos.

| Diretório | Descrição |
|-----------|-----------|
| `/` | Diretório raiz, todos os outros estão abaixo dele |
| `/bin` | Comandos essenciais do sistema utilizados com frequência |
| `/boot` | Arquivos estáticos e gerenciador de inicialização |
| `/dev` | Arquivos de dispositivos (periféricos) |
| `/etc` | Arquivos de configuração do sistema, específicos da máquina |
| `/home` | Diretórios dos usuários |
| `/lib` | Bibliotecas essenciais compartilhadas e módulos do kernel |
| `/mnt` | Ponto de montagem para sistemas de arquivos temporários |
| `/proc` | Diretório virtual de informações do sistema |
| `/root` | Diretório home do usuário root |
| `/sbin` | Programas usados pelo root para administração do sistema |
| `/tmp` | Arquivos temporários |
| `/usr` | Maior parte dos programas instalados |
| `/var` | Dados variáveis, logs e arquivos de spool |
| `/opt` | Aplicativos adicionais e pacotes de software |

### 2.2 Sistemas de Arquivos

- **Partições**: Divisões no HD que marcam onde começa e termina um sistema de arquivos
- **Sistemas de arquivos comuns**: EXT2, EXT3, EXT4, FAT, FAT32
- **Swap**: Partição utilizada como memória virtual pelo sistema

## 3. Navegação e Comandos Básicos

### 3.1 Navegação Básica

| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| `pwd` | Mostra o diretório atual | `pwd` |
| `cd` | Muda de diretório | `cd /home/usuario` |
| `cd ..` | Volta para o diretório pai | `cd ..` |
| `cd /` | Vai direto para o diretório raiz | `cd /` |
| `cd ~` | Vai para o diretório home do usuário | `cd ~` |
| `ls` | Lista arquivos e diretórios | `ls -la` |
| `tree` | Mostra estrutura de diretórios em formato de árvore | `tree /home` |

#### Opções importantes do comando `ls`

- `ls -l`: Lista com detalhes (permissões, tamanho, data)
- `ls -a`: Lista incluindo arquivos ocultos (que começam com ponto)
- `ls -la`: Combina as opções acima
- `ls -R`: Lista recursivamente (incluindo subdiretórios)
- `ls -h`: Exibe os tamanhos em formato legível para humanos

### 3.2 Manipulação de Arquivos e Diretórios

| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| `mkdir` | Cria um diretório | `mkdir /home/empresa` |
| `rmdir` | Remove diretórios vazios | `rmdir diretorio` |
| `touch` | Cria arquivo vazio ou atualiza timestamp | `touch arquivo.txt` |
| `cat` | Mostra conteúdo de arquivos | `cat /etc/hosts` |
| `head` | Mostra primeiras linhas de um arquivo | `head -10 arquivo.txt` |
| `tail` | Mostra últimas linhas de um arquivo | `tail -f /var/log/messages` |
| `more` | Mostra conteúdo com pausa por página | `cat arquivo.txt \| more` |
| `less` | Similar ao more, com navegação mais flexível | `less arquivo.txt` |
| `cp` | Copia arquivos e diretórios | `cp -r /home/arq /backup` |
| `mv` | Move/renomeia arquivos e diretórios | `mv arquivo.txt novo.txt` |
| `rm` | Remove arquivos | `rm -rf diretorio` |
| `ln` | Cria links | `ln -s /etc/hosts hosts` |
| `wc` | Conta linhas, palavras e caracteres | `wc -l arquivo.txt` |

#### Operações avançadas

- **Redirecionamento de entrada/saída**:
  - `comando > arquivo`: Redireciona saída para um arquivo (sobrescreve)
  - `comando >> arquivo`: Adiciona saída ao final de um arquivo
  - `comando < arquivo`: Usa arquivo como entrada para comando

- **Filtragem com pipes**:
  - `comando1 | comando2`: A saída do comando1 é entrada para comando2
  - Exemplo: `cat arquivo.txt | grep "texto" | wc -l`

## 4. Usuários e Grupos

### 4.1 Conceitos

- **Usuário**: Entidade que identifica quem utiliza o sistema
  - Cada usuário tem um ID único (UID)
  - Tem um diretório home próprio (normalmente em `/home/nome_do_usuario`)
  - Possui permissões específicas para acesso a arquivos e diretórios

- **Grupo**: Conjunto de usuários que compartilham permissões
  - Cada grupo tem um ID único (GID)
  - Permite gerenciar permissões para vários usuários simultaneamente

- **Superusuário (root)**:
  - Tem poderes totais no sistema
  - Único que pode realizar determinadas tarefas administrativas
  - Identificado pelo nome "root"

### 4.2 Comandos para Gerenciamento de Usuários e Grupos

| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| `useradd` | Adiciona um novo usuário | `useradd joao` |
| `userdel` | Remove um usuário | `userdel joao` |
| `passwd` | Define ou altera a senha de um usuário | `passwd joao` |
| `groupadd` | Cria um novo grupo | `groupadd rh` |
| `groupdel` | Remove um grupo | `groupdel rh` |
| `usermod` | Modifica configurações de um usuário existente | `usermod -a -G rh joao` |
| `chown` | Altera o dono de arquivos/diretórios | `chown joao:rh arquivo` |
| `chgrp` | Altera o grupo de arquivos/diretórios | `chgrp rh arquivo` |

#### Opções importantes do comando `usermod`

- `usermod -a -G grupo usuario`: Adiciona usuário a um grupo secundário
- `usermod -g grupo usuario`: Define o grupo primário do usuário
- `usermod -d diretorio usuario`: Altera o diretório home do usuário

## 5. Permissões de Arquivos

### 5.1 Sistema de Permissões

No Linux, cada arquivo e diretório possui três tipos de permissões para três categorias de usuários:

#### Tipos de permissões:

- **r (read)**: Permissão de leitura (valor 4)
- **w (write)**: Permissão de escrita (valor 2)
- **x (execute)**: Permissão de execução (valor 1)

#### Categorias de usuários:

- **Dono (owner)**: O usuário proprietário do arquivo
- **Grupo (group)**: O grupo ao qual o arquivo pertence
- **Outros (others)**: Todos os demais usuários

### 5.2 Representação das Permissões

As permissões são representadas de duas formas:

#### Representação simbólica:

```
-rwxrw-r--
```

Onde:
- Primeiro caractere: Tipo de arquivo (`-` para arquivo regular, `d` para diretório)
- Próximos 3 caracteres: Permissões do dono (rwx)
- Próximos 3 caracteres: Permissões do grupo (rw-)
- Últimos 3 caracteres: Permissões para outros (r--)

#### Representação numérica:

Usando os valores:
- r = 4
- w = 2
- x = 1

Somando-se os valores para cada categoria:
- 7 (rwx) = 4+2+1
- 6 (rw-) = 4+2
- 4 (r--) = 4

Exemplo: A permissão `rwxrw-r--` corresponde a `764` em formato numérico.

### 5.3 Alterando Permissões

| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| `chmod 755 arquivo` | Define permissões rwxr-xr-x | `chmod 755 arquivo` |
| `chmod u+x arquivo` | Adiciona permissão de execução para o dono | `chmod u+x arquivo` |
| `chmod g-w arquivo` | Remove permissão de escrita para o grupo | `chmod g-w arquivo` |
| `chmod o=r arquivo` | Define permissão de somente leitura para outros | `chmod o=r arquivo` |

## 6. Editores de Texto

### 6.1 Vi/Vim

- Editor de texto poderoso presente em praticamente todas as distribuições Linux
- Modos de operação:
  - **Modo de comando**: Permite navegar e executar comandos
  - **Modo de inserção**: Permite inserir texto

| Comando | Descrição |
|---------|-----------|
| `vi arquivo` | Abre um arquivo no vi |
| `i` | Entra em modo de inserção |
| `Esc` | Volta ao modo de comando |
| `:w` | Salva o arquivo |
| `:q` | Sai do editor |
| `:wq` | Salva e sai |
| `:q!` | Sai sem salvar |
| `dd` | Apaga linha atual |
| `yy` | Copia linha atual |
| `p` | Cola texto copiado |
| `/texto` | Busca por "texto" |

### 6.2 Nano

- Editor mais simples e amigável
- Comandos são exibidos na parte inferior da tela
- Utiliza combinações de teclas Ctrl+letra

## 7. Ferramentas Adicionais

### 7.1 Filtros e Buscas

| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| `grep` | Busca padrões em arquivos | `grep "termo" arquivo.txt` |
| `find` | Busca arquivos no sistema | `find /home -name "*.txt"` |
| `du` | Mostra uso do disco | `du -hs /home` |
| `df` | Mostra espaço livre em disco | `df -h` |

### 7.2 Gerenciamento do Sistema

| Comando | Descrição | Exemplo |
|---------|-----------|---------|
| `shutdown` | Desliga ou reinicia o sistema | `shutdown -h now` |
| `reboot` | Reinicia o sistema | `reboot` |
| `ifconfig` | Configura interfaces de rede | `ifconfig eth0 up` |
| `ps` | Mostra processos em execução | `ps aux` |
| `top` | Monitora processos em tempo real | `top` |
| `kill` | Termina processos | `kill -9 1234` |

## 8. Exemplos Práticos

### 8.1 Gerenciamento de Usuários e Grupos

1. Criar um usuário:
   ```bash
   useradd usuario
   passwd usuario
   ```

2. Criar um grupo:
   ```bash
   groupadd grupo
   ```

3. Adicionar usuário a um grupo:
   ```bash
   usermod -a -G grupo usuario
   ```

4. Definir dono e grupo para arquivos:
   ```bash
   chown usuario:grupo arquivo
   ```

### 8.2 Gerenciamento de Permissões

1. Alterar permissões de arquivos:
   ```bash
   chmod 770 diretorio
   ```

2. Definir permissões específicas:
   ```bash
   chmod u+x arquivo  # Adiciona permissão de execução para o dono
   chmod g-w arquivo  # Remove permissão de escrita para o grupo
   chmod o=r arquivo  # Define permissão de somente leitura para outros
   ```

### 8.3 Manipulação de Arquivos

1. Criar arquivos vazios:
   ```bash
   touch arquivo
   ```

2. Criar e modificar conteúdo de arquivos:
   ```bash
   echo "Conteúdo do arquivo" > arquivo
   echo "Mais conteúdo" >> arquivo
   ```

3. Visualizar conteúdo:
   ```bash
   cat arquivo
   more arquivo
   less arquivo
   ```

4. Copiar, mover e renomear:
   ```bash
   cp origem destino
   mv origem destino
   mv arquivo novo_nome
   ```

### 8.4 Estrutura de Diretórios

1. Navegar pela estrutura:
   ```bash
   cd /home/usuario
   cd ..
   cd /
   ```

2. Criar árvores de diretórios:
   ```bash
   mkdir -p dir1/dir2/dir3
   ```

3. Listar arquivos:
   ```bash
   ls -la
   ```

4. Mostrar caminho atual:
   ```bash
   pwd
   ```

## 9. Exemplos de Exercícios Práticos

### Exercício 1: Navegação e Manipulação de Arquivos

1. Logar como usuário root
2. Verificar diretório atual (`pwd`)
3. Acessar o diretório raiz (`cd /`)
4. Acessar o diretório home (`cd home`)
5. Criar um diretório chamado "fatecmm" (`mkdir fatecmm`)
6. Acessar o diretório criado (`cd fatecmm`)
7. Criar uma estrutura de diretórios:
   ```bash
   mkdir -p bloco1/mp bloco1/pm bloco2/ads bloco3/adm
   ```
8. Criar arquivos vazios em diferentes diretórios:
   ```bash
   touch bloco1/mp/mp1
   touch bloco1/pm/pm1 bloco1/pm/pm2
   touch bloco2/ads/ads1 bloco2/ads/ads2
   echo "Nome: Seu Nome" > bloco3/adm/adm
   echo "RA: Seu RA" >> bloco3/adm/adm
   ```
9. Manipular arquivos e diretórios:
   ```bash
   cat bloco3/adm/adm bloco2/ads/ads2 > adm_ads2
   cp bloco3/adm/adm bloco2/ads/admads
   cp bloco2/ads/ads1 bloco2/ads/ads2 bloco1/
   ```
10. Remover diretórios:
    ```bash
    rm -rf bloco3
    rm -rf bloco2
    rm -rf bloco1
    ```

### Exercício 2: Gerenciamento de Usuários e Permissões

1. Preparar ambiente:
   ```bash
   mkdir /home/empresa
   cd /home/empresa
   touch inicioempresa
   echo "Este é o arquivo inicial da empresa" > inicioempresa
   mkdir recursoshumanos financeiro ti logistica
   ```

2. Criar usuários:
   ```bash
   useradd joao
   useradd maria
   useradd marcos
   useradd ze
   useradd pedro
   useradd marina

   passwd joao    # Definir senhas
   passwd maria
   passwd marcos
   passwd ze
   passwd pedro
   passwd marina
   ```

3. Criar grupos:
   ```bash
   groupadd rh
   groupadd informatica
   groupadd financeiro
   groupadd logistica
   ```

4. Adicionar usuários aos grupos:
   ```bash
   usermod -a -G rh joao
   usermod -a -G rh maria
   usermod -a -G informatica pedro
   usermod -a -G financeiro marina
   usermod -a -G logistica marcos
   usermod -a -G logistica ze
   ```

5. Alterar donos e grupos:
   ```bash
   chown joao recursoshumanos
   chown pedro ti
   chown marcos logistica
   chown marina financeiro

   chown :rh recursoshumanos
   chown :informatica ti
   chown :logistica logistica
   chown :financeiro financeiro
   ```

6. Definir permissões:
   ```bash
   chmod 770 recursoshumanos
   chmod 770 financeiro
   chmod 770 ti
   chmod 770 logistica
   ```

7. Testar permissões (abra terminais para cada usuário e tente acessar diferentes diretórios)

## 10. Instalação e Configuração de Serviços

O Linux permite a instalação e configuração de diversos serviços para diferentes finalidades. Um exemplo é o Nagios, uma ferramenta de monitoramento de rede.

### 10.1 Instalação do Nagios

Antes de instalar o Nagios, é necessário instalar algumas dependências:

```bash
apt update
apt install apache2 libapache2-mod-php php
apt install wget unzip zip autoconf gcc libc6 make apache2-utils libgd-dev
```

Em seguida, crie um usuário específico para o Nagios:

```bash
useradd nagios
usermod -a -G nagios www-data
```

Baixe, descompacte e instale o Nagios:

```bash
wget https://assets.nagios.com/downloads/nagioscore/releases/nagios-4.4.6.tar.gz
tar xzf nagios-4.4.6.tar.gz
cd nagios-4.4.6/
./configure --with-httpd-conf=/etc/apache2/sites-enabled
make all
make install
make install-init
make install-commandmode
systemctl enable nagios.service
make install-config
make install-webconf
```

Configure as credenciais de acesso:

```bash
htpasswd -c /usr/local/nagios/etc/htpasswd.users nagiosadmin
```

Habilite o módulo CGI do Apache e inicie os serviços:

```bash
a2enmod cgi
systemctl restart apache2
systemctl start nagios
systemctl enable nagios
```

## 11. Dicas para a Prova

1. **Pratique os comandos**:
   - Tente realizar os exercícios propostos
   - Crie seu próprio ambiente para praticar (máquina virtual Linux)

2. **Entenda os conceitos**:
   - Hierarquia do sistema de arquivos
   - Sistema de permissões
   - Funcionamento de usuários e grupos

3. **Memorize os comandos essenciais**:
   - Navegação: `cd`, `ls`, `pwd`
   - Manipulação: `cp`, `mv`, `rm`, `mkdir`
   - Visualização: `cat`, `more`, `head`, `tail`
   - Permissões: `chmod`, `chown`, `chgrp`
   - Usuários: `useradd`, `passwd`, `groupadd`

4. **Estude as opções dos comandos**:
   - `-r` ou `-R` para operações recursivas
   - `-a` para mostrar arquivos ocultos
   - `-h` para saída "human-readable"
   - `-l` para listagem detalhada

5. **Atenção às permissões**:
   - Formato simbólico (rwx)
   - Formato numérico (755, 644)
   - Diferenças entre permissões para arquivos e diretórios

## 12. Tabela de Referência Rápida de Comandos

| Comando | Função | Opções Comuns |
|---------|--------|---------------|
| `ls` | Lista arquivos | `-l` (formato longo), `-a` (arquivos ocultos), `-h` (tamanhos legíveis) |
| `cd` | Muda diretório | `cd /caminho`, `cd ..` (diretório pai), `cd ~` (home) |
| `pwd` | Mostra diretório atual | - |
| `cat` | Mostra conteúdo | `cat arquivo`, `cat > arquivo` (criar), `cat >> arquivo` (adicionar) |
| `touch` | Cria arquivo vazio | `touch arquivo` |
| `mkdir` | Cria diretório | `-p` (cria diretórios pai se necessário) |
| `rm` | Remove arquivo | `-r` (recursivo), `-f` (forçado), `-i` (interativo) |
| `cp` | Copia arquivo | `-r` (recursivo), `-v` (verbose) |
| `mv` | Move/renomeia | `-v` (verbose) |
| `chmod` | Altera permissões | `chmod 755 arquivo`, `chmod u+x arquivo` |
| `chown` | Altera dono | `chown usuario:grupo arquivo` |
| `grep` | Busca padrões | `-i` (ignora case), `-r` (recursivo) |
| `find` | Busca arquivos | `-name "padrão"`, `-type f` (arquivos), `-type d` (diretórios) |
| `du` | Uso do disco | `-h` (legível), `-s` (resumo) |
| `df` | Espaço em disco | `-h` (legível) |
| `vi/vim` | Editor de texto | - |
| `useradd` | Adiciona usuário | `-m` (cria home), `-G` (adiciona a grupos) |
| `passwd` | Define senha | `passwd usuario` |
| `groupadd` | Cria grupo | - |
| `who` | Usuários conectados | - |
| `ps` | Processos em execução | `aux` (todos os processos) |
| `top` | Monitor de processos | - |
| `kill` | Termina processo | `-9` (força término) |
| `shutdown` | Desliga sistema | `-h now` (desliga agora), `-r` (reinicia) |
| `head` | Primeiras linhas | `-n` (número de linhas) |
| `tail` | Últimas linhas | `-n` (número de linhas), `-f` (acompanha atualizações) |
| `wc` | Conta linhas/palavras | `-l` (linhas), `-w` (palavras), `-c` (caracteres) |
| `ln` | Cria links | `-s` (link simbólico) |
| `history` | Histórico de comandos | `history` |
