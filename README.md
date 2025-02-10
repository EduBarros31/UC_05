# Catálogo de Livros

Este projeto é uma API simples para gerenciar um catálogo de livros. Ele permite listar e adicionar livros ao catálogo.

## Tecnologias Utilizadas

- Node.js
- Express
- dotenv

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/catalogo_livros.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd catalogo_livros
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```
4. Crie um arquivo `.env` na raiz do projeto e adicione a seguinte linha:
    ```env
    PORT=coloque_aqui_porta
    ```

## Uso

1. Inicie o servidor:
    ```sh
    npm start
    ```
2. Acesse a API em `http://localhost:3000`.

## Endpoints

### Listar Livros

- **URL:** `/livros`
- **Método:** `GET`
- **Resposta de Sucesso:**
  - **Código:** `201`
  - **Conteúdo:** Lista de livros

### Adicionar Livro

- **URL:** `/livros`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
     "id": "1",
     "titulo": "Título do Livro",
     "autor": "Nome do Autor",
     "anoPublicacao": 2021,
     "genero": "Gênero do Livro"
  }
  ```
- **Resposta de Sucesso:**
  - **Código:** `201`
  - **Conteúdo:** Livro adicionado

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
