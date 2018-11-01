# Almundo ejercicio 1 - Api Rest

Estoy utlizando el Stack NodeJS - express - mongoDB + mongoose, la base de datos está hosteada en mLab por lo que no hay que configurarla localmente.

## Ejecutar el proyecto

- Correr **npm run pre-install** (Para instalar las dependencias de los modulos db y api).
- La base de datos ya tiene registros, pero si quieres añadir más o repoblarla debes ejecutar el comando **npm run populate-db**.
- Ejecuta el proyecto con **npm start**.

## Endpoints

- GET http://localhost:3300/api/hotel - retorna un array con todos los hoteles
- GET http://localhost:3300/api/hotel/:_id - retorna los datos del hotel con _id = :_id
