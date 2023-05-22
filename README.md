# Nossa Casa Backend

Este repositório serve como template para o backend de um projeto utilizando Node JS para a Nossa Casa.

# Tecnologias

- Node v14.21
- JavaScript / Typescript
- Express
- TypeORM
- postgreSQL v10.23

# Configurando projeto

### Pré requisitos

- [Entendendo linhas de comando](https://tutorial.djangogirls.org/pt/intro_to_command_line/) - É importante entender o que é um terminal e o que são linhas de comando.

### Preparando o ambiente de desenvolvimento

- [Instalar o Git](https://git-scm.com/downloads)
- [Instalar Oh my zsh](https://ohmyz.sh/)
- [Instalar NodeJS](https://nodejs.org/en/)
- Instalar o **Yarn**

  Caso não possua o yarn e sua maquína, abra o terminal do seu sistema operacional e digite o seguinte comando:

  ```bash
  npm install -g yarn
  ```

- [Instalar Postgres](https://www.postgresql.org/download/)
- [Instalar Dbeaver](https://dbeaver.io/download/)
- [Instalar Visual Studio Code](https://code.visualstudio.com/)
  - [Configuração do editor - Rocketseat](https://www.youtube.com/watch?v=c7P03kkrEG8) - _GraphQL e **Live Server** não são necessários serem instalados_
- Clonar repositório

  Abra o terminal do seu sistema operacional e digite o seguinte comando:

  ```bash
  git clone https://github.com/aceleradora-TW/nossa-casa-cms.git
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

# Variáveis de ambiente

Essas são as variaveis de ambiente que essa aplicação precisa para funcionar em qualquer ambiente.
Os valores que devem ser atribuidos a elas vão depender dos ambientes.

Para caso de ambiente **local** (sua máquina) deve ser criado um arquivo `.env` na raiz do projeto

```bash
URL_CMS=http://localhost:1337
```
