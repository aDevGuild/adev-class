---
sidebar_position: 7
---

# Laços de repetição (loops)

## O que são laços de repetição?

Laços de repetição são estruturas de controle que permitem executar um bloco de código várias vezes.

## Laço `for`

O laço `for` é um laço de repetição que executa um bloco de código enquanto certa condição for verdadeira. Ele é composto por quatro partes:

- **inicialização**: é onde você declara e inicializa uma variável que será utilizada para controlar o laço de repetição.

- **condição**: é uma expressão que será avaliada a cada iteração do laço de repetição. Se a condição for verdadeira, o laço de repetição será executado novamente. Se a condição for falsa, o laço de repetição será encerrado.

- **incremento**: é onde você incrementa ou decrementa a variável de controle do laço de repetição.

- **corpo**: é um bloco de código que será executado a cada iteração do laço de repetição.

### Sintaxe

```js
for (inicialização; condição; incremento) {
  // código a ser executado
}
```

### Exemplo

```js
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Output:
// 0 1 2 3 4 5 6 7 8 9 10
```

## Laço `while`

O laço `while` é um laço de repetição que executa um bloco de código apenas enquanto certa condição for verdadeira. Ele é composto por duas partes:

- **condição**: é uma expressão que será avaliada a cada iteração do laço de repetição. Se a condição for verdadeira, o laço de repetição será executado novamente. Se a condição for falsa, o laço de repetição será encerrado.

- **corpo**: é um bloco de código que será executado enquanto a condição for verdadeira.

### Sintaxe

```js
while (condição) {
  // código a ser executado
}
```

### Exemplo

```js
while (true) {
  console.log('Infinito!🤯');
}

// Output:
// Infinito!🤯
// Infinito!🤯
// Infinito!🤯
// ...
```

## Laço `do...while`

O laço `do...while` possui um funcionamento semelhante ao laço `while`, com a diferença de que o bloco de código será executado pelo menos uma vez, mesmo que a condição seja falsa. Uma vez que o `do` é sempre executado antes da condição.

- **corpo**: é um bloco de código que será executado pelo menos uma vez.

- **condição**: é uma expressão que será avaliada a cada iteração do laço de repetição. Se a condição for verdadeira, o laço de repetição será executado novamente. Se a condição for falsa, o laço de repetição será encerrado.

### Sintaxe

```js
do {
  // código a ser executado
} while (condição);
```

### Exemplo

```js
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);

// Output:
// 0 1 2 3 4 5 6 7 8 9 10
```
