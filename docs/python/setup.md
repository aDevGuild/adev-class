---
sidebar_position: 1
---

# Preparando o Ambiente de Desenvolvimento

Ter um ambiente de desenvolvimento bem organizado, com padrões bem definidos, é essencial para diminuir o estresse e aumentar a produtividade de qualquer desenvolvedor.
Essa organização é importante pois nos permite saber onde encontrar as coisas sem memorizar cada pasta e arquivo, o que é essencial quando estamos trabalhando em um projeto grande, com muitas pessoas e muitos arquivos.

No nosso caso, não estaremos trabalhando em um projeto grande, mas isso vai te ajudar a organizar seus próprios pensamentos durante o processo de aprendizado, além de facilitar a revisão do que você já estudou.

<!-- @TODO: adicionar o link do post sobre aprendizado -->

Poucas pessoas dão importancia para a organização das próprias ideias, do raciocínio, e do aprendizado durante o estudo.
Caso tenha interesse em ler e discutir mais sobre o assunto, acesse o [post (ainda em produção)](pathname:///docs/python/setup) que escrevi sobre o assunto.

## Primeiros Passos para Organização

Para começar a brincar com o Python, nós vamos utilizar uma ferramenta que facilita a execução de códigos Python, o [Google Colab](https://colab.research.google.com/).

O Google Colab é uma ferramenta gratuita que permite a execução de códigos Python em um ambiente virtual, sem a necessidade de instalar nada no seu computador.

> Também é possível executar códigos Python no seu computador, mas isso não será abordado nesse tutorial.
> Caso tenha interesse, acesse o [site oficial do Python](https://www.python.org/downloads/) e siga as instruções de instalação.
> Outra informação interessante é que o ambiente que o Google Colab utiliza é baseado no [Jupyter Notebook](https://jupyter.org/). Vale a pena dar uma olhada nele caso tenha interesse em executar esse ambiente no seu próprio computador.

### 1. Preparando o ambiente

Note que é possível acessar o [Google Colab](https://colab.research.google.com/) diretamente pelo site, mas também é possível acessar o Google Colab através do seu [Google Drive](https://drive.google.com/drive).

Para manter a organização, vamos criar uma pasta para armazenar os arquivos que iremos utilizar.

1. Crie uma conta Google e acesse o seu [Google Drive](https://drive.google.com/drive).
2. Crie uma pasta chamada `Colab Notebooks` na raíz(fora de qualquer outra pasta) do seu Drive, caso ainda não exista nenhuma pasta com esse nome.
3. Dentro da pasta `Colab Notebooks`, tente clicar com o botão direito do mouse na pasta `aDevClass` e escolher a opção `Nova Pasta` para criar uma nova pasta chamada `aDevClass`.
4. Agora, dentro da pasta `aDevClass`, você pode criar uma pasta diferente para cada aula. Por exemplo, para a aula de hoje, você pode criar uma pasta chamada `setup-test`.

### 2. Criando o primeiro arquivo

1. Dentro da pasta que você acabou de criar para a aula, clique com o botão direito do mouse e escolha a opção `Mais > Google Colaboratory`.
2. Uma nova aba será aberta no seu navegador, com um arquivo chamado `Untitled0.ipynb`.
3. No topo da página, clique no nome `Untitled0.ipynb` e renomeie o arquivo para o tema da aula, por exemplo `setup-test.ipynb`.
   > Note que o nome do arquivo deve terminar com `.ipynb`, que é a extensão do arquivo que permite o Google Colab entender que este arquivo é um Jupyter Notebook, e, portanto, pode ser aberto pelo Google Colab.
4. O arquivo será automaticamente criado no seu Google Drive, na pasta que estava aberta quando você clicou para criar um novo arquivo do Google Colab.
5. Para salvar as alterações que fizer nesse arquivo, clique no botão `Arquivo > Salvar` no topo da página, ou pressione `Ctrl + S` no seu teclado.

## Aprendendo a Programar no Google Colab

### Entenda o que fazem cada uma das suas ferramentas

Como já foi citado anteriormente, o **Google Colab** é baseado no **Jupyter Notebook**. Isso significa que o Google Colab é apenas um serviço de nuvem da **Google** para hospedagem e manuseio de **arquivos Jupyter Notebook**.

Nesse sentido, quando falamos no **Google Colab**, estamos nos referindo apenas ao **site/serviço da Google**, e quando falamos em **Jupyter Notebook**, estamos nos referindo ao **tipo de arquivo** que é aberto no Google Colab, mas que também pode ser aberto por outros serviços ou programas no seu próprio computador. Ou seja, **o Colab é apenas um serviço** que facilita a utilização desses arquivos, mas o que estamos aprendendo de verdade é como usar a **ferramenta Jupyter Notebook** para **programar na linguagem Python**.

### O que muda na prática? Células de Código e Texto

A principal mudança que o Jupyter Notebook propõe é a divisão do arquivo em células, que podem ser de código ou de texto.

> Para agilizar a leitura, vou citar os arquivos do Jupyter Notebook, com a extensão `.ipynb`, como **Notebooks**.

Quando você abre um novo Notebook, é notável que ele já cria uma célula de código para você.
Caso queira criar novas células, basta clicar no botão `+ Código` ou `+ Texto` no topo da página, para criar uma célula de código ou de texto respectivamente. Os mesmo botões também podem ser encontrados ao passar o mouse a parte superior ou inferior de uma célula, assim vé possível criar uma nova célula exatamente acima ou abaixo da célula selecionada.

#### Células de Código

São nesses espaços que você irá escrever o seu código Python. Para executar o código, basta clicar no botão de "play" no canto esquerdo da célula, ou pressionar `Ctrl + Enter` no seu teclado.

O resultado da execução do código será exibido logo abaixo da célula, e você pode executar o código quantas vezes quiser, sempre que precisar.

Note que, dessa forma, só será executado o código que estiver dentro da célula selecionada. Para executar o código de todas as células em ordem, basta clicar no botão `Ambiente de Execução > Executar todas` no topo da página, ou pressionar `Ctrl + F9` no seu teclado.

#### Células de Texto

Nesses espaços você pode escrever o texto que quiser, como se estivesse escrevendo um e-mail ou um documento do Word. Essas células de texto são escritas em **Markdown**, que é uma linguagem de marcação de texto que permite a formatação de texto, como negrito, itálico, títulos, listas, etc.

### Por que o Jupyter Notebook facilita a sua vida? Não é só coisa de iniciante!

Caso você ainda não tenha se questionado, eu trarei a seguinte pergunta: **"por que aprender mais uma coisa, como esse tal de Jupyter, quando ainda nem aprendi Python puro?"**

Pode ficar tranquilo, pois você **não precisa aprender nada diferente do Python puro** para utilizar o **Jupyter Notebook**. Todo código Python puro é válido no Jupyter Notebook, e você pode executar o código Python puro no Jupyter Notebook sem problemas e sem mudanças.
A única função do Jupyter Notebook é facilitar a sua leitura e compreensão do código, a agilidade para rascunhar, e a sua aprendizagem. Ele não modifica a forma como você escreve Python.

A proposta do Jupyter Notebook já é explicitada no próprio nome: ele é um **notebook**, ou seja, um **caderno**. Um caderno de anotações que pode ser usado tanto para "rabiscar" códigos (testar ideias), quanto para compartilhar ideias mais elaboradas de forma que facilite a leitura para outras pessoas.

---

Diferente da IDLE(editor de texto + terminal que executa código Python) que vem instalada por padrão no Python, o Jupyter Notebook permite que você escreva várias seções de código em um único arquivo, e que você possa executar cada parte separadamente, sem precisar executar todo o código de uma vez só.
Dessa forma, você pode ver o resultado de cada parte do seu código separadamente sem precisar abrir e fechar várias janelas do seu editor de texto e terminal.

Um diferencial importante na exibição do resultado do seu código no Jupyter Notebook é que ele automatiza grande parte da formatação do resultado de exibições mais visuais, como tabelas, gráficos, imagens, vídeos, etc.

Essa **facilidade de visualização** do resultado do seu código é muito importante para quem está aprendendo a programar, e também é o motivo de tantos profissionais do mercado e da área científica usarem o Jupyter Notebook. Já que, essa rápida formatação dos dados, em conjunto com a possibilidade de **intercalar o código com textos** explicativos, além de torná-lo uma ótima **ferramenta de prototipação**, torna os Notebooks ótimos para criar apresentações e provas de conceito, quase como um artigo.
