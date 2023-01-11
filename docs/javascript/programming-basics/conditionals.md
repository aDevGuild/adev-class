---
sidebar_position: 6
---

# Condicionais

## O que são condicionais?

Condicionais são estruturas de controle que permitem que o programa execute um bloco de código somente se uma determinada condição for verdadeira.

## Como usar condicionais?

Qualquer valor [booleano ou expressão que retorne um valor booleano](pathname:///docs/javascript/programming-basics/data-types) pode ser usado em uma estrutura condicional.

Por exemplo, no código seguinte:

```js title="if.js"
if (true) {
  console.log('if(true) foi executado');
}
if (false) {
  console.log('if(false) não será executado');
}

let a = true;
if (a) {
  console.log('if(a) foi executado');
}

let x = 5;
let y = 10;
if (a || x > y) {
  console.log('if(a || x > y) foi executado');
}
if (a && x > y) {
  console.log('if(a && x > y) não será executado');
}
```

A saída será:

```bash title="if.js output"
if(true) foi executado
if(a) foi executado
if(a || x > y) foi executado
```

Pois somente os blocos de código cujas expresões são verdadeiras foram executadas.

- `true` pode ser traduzido literalmente como verdadeiro, é a palavra chave que representa o valor booleano verdadeiro na programação. Assim como `false` que representa o valor booleano falso.
- A variável `a` é verdadeira pois foi inicializada com o valor `true`.
- A expressão `a || x > y` é verdadeira pois o operador lógico 'ou' exige que no mínimo um dos dois valores seja verdade para que a expressão toda resulte em verdadeira. Sendo que `a` é verdadeira, mesmo que `x > y` seja falsa.

Entender que essas expressões se resolvem como uma conta matemática até que resulte em apenas um único valor verdadeiro ou falso é fundamental para entender como estruturas condicionais mais complexas funcionam.

Pois, assim como em uma conta, a ordem em que elas são resolvidas importa:

```js
let x = false;
let y = false;
let z = true;
console.log((x && y) || z); // true
console.log(x && (y || z)); // false
```

E, conforme o número de variáveis na sua condição aumenta, e/ou outras estruturas que retornam valores booleanos são adicionadas, a ordem em que elas são resolvidas se torna cada vez mais importante.

> Note que, para o `if/else`, receber qualquer valor final que não seja `0`, `null`, `undefined`, `false` ou `NaN` é considerado `true` e qualquer valor que seja `0`, `null`, `undefined`, `false` ou `NaN` é considerado `false`.
>
> ```js
> let a; // undefined
> if (a) {
>   console.log('isso não executa');
> }
> let b = 42;
> if (b) {
>   console.log('isso executa');
> }
> ```

## Múltiplas condições

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
