---
sidebar_position: 1
---

# Preparando o Ambiente de Desenvolvimento

Ter um ambiente de desenvolvimento bem organizado, com padrões bem definidos, é essencial para diminuir o estresse e aumentar a produtividade de qualquer desenvolvedor.
Essa organização é importante pois nos permite saber onde encontrar as coisas sem memorizar cada pasta e arquivo, o que é essencial quando estamos trabalhando em um projeto grande, com muitas pessoas e muitos arquivos.

No nosso caso, não estaremos trabalhando em um projeto grande, mas essa organização vai te ajudar a organizar seus próprios pensamentos durante o processo de aprendizado, além de facilitar a revisão do que você já estudou.

<!-- @TODO: adicionar o link do post sobre aprendizado -->

Poucas pessoas dão importancia para a organização das próprias ideias, do raciocínio, e do aprendizado durante o estudo.
Caso tenha interesse em ler e discutir mais sobre o assunto, acesse o [post (ainda em produção)](pathname:///docs/python/setup) que escrevi sobre o assunto.

## Primeiros passos

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
4. Para salvar as alterações que fizer nesse arquivo, clique no botão `Arquivo > Salvar` no topo da página, ou pressione `Ctrl + S` no seu teclado.

### 3. Como programar no Google Colab
