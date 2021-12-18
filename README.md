# app-4rq95d4d
## API desenvolvida com Laravel e Vue.JS, cadastro de produtos com compra/venda.

O back-end foi desenvolvido com o Laravel 8.0, utlizando Repository Pattern. O Front-end foi desenvolvido com Vue.js e o Framework Vuetify, seguindo a estrutura de pastas/conceitos da Clean Architecture (Arquitetura Limpa).

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Composer](https://getcomposer.org), [Laravel V8](https://laravel.com/), [PHP ^7.3], [NPM](https://docs.npmjs.com/cli/v7/commands/npm-install/). 

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone <https://github.com/julioolver/app-4rq95d4d>

# Acesse a pasta do projeto no terminal/cmd
$ cd app-4rq95d4d

<<<<<<< HEAD
# Vá para a pasta api (back-end)
$ cd api
=======
# Vá para a pasta api-appmax (back-end)
$ cd api-appmax
>>>>>>> 364569d2219675fcf958fe9a6aec1ecd78e00d9d

# Instale as dependências
$ composer install

# Rodando as migrations do Banco de Dados
$ php artisan migrate

# Defina as configurações do servidor
$ vim .env

# Rotas: 
api/product
api/sale
api/purchase
```

### 🎲 Rodando o Front-End

```bash

# Acesse a pasta do projeto no terminal/cmd
$ cd app-4rq95d4d

# Vá para a pasta front-end
$ cd front-end

# Instale as dependências
$ npm i

# Editar URL da API (back-end) em
$ ~/src/plugins/axios2.js

# Execute a aplicação em modo de desenvolvimento
$ npm run serve
```


