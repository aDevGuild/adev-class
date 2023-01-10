---
sidebar_position: 6
---

# Condicionais

## O que são condicionais?

Condicionais são estruturas de controle que permitem que o programa execute um bloco de código somente se uma determinada condição for verdadeira.

## Como usar condicionais?

### Quais valores um condicional pode receber?

Qualquer valor [booleano ou expressão que retorne um valor booleano](pathname:///docs/javascript/programming-basics/data-types) pode ser usado em uma estrutura condicional.

```js title="if.js"
if (true) {
  console.log('if(true) foi executado');
}
if (false) {
  console.log('if(false) foi executado');
}

let a = true;
if (a) {
  console.log('if(a) foi executado');
}

let x = 5;
let y = 10;
let compare = x > y;
if (a || compare) {
  console.log('if(a || compare) foi executado');
}
if (a && compare) {
  console.log('if(a && compare) foi executado');
}
```

```bash title="if.js output"
if(true) foi executado
if(a) foi executado
if(a || compare) foi executado
```

> Qualquer valor que não seja `0`, `null`, `undefined`, `false` ou `NaN` é considerado `true` e qualquer valor que seja `0`, `null`, `undefined`, `false` ou `NaN` é considerado `false`.

## Múltiplas condições de uma mesma variável

### `if/else`

O primeiro `if` marca o ínicio de uma cadeia de condicionais. Cada `else if` é uma nova condição que será verificada caso a condição anterior seja falsa. O `else` é executado caso todas as condições anteriores sejam falsas.

```js title="if-else.js"
let x = 10;
let y = 5;

if (x == y) {
  console.log('x é igual a y');
} else if (x > y) {
  console.log('x é maior que y');
} else {
  console.log('x é menor que y');
}
```

```bash title="if-else.js output"
x é maior que y
```

### `switch case`

O `switch case` é uma estrutura condicional que permite que o programa execute um bloco de código baseado no valor de uma variável.

```js title="switch-case.js"
let x = 5;

switch (x) {
  case 1:
    console.log('x é igual a 1');
    break;
  case 2:
    console.log('x é igual a 2');
    break;
  case 3:
    console.log('x é igual a 3');
    break;
  default:
    console.log('x não é igual a 1, 2 ou 3');
}
```

```bash title="switch-case.js output"
x não é igual a 1, 2 ou 3
```
