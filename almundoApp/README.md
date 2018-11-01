# Almundo ejercicio 2 - App móvil

Respositorio de la aplicación movil, del examen de almundo.

## Levantamiento de la aplicación

- La aplicación fue creada con el React Native CLI, por lo que para correrla necesitas tenerlo instalado.  
- La Api la he hosteado en [heroku](https://almundo-excercise.herokuapp.com/api/hotel) para que no te preocupes por cambiar la dirección a la que se hacen las peticiones por la IP de tu equipo. Sin embargo, si deseas que las peticiones se hagan a tu servidor local debes cambiar el archivo `src/utils/http.js`.
```javascript
// Así debe quedar el archivo y cambias {your_ip} por tu ip

async function httpClient (method, resource) {
  //const baseURL = 'https://almundo-excercise.herokuapp.com/api/'
  const baseURL = 'http://{your_ip}:3300/api/'
    
  ...
```
- Ejecutar `npm install`.
- Ejecutar `react-native run-android`.
