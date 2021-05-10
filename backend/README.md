# Backend

## ⚙ Requisitos

- Node.js e Npm ou Yarn (Npm já vem junto com o Node.js)

## 🔥 Instalação e execução

- Faça um clone desse repositório;
- Dentro da **backend**, execute `npm install` ou `yarn` no terminal para instalar as dependências;
- Para conectar ao banco de dados, no arquivo **ormconfig.json** altere os valores de `host,port,username,password` e `database` se necessário;
- No arquivo **.env**, defina os valores de `API_KEY` e `SERVICE_URL` com suas credenciais do **IBM Watson**;
- Execute `yarn typeorm migration:run` para criar a tabela no banco de dados;
- Execute `npm run dev` ou `yarn dev` para iniciar o backend; </br> </br>

## Rotas

|    Rota     | HTTP Method |     Descrição     |
| :---------: | :---------: | :---------------: |
| `/comments` |    POST     | Criar comentário. |

</br>

Body: Vai ser criado o comentário e um arquivo de audio que vai ser salvo com um hash na pasta **src/tmp**

```json
{
  "comment": "Exemplo de comentário"
}
```

Response:

```json
{
  "id": 1,
  "comment": "Exemplo de comentário",
  "comment_url": "http://localhost:3333/stream/tmp/hash.wav",
  "created_at": "2021-05-10T19:26:24.250Z"
}
```

</br>

| Rota            | HTTP Method |        Descrição         |
| :-------------- | :---------: | :----------------------: |
| `/comments`     |     GET     | Lista todos comentários. |
| `/comments/:id` |     GET     | Lista comentário por ID. |
