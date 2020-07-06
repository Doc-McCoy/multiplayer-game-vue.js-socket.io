# Jogo 2D Multiplayer com Vue.js e Socket.io

Jogo criado seguindo [este](https://www.youtube.com/watch?v=JEYEpledOxs) tutorial no Youtube.

O projeto consiste em um **server** simples, que armazena a posição do player em um canvas 2D, e um **client**, que se conecta com o server e envia comandos para que o player se movimente. Tudo através do **socket.io**.

## Setup
### Server
- Após clonar o projeto, no diretório raíz do mesmo acesse o server
```
cd server
```
- Instale as dependências
```
npm install
```
- Inicialize o servidor
```
npm run start
```
### Client
- Volte a raíz do projeto e acesse a pasta client
```
cd client
```
- Instale as dependências
```
npm install
```
- Suba o client
```
npm run serve
```

- Abra o navegador, acesse `http://localhost:8080/`, e movimente o player com os botões abaixo do canvas.
- Abra **outro navegador** no mesmo endereço, e tente mexer o player por lá agora, veja que ambos os navegadores atualizam o player simultaneamente

## Fluxo

As anotações a seguir foram todos os passos dados no decorrer do tutorial. Anotei para consultas futuras.

- Criar a pasta `server` e acessá-la
- Inicializar projeto node
- `npm init -y`
- Criar arquivo `app.js`, que será o server
- Instalar o **express** e o **socket.io**
- `npm install express socket.io --save`
- instalar o nodemon (para ter o recurso de hot reloading)
- `npm install nodemon --save-dev`
- Adicionar um script que roda o nodemon no `package.json` (linha 8)
- `"start": "nodemon app.js"`
- O próximo passo, requer o vue cli instalado
- Instalação do VUE CLI: [aqui](https://cli.vuejs.org/guide/installation.html), mas basicamente o comando é:
- `npm install -g @vue/cli`
- Voltar a pasta raíz do projeto, e criar o client com o Vue CLI
- `vue create client` (selecionar template default)
- Acessar o server e rodar
- `npm run start` (repare que start é o script que criamos)
- Instalar o socket.io no client também
- `npm install socket.io --save`
- Renomear e remover os templates dos arquivos `HelloWorld.vue` e `app.js`
- Implementar o código
