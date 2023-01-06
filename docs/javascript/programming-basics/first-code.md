---
sidebar_position: 1
---

# Seu Primeiro Código

Agora que você já [instalou o NodeJS](pathname:///docs/javascript/setup) no seu computador,
vamos começar a escrever nosso primeiro código em JavaScript.

Segundo a lei dos desenvolvedores de toda a galáxia, o seu primeiro código em qualquer linguagem,
deve ser o famoso:

```bash
Hello World!
```

🤯🤯🤯

## Primeiros passos em JS

### O que é o console?

A maioria das linguagens de programação modernas fornecem uma ferramenta para interagir com o código que você escreveu via texto.
Essa é a forma mais básica de interagir com o código que você escreveu, e, justamente por ser a forma mais fácil de mostrar as informações dentro do código,
é muito utilizada no desenvolvimento de aplicações antes de se criar a versão final.

No JavaScript, essa ferramenta é chamada de `console`.

### O clássico da programação, o "Hello World!"

Para escrever nosso primeiro código em JavaScript, vamos criar um arquivo chamado `hello.js` na pasta que você criou para organizar seus códigos de estudo.

Abra o arquivo com o seu editor de texto favorito e escreva o seguinte código:

```js
console.log('Hello World!');
```

Para executar o código, abra o terminal e digite o seguinte comando:

```bash
node hello.js
```

Se tudo der certo, você verá a seguinte mensagem no terminal:

```bash
Hello World!
```

Parabéns por ter escrito seu primeiro código em JavaScript! 😍🎉

Caso você tenha algum problema, verifique se você seguiu todos os passos da [instalação do NodeJS](pathname:///docs/javascript/setup).

## Pensamentos Finais sobre o Console

Durante o desenvolvimento, você pode utilizar o console para testar o código que você escreveu.
É possível, de forma fácil e rápida, imprimir informações importantes para o desenvolvimento do código, como variáveis e funções(que serão explicadas posteriormente).

Você utilizará muito essa ferramenta durante seu aprendizado e carreira como desenvolvedor.

## Extra: O que pode ser impresso no console?

Exemplos dos tipos de informações que podem ser impressas no console:

```js
console.log('Escreve seu melhor texto aqui!'); // Imprime um texto no console
console.log(42); // Imprime um número no console
```

Também é possível utilizar a vírgula para imprimir mais de uma informação por vez no console:

```js
console.log('Seu primeiro texto com um número', 42, '!');
```

Exemplos que você aprenderá mais adiante:

```js
console.log(true); // Imprime um booleano no console
console.log([1, 2, 3, 4, 5]); // Imprime um array no console
console.log({ nome: 'João', idade: 42 }); // Imprime um objeto no console
console.log(function () {
  return 'Hello World!';
}); // Imprime uma função no console
```
