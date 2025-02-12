---
author: "Gabriel Coelho Soares"
title: "GUI com Java Swing"
date: "2025-01-12"
description: "Uma breve anotação sobre cada componente do pacote Java Swing"
tags: ["development", "notes"]
categories: ["java"]
ShowToc: true
TocOpen: true
ShowReadingTime: true
ShowWordCount: true
---
{{<backlink "ilp007-01">}}

O pacote `javax.swing` oferece uma ampla gama de componentes gráficos para criar interfaces gráficas de usuário (GUIs) no Java. Esses componentes são conhecidos como **JComponents** e fornecem uma base para criar interfaces modernas e funcionais. Aqui está uma visão geral dos principais **JComponents**:

---

## **1. Contêineres**

Os contêineres são JComponents usados para organizar outros componentes dentro de uma janela.

- **JFrame**: Representa a janela principal da aplicação. Pode conter outros componentes.
  - Exemplo: Uma janela com barra de título, bordas e botões de minimizar, maximizar e fechar.
  - Uso:

    ```java
    JFrame frame = new JFrame("Minha Janela");
    frame.setSize(400, 300);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setVisible(true);
    ```

- **JPanel**: Um contêiner genérico que agrupa componentes. Geralmente usado para organizar layouts dentro de uma `JFrame`.
  - Uso:

    ```java
    JPanel panel = new JPanel();
    panel.add(new JButton("Botão"));
    frame.add(panel);
    ```

- **JScrollPane**: Fornece uma área rolável para outros componentes, como tabelas ou texto.
  - Uso:

    ```java
    JTextArea textArea = new JTextArea(20, 30);
    JScrollPane scrollPane = new JScrollPane(textArea);
    frame.add(scrollPane);
    ```

---

## **2. Componentes de Entrada**

Estes componentes permitem a interação direta do usuário.

- **JButton**: Um botão clicável.
  - Uso:

    ```java
    JButton button = new JButton("Clique Aqui");
    ```

- **JTextField**: Uma caixa de texto para entrada de texto de uma única linha.
  - Uso:

    ```java
    JTextField textField = new JTextField(20);
    ```

- **JPasswordField**: Semelhante ao `JTextField`, mas oculta o texto digitado.
  - Uso:

    ```java
    JPasswordField passwordField = new JPasswordField(20);
    ```

- **JTextArea**: Uma área de texto para múltiplas linhas.
  - Uso:

    ```java
    JTextArea textArea = new JTextArea(5, 20);
    ```

- **JCheckBox**: Uma caixa de seleção.
  - Uso:

    ```java
    JCheckBox checkBox = new JCheckBox("Opção 1");
    ```

- **JRadioButton**: Um botão de opção que faz parte de um grupo.
  - Uso:

    ```java
    JRadioButton radioButton = new JRadioButton("Opção A");
    ButtonGroup group = new ButtonGroup();
    group.add(radioButton);
    ```

- **JComboBox**: Um menu suspenso que permite selecionar uma opção.
  - Uso:

    ```java
    JComboBox<String> comboBox = new JComboBox<>(new String[] {"Opção 1", "Opção 2"});
    ```

- **JSpinner**: Um campo de entrada com controles incrementais/decrementais.
  - Uso:

    ```java
    JSpinner spinner = new JSpinner();
    ```

---

## **3. Componentes de Exibição**

Estes componentes exibem informações ao usuário.

- **JLabel**: Exibe texto ou imagens.
  - Uso:

    ```java
    JLabel label = new JLabel("Texto informativo");
    ```

- **JTable**: Exibe dados em formato tabular.
  - Uso:

    ```java
    JTable table = new JTable(data, columnNames);
    ```

- **JProgressBar**: Mostra o progresso de uma tarefa.
  - Uso:

    ```java
    JProgressBar progressBar = new JProgressBar(0, 100);
    progressBar.setValue(50);
    ```

---

## **4. Menus e Barras de Ferramentas**

Componentes para criar menus e barras de ferramentas.

- **JMenuBar**: Barra de menus para a janela.
  - Uso:

    ```java
    JMenuBar menuBar = new JMenuBar();
    JMenu menu = new JMenu("Arquivo");
    menuBar.add(menu);
    frame.setJMenuBar(menuBar);
    ```

- **JToolBar**: Uma barra de ferramentas.
  - Uso:

    ```java
    JToolBar toolBar = new JToolBar();
    toolBar.add(new JButton("Ferramenta 1"));
    ```

---

## **5. Componentes Avançados**

Componentes para casos mais específicos.

- **JTabbedPane**: Gerencia painéis com guias.
  - Uso:

    ```java
    JTabbedPane tabbedPane = new JTabbedPane();
    tabbedPane.addTab("Aba 1", new JPanel());
    ```

- **JTree**: Exibe dados hierárquicos em formato de árvore.
  - Uso:

    ```java
    JTree tree = new JTree();
    ```

- **JList**: Exibe uma lista de itens.
  - Uso:

    ```java
    JList<String> list = new JList<>(new String[] {"Item 1", "Item 2"});
    ```

---

## **6. Utilitários e Estilo**

- **UIManager**: Permite alterar o tema ou aparência dos componentes Swing.
  - Uso:

    ```java
    UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName());
    ```

- **ToolTipText**: Adiciona dicas informativas aos componentes.
  - Uso:

    ```java
    button.setToolTipText("Clique para executar a ação");
    ```
