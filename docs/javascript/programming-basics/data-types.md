---
sidebar_position: 3
---

# Tipos de Dados

Parabéns! Você está aprendendo muito rápido!😁👍

Agora que você já sabe o que são variáveis e constantes, vamos aprender um pouco mais sobre os tipos de dados que podemos armazenar.

## O que são tipos de dados?

Os tipos de dados são os tipos de valores que podemos armazenar em variáveis e constantes. Por exemplo, podemos armazenar números, textos, listas, objetos, etc.

### Tipos de dados em JavaScript

JavaScript é uma linguagem de tipagem dinâmica, o que significa que não precisamos especificar o tipo de dado que uma variável ou constante armazena. O tipo de dado é determinado automaticamente pelo valor que atribuímos a ele. Por exemplo, se atribuirmos um número a uma variável, o tipo de dado dessa variável será `number`:

```js
let myNumber = 10;
```

Pode-se dizer, também, que JavaScript é uma linguagem de tipagem fraca, pois é possível atribuir um valor de um tipo de dado a uma variável que está armazenando outro tipo de dado. Por exemplo, podemos atribuir um número a uma variável e, em seguida, atribuir um texto a ela. Isso não é possível em linguagens de tipagem forte, como C, C++ e Java.

```js
let myNumber = 10;
myNumber = 'Hello';
```

### Tipos Primitivos

Os tipos de dados primitivos são os tipos de dados mais básicos que existem. Em Javascript, São eles:

- `number` - Números
- `string` - Textos
- `boolean` - Valores lógicos (verdadeiro ou falso)
- `null` - Valor nulo
- `undefined` - Valor indefinido
- `symbol` - Símbolos
- `bigint` - Números inteiros grandes

### Tipos de Referência (ou Complexos)

Os tipos de referência são os tipos de dados que armazenam uma referência a um valor. Ou seja, o valor não é armazenado diretamente na variável, mas sim em um outro local da memória, e a variável armazena apenas um ponteiro que aponta para o local da memória em que o valor foi salvo. Isso é muito útil quando utilizamos estruturas de dados mais complexas, como objetos e arrays.<br/>

Imagine que você queira armazenar uma lista de números. Você pode criar uma variável para cada número, mas isso não é muito prático. Por isso, podemos armazenar todos os números em um array, que é um tipo de referência. O array armazena uma referência para a lista de números, e não os números em si. Veja o exemplo abaixo:

```js
let myArray = [1, 2, 3]; // Armazena uma referência para a lista de números
```

Sabemos que é complicado... 😅<br/>
Retomaremos este tópico mais adiante.🤐🤓
