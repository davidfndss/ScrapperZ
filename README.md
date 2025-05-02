# ScrapperZ - Web Scraping de Produtos na Amazon

Este projeto implementa um script para fazer scraping de produtos da Amazon, extraindo informações como título, classificação, número de avaliações e URL da imagem do produto, a partir da primeira página de resultados de uma busca.

<br>

![Group 7](https://github.com/user-attachments/assets/6948d478-e763-441d-b903-072d2ece2f94)

<br>

## Pré-requisitos

Antes de rodar o projeto, você precisará de:

- [Docker](https://www.docker.com/) (opcional)
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download)
- [Bun](https://bun.sh/)

## Como Configurar e Rodar o Projeto com Docker (Usando Docker Compose)

### Passo 1: Clonar o Repositório

Primeiro Abra o terminal e, clone o repositório para sua máquina local:

```bash
git clone https://github.com/davidfndss/scrapperz.git
cd scrapperz
```

### Passo 2: Construir e Rodar o Projeto com Docker
Dentro do diretório raiz do projeto, execute o seguinte comando para construir e iniciar os containers:

```bash
docker-compose up --build
```

Este comando constrói as imagens Docker para o backend e o frontend e inicia os containers

O backend estará disponível em `http://localhost:3333`.
<br>
O frontend estará disponível em `http://localhost:5173`.

### Passo 3: Acessar o Projeto
Abra o navegador e acesse o frontend em `http://localhost:5173`. Insira um termo de busca (por exemplo, "nike") e clique no botão Buscar. Os resultados dos produtos serão exibidos na página.

### Passo 4: Parar os Containers
Para parar os containers quando terminar, execute:

``` bash
docker-compose down
```

<br>
<br>

## Como Configurar o Projeto Manualmente (Sem Docker)
Se você não deseja usar Docker, pode configurar o projeto manualmente usando Node.js e Bun. Siga os passos abaixo:

#### Passo 1: Clonar o Repositório
Abra um Terminal e Clone o repositório para sua máquina:

```bash
git clone https://github.com/davidfndss/scrapperz.git
cd scrapperz
```

### Passo 2: Instalar as Dependências
É necessário ter o Bun instaldo para prosseguir. <br>
Verifique se o Bun foi instalado corretamente rodando o comando:

```bash
bun --version
```

Em seguida, instale as dependências do backend:

Navegue até o diretório do backend e instale as dependências:

```bash
cd backend
bun install
```

Navegue até o diretório do frontend e instale as dependências:

```bash
cd ../frontend
npm install
```

### Passo 3: Rodar o Backend
Agora, vá para o diretório do backend e inicie o servidor Bun:

```bash
cd ../backend
bun run index.ts
```

O servidor do backend estará rodando em `http://localhost:3333`.

### Passo 4: Rodar o Frontend
Agora, precisamos iniciar o servidor de desenvolvimento com Vite. <br>
Abra um **segundo terminal separado** e execute:

```bash
cd scrapperz/frontend
npm run dev
```

O servidor do frontend estará rodando em `http://localhost:5173`.

> Importante: o backend e o frontend devem rodar ao mesmo tempo. Para isso, é necessário ter dois terminais separados — um para rodar o backend e outro para o rodar frontend.

### Passo 5: Acessar o Projeto
Abra o navegador e acesse o frontend em `http://localhost:5173`. Insira um termo de busca (por exemplo, "nike") e clique em Buscar. Os resultados dos produtos serão exibidos na página.

### Passo 6: Parar o Backend e Frontend
Para parar o servidor do backend e frontend, basta interromper os processos no terminal com o atalho `Ctrl + C`.


### Tecnologias utilizadas no projeto:
![Bun](https://img.shields.io/badge/bun-330F63?style=for-the-badge&logo=bun&logoColor=white)&nbsp;
![Vite](https://img.shields.io/badge/vite-%23ED8B00?style=for-the-badge&logo=vite&logoColor=white)&nbsp;
![Docker](https://img.shields.io/badge/docker-darkblue?style=for-the-badge&logo=docker&logoColor=white)&nbsp;
![Typescript](https://img.shields.io/badge/typescript-blue?style=for-the-badge&logo=typescript&logoColor=white)&nbsp;
![Node js](https://img.shields.io/badge/node.js-darkgreen?style=for-the-badge&logo=node.js&logoColor=white)&nbsp;
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)&nbsp;
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)&nbsp;
![HTML5](https://img.shields.io/badge/HTML5-%23FF2D20?style=for-the-badge&logo=html5&logoColor=white)&nbsp;
