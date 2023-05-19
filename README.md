# Template Node JS

Este repositório serve como template para o backend de um projeto utilizando Node JS para a Nossa Casa.

# Tecnologias

- Node
- JavaScript / Typescript
- Express
- TypeORM

# Configurando projeto

### Pré requisitos

- [Entendendo linhas de comando](https://tutorial.djangogirls.org/pt/intro_to_command_line/) - É importante entender o que é um terminal e o que são linhas de comando.

### Preparando o ambiente de desenvolvimento

- [Instalar o Git](https://git-scm.com/downloads)
- [Instalar Oh my zsh](https://ohmyz.sh/)
- [Instalar NodeJS](https://nodejs.org/en/)
- Instalar o **Yarn**

  Abra o terminal do seu sistema operacional e digite o seguinte comando:

  ```bash
  npm install -g yarn
  ```

- [Instalar Postgres](https://www.postgresql.org/download/)
- [Instalar Beekeeper](https://www.beekeeperstudio.io/get)
- [Instalar Visual Studio Code](https://code.visualstudio.com/)
  - [Configuração do editor - Rocketseat](https://www.youtube.com/watch?v=c7P03kkrEG8) - _GraphQL e **Live Server** não são necessários serem instalados_
- Clonar repositório

  Abra o terminal do seu sistema operacional e digite o seguinte comando:

  ```bash
  git clone <endereço-do-repositorio-com-terminação.git>
  ```

- Iniciando a aplicação

  Após clonar esse repositório para sua maquina, ainda no terminal digite e aguarde a insstalação ser concluída:

  ```bash
  cd nossa-casa-api
  yarn install
  ```

  Após a instalação, digite o comando:

  ```bash
  yarn dev
  ```

  você deverá notar uma mensagem no terminal ao final:

  ```bash
  Server's running in http://localhost:9000
  ```

- Rodar testes End to End

Subir aplicação após criar a modificação e o testes na pasta ./e2eTest
`bash yarn dev `

Rodar todos os testes e2e
`bash yarn run test:e2e `

# TypeORM

- Criando Migration

  ```bash
  yarn typeorm migration:create -n <NomeDaMigration>
  ```

# Variáveis de ambiente

Essas são as variaveis de ambiente que essa aplicação precisa para funcionar em qualquer ambiente.
Os valores que devem ser atribuidos a elas vão depender dos ambientes.

Para caso de ambiente **local** (sua máquina) deve ser criado um arquivo `.env` na raiz do projeto

```bash
URL_CMS=http://localhost:1337
```
