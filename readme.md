# Identificador de Bandeira de Cartão de Crédito

## Descrição
Este projeto tem como objetivo desenvolver uma aplicação simples capaz de identificar a bandeira de um cartão de crédito (como Visa, MasterCard, Amex, Elo, etc.) com base no número do cartão. A aplicação utiliza expressões regulares para validar e identificar a bandeira do cartão, seguindo boas práticas de programação.

## Funcionalidades
- Identificação de bandeiras de cartões de crédito com base no número informado.
- Suporte para as seguintes bandeiras:
  - **Visa**
  - **MasterCard**
  - **Elo**
  - **American Express (Amex)**
  - **Discover**
  - **Hipercard**
- Retorno de "Bandeira desconhecida" para números que não correspondem a nenhuma bandeira suportada.
- Validação básica para garantir que o número do cartão seja composto apenas por dígitos.

## Tecnologias Utilizadas
- **JavaScript**: Linguagem principal para implementação da lógica.
- **Node.js**: Para executar o código no ambiente local.

## Como Executar o Projeto
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.
2. Clone este repositório ou baixe os arquivos do projeto.
3. Navegue até o diretório do projeto
4. Abra o terminal e execute o comando `node index.js` para executar a aplicação.
5. A resposta tem que conter a bandeira do cartão.
