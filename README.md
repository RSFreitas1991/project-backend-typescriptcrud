# Typescrit Crud

# Contexto
O objetivo deste projeto é a criação de um CRUD em uma API REST que simula a gestão de uma loja fictícia utilizando typescrit e validação de JSON Web Token .
> O projeto conta com Docker Compose pronto para subir tanto a aplicação quanto o mysql server.
## Rotas disponíveis

> GET: http://localhost:3000/products  
> GET: http://localhost:3000/products/:id  
> PUT: http://localhost:3000/products/:id  
> DELETE: http://localhost:3000/products/:id  
> POST: http://localhost:3000/products/  
> GET: http://localhost:3000/sales/:id  
> GET: http://localhost:3000/sales/   
> POST: http://localhost:3000/sales/:id  

## Técnologias usadas

> Desenvolvido usando: Express.JS, mySQL, Typescript 4.8 e Docker Compose

## Instalando Dependências

```bash
npm install
``` 
## Executando aplicação

> Deve ser configurado um arquivo .env com as seguintes variáveis de ambiente:  
MYSQL_HOST,  
MYSQL_USER,  
MYSQL_PASSWORD,  
MYSQL_DATABASE,  
MYSQL_PORT,  
PORT,  
JWT-SECRET  

  ```
npm migration && npm seed && npm start
  ```
