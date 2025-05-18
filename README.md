# PreEntrega 1

## Puertos utilizado:
- DEV - 3000
- PROD - 8080
- TEST - 7000

## Comando de instalación 
- npm install

## Comandos de ejecución 
Para poder iniciar la ejecución(dev,prod,test) ingresa una de los siguientes comandos:

- npm run dev (ejecuta node --watch ./src/app.js) 
- npm run start (ejecuta node ./src/app.js --mode=prod) 
- npm run test (ejecuta node ./src/app.js --mode=test) 

Una vez ingresado el comando, en la consola apareceran los siguientes mensajes:

![ejemplo: mensaje de consola con winston](./src/public/images/img01.png)


##  Registro dinamico de productos

Para realizar el registro de productos ingresar a la siguiente ruta y colocar el numero de productos a registrar:

- api/mocks/products/:products


##  Registro dinamico de usuarios
Para realizar el registro de usuarios ingresar a la siguiente ruta y colocar el numero de usuarios a registrar:

- api/mocks/users/:users 


## Realizado con:
- [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/es/guide/routing.html)
- [Handlebars](https://handlebarsjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)
- [Cookie parser](https://www.npmjs.com/package/cookie-parser)
- [Passport](https://www.passportjs.org/)
