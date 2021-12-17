# Discord Bot com Discord.js

**Ainda em desenvolvimento** <br>
Um bot que ao você mandar uma tecnologia em algum canal da comunidade do Discord, ele responderá com a sua documentação 🤓

![Exemplo de utilização](https://cdn.discordapp.com/attachments/921446556832530443/921507667472711680/unknown.png)

## Configurando o ambiente de desenvolvimento

Estou utilizando a versão 16.13.1 do Node.js
1. `npm install discord.js`
2. `npm install discord.js @discordjs/rest discord-api-types`

## Criando o token do bot para interação com a API do Discord

1. [Developers Potal](https://discord.com/developers/docs/intro)
2. Clicar em `Applications` e criar uma nova, completando com a imagem, nome, descrição e tags que quiser
3. Vai na aba de `Bot` e crie um novo, também com a personalização que desejar 
4. Copie o token do bot e cole no código
5. Crie as [permissões necessárias](https://discordapi.com/permissions.html) para esse bot interagir no seu servidor (recomendo usar um servidor teste). Ele pedirá um ID, que você encontra na primeira página de `Application`

## .ENV

Esse arquivo possui o token, o ID da aplicação e o ID do servidor, pois depende do seu ambiente de desenvolvimento e testes. Não esqueça de configurar esse arquivo para que o código rode corretamente!

## Rodar código

* `node index.js`
* Alternativa: `node --experimental-json-modules index.js`

## Acessos

Para que seja possível criar slash commands e utilizar outras ferramentas, é necessário checar se as seguintes permissões estão liberadas:

![slash commands pt 1](https://cdn.discordapp.com/attachments/921446556832530443/921471129204424744/unknown.png)
![slash commands pt 2](https://cdn.discordapp.com/attachments/921446556832530443/921471338907041792/unknown.png)
![slash commands pt 3](https://cdn.discordapp.com/attachments/921446556832530443/921471610953801798/unknown.png)
