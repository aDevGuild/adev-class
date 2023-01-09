---
sidebar_position: 4
---

# Operadores

## O que são operadores?

Operadores são símbolos que realizam operações matemáticas, lógicas e de comparação.

## Operadores de Atribuição

Operadores de atribuição são utilizados para atribuir valores a variáveis.

```js
let x = 10; // atribui o valor 10 a variável x
```

## Operadores Aritméticos

Operadores aritméticos são utilizados para realizar operações matemáticas.

```js
let soma = 10 + 5; // 15
let subtracao = 10 - 5; // 5
let multiplicacao = 10 * 5; // 50
let divisao = 10 / 5; // 2
let modulo = 10 % 5; // 0
```

## Operadores de Comparação e Lógicos

Operadores de comparação são utilizados para comparar valores.

```js
let igual = 10 == 5; // false
let igualEstrito = 5 === '5'; // false
let diferente = 10 != 5; // true
let diferenteEstrito = 5 !== '5'; // true
let maior = 10 > 5; // true
let menor = 10 < 5; // false
let maiorOuIgual = 10 >= 5; // true
let menorOuIgual = 10 <= 5; // false
```

## Extra: Operadores de Compostos

### Operadores de Compostos de Atribuição

Operações de atribuição que dependem do valor atual da variável.

```js
let x = 10;
x += 5; // x = x + 5

let y = 10;
y -= 5; // y = y - 5

let z = 10;
z *= 5; // z = z * 5

let w = 10;
w /= 5; // w = w / 5

let v = 10;
v %= 5; // v = v % 5
```

### Operadores de Incremento e Decremento

Operadores que incrementam ou decrementam o valor da variável em 1.

```js
let i = 0;
i++; // i = i + 1

let j = 0;
j--; // j = j - 1
```

### Operadores de String

Operadores que concatenam strings.

```js
let nome = 'Alexandre';
let sobrenome = 'Yamauchi';
let nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto); // Alexandre Yamauchi
```

```js
let nome = 'Alexandre';
nome += ' Yamauchi';

console.log(nome); // Alexandre Yamauchi
```

## O que significa operador unário, binário e ternário?

### Operadores unários

Operadores que recebem apenas um operando, como o operador de incremento.
A operação é realizada no próprio operando.

_Operando: valor que está sendo utilizado na operação._

```js
let x = 10;
x++; // x = x + 1
```

### Operadores binários

Operadores que recebem dois operandos.

Por exemplo, o operador de soma recebe dois operandos e realiza a soma entre eles.

```js
let x = 10;
let y = 5;
let soma = x + y;
```

### Operadores condicionais (ternários)

Operadores que recebem três operandos.

Por exemplo, o operador ternário recebe três operandos e retorna um deles. O operador ternário é utilizado para fazer comparações.<br/>
Caso a comparação seja verdadeira, o primeiro operando é retornado, caso contrário, o segundo operando é retornado.

Ou seja, o operador ternário é uma forma simplificada de escrever uma estrutura condicional. Recebe três operandos, sendo o primeiro a condição, o segundo o valor caso a condição seja verdadeira e o terceiro o valor caso a condição seja falsa.

```js
let x = 10;
let y = 5;
let maior = x > y ? x : y;

console.log(maior); // 10
```
