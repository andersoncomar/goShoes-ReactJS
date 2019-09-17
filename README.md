# Go Shoes

Projeto e-commerce de vendas de tênis, desenvolvido em ReactJS aplicando Arquitetura Flux com Redux para demonstrar a funcionalidade dessa Arquitetura.

## O que é [Redux](https://redux.js.org/)?

- Biblioteca que implementa Arquitetura Flux;
- Controle de estados globais;
- Quando utilizar o Redux?
  - Quando meu estado tem mais de um “dono”
  - Quando meu estado é manipulado por mais componentes
  - Quando as ações do usuário causam efeitos colaterais nos dados
  - Exemplos: Carrinho de compras, dados do usuário, player de música, etc;

### Ferramenta de API FAKE

Foi utilizado como API [JSON Server](https://github.com/typicode/json-server) uma biblioteca que permite utilizar um arquivo JSON e criar uma API a partir desse arquivo.

#### JSON Server

Para utilizar no terminal ou prompt de comando dentro do diretório do projeto digite:

`json-server server.json -p 3333 -w`

onde:

- `json-server` comando para executar a biblioteca
- `server.json` parametro passando qual arquivo possui a estrutura JSON da API
- `-p 3333` parametro que passa qual porta o JSON Server será inicializado.
- `-w` parametro que ficará observando alteração no arquivo JSON e sendo assim quando houver, irá ser restartado o JSON Server

### Ferramentas de análise de código estático:

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Style Guide utilizada:

- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
