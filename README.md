# ScrapperZ - Web Scraping de Produtos na Amazon

Este projeto implementa um script para fazer scraping de produtos da Amazon, extraindo informações como título, classificação, número de avaliações e URL da imagem do produto, a partir da primeira página de resultados de uma busca.


## Pré-requisitos

Antes de rodar o projeto, você precisará de:

- [Docker](https://www.docker.com/) (opcional)
- [Node.js](https://nodejs.org/en/download)
- [Bun](https://bun.sh/)

## Como Configurar e Rodar o Projeto com Docker (Usando Docker Compose)

#### Passo 1: Clonar o Repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/davidfndss/scrapperz.git
cd scrapperz
```

#### Passo 2: Construir e Rodar o Projeto com Docker
Dentro do diretório raiz do projeto, execute o seguinte comando para construir e iniciar os containers:

```bash
docker-compose up --build
```

Este comando constrói as imagens Docker para o backend e o frontend e inicia os containers

O backend estará disponível em `http://localhost:3333`.
<br>
O frontend estará disponível em `http://localhost:5173`.

#### Passo 3: Acessar o Projeto
Abra o navegador e acesse o frontend em `http://localhost:5173`. Insira um termo de busca (por exemplo, "nike") e clique no botão Buscar. Os resultados dos produtos serão exibidos na página.

#### Passo 4: Parar os Containers
Para parar os containers quando terminar, execute:

``` bash
docker-compose down
```

<br>
<br>

## Como Configurar o Projeto Manualmente (Sem Docker)
Se você não deseja usar Docker, pode configurar o projeto manualmente usando Node.js e Bun. Siga os passos abaixo:

#### Passo 1: Clonar o Repositório
Clone o repositório para sua máquina:

```bash
git clone https://github.com/davidfndss/scrapperz.git
cd scrapperz
```

#### Passo 2: Instalar as Dependências
Primeiro, instale o Bun caso ainda não tenha:

Siga as instruções para instalar o Bun.

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

Instalar as dependências do Frontend:

Navegue até o diretório do frontend e instale as dependências:

```bash
cd ../frontend
npm install
```

#### Passo 3: Rodar o Backend
Agora, vá para o diretório do backend e inicie o servidor Bun:

```bash
cd ../backend
bun run index.ts
```

O servidor do backend estará rodando em `http://localhost:3333`.

#### Passo 4: Rodar o Frontend
Agora, vá para o diretório do frontend e inicie o servidor de desenvolvimento com Vite:

```bash
cd ../frontend
npm run dev
```

O servidor do frontend estará rodando em `http://localhost:5173`.

#### Passo 5: Acessar o Projeto
Abra o navegador e acesse o frontend em `http://localhost:5173`. Insira um termo de busca (por exemplo, "nike") e clique em Buscar. Os resultados dos produtos serão exibidos na página.

#### Passo 6: Parar o Backend e Frontend
Para parar o servidor do backend e frontend, basta interromper os processos no terminal com o atalho `Ctrl + C`.
