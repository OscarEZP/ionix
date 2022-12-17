<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

para asegurarte que el proyecto se ejecute en tu DB propia crea un archivo .env con el siguiente comando

$ touch .env

dentro del archivo .env ingresa las siguientes variables:

DB_HOST=IP de tu DB
DB_USER=USER de tu BD
DB_PASS=PASSWORD de tu DB
DB_NAME=NAME de tu DB
```



## User

La clase User representa a un usuario en el sistema. Tiene los siguientes campos:

id: Es un número entero que representa el identificador único de cada usuario.
name: Es una cadena de caracteres que representa el nombre del usuario. Puede ser nulo.
email: Es una cadena de caracteres que representa el email del usuario. Se utiliza para iniciar sesión.
password: Es una cadena de caracteres que representa la contraseña del usuario.

## Drug

La clase Drug representa a una droga en el sistema. Tiene los siguientes campos:

id: Es un número entero que representa el identificador único de cada droga.
name: Es una cadena de caracteres que representa el nombre de la droga.
approved: Es un valor booleano que indica si la droga está aprobada para su uso.
min_dose: Es un número entero que representa la dosis mínima permitida para utilizar la droga.
max_dose: Es un número entero que representa la dosis máxima permitida para utilizar la droga.
available_at: Es un valor de tipo datetime que indica desde qué fecha está permitido utilizar la droga.

## Vaccination

La clase Vaccination representa a una vacunación en el sistema. Tiene los siguientes campos:

id: Es un número entero que representa el identificador único de cada vacunación.
name: Es una cadena de caracteres que representa el nombre de la persona que se vacunará.
drug_id: Es un número entero que representa el ID de la droga a vacunar.
dose: Es un número entero que representa la dosis por utilizar en la vacunación.
date: Es un valor de tipo datetime que indica la fecha y hora de la vacunación.


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
