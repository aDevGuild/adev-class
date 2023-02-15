---
sidebar_position: 2
---

# Variáveis e Tipos

Agora que você já sabe como escrever seu primeiro código em Python, vamos aprender sobre variáveis e tipos!

## O que são variáveis?

Uma variável é um espaço na memória do computador que pode ser usado para armazenar valores. Por exemplo, se você quiser armazenar o número 5, você pode criar uma variável e atribuir o valor 5 a ela.

## O que são tipos?

Um tipo de dado define as propriedades e operações que podem ser realizadas com um valor. O tipo de dado determina como um valor é armazenado na memória e como ele pode ser manipulado em programas. Alguns dos tipos de dados mais comuns em Python incluem:

- Números: inteiros, floats e complexos.

- Sequências: listas, tuplas e strings.

- Booleanos: True e False.

- Dicionários: mapeamentos de chaves para valores.

- Conjuntos: coleções de elementos únicos.

Além desses tipos de dados básicos, Python também possui tipos de dados mais avançados, como objetos e classes, que permitem aos programadores definir seus próprios tipos de dados personalizados.

Os tipos de dados em Python são dinâmicos, o que significa que o interpretador de Python deduz o tipo de dados automaticamente quando um valor é atribuído a uma variável. Além disso, Python é uma linguagem fortemente tipada, o que significa que os tipos de dados são rigorosamente aplicados em operações, impedindo erros comuns que podem ocorrer em outras linguagens de programação.

## Criando variáveis

Para criar uma variável, você precisa escolher um nome e atribuir um valor a ela. Por exemplo, para criar uma variável chamada `x` e atribuir o valor 5 a ela, você pode escrever o seguinte código:

> Python não tem uma palavra-chave para criar uma variável. Uma variável é criada no momento em que você atribui um valor a ela.

```python
x = 5
```

## Imprimindo variáveis

Para imprimir o valor de uma variável, você pode usar a função `print`:

```python
x = 5
print(x)
```

## Checando o tipo de uma variável

Como mencionado anteriormente, Python é uma linguagem de tipagem dinâmica, o que significa que o tipo de uma variável é determinado automaticamente quando um valor é atribuído a ela.
Um bom exercício para aprender os tipos existentes na linguagem é definir uma variável e verificar o tipo dela.
Para isso, você pode usar a função `type`:

```python
x = 5
print(type(x))
```
