# Challenge de Mercado Libre - Frontend #

## Información General ##
### Test Práctico de Mercado Libre. ###
# #
Se utilizó el desarrollo "Mobile First", teniendo en cuenta la resolución en 3 dispositivos (consola desarrollador de Chrome):

    Iphone 6/7/8            375 x 667
    Ipad                    768 x 1024
    Laptop with touch       1280 x 950

Se utilizó el Framework NextJs, recomendado por los desarrolladores de React, para aplicaciones que poseen contenido dinámico, el mismo implementa Server Side Rendering `SSR`.
 
En el lado del servidor, se utilizó Node, Express y Axios, mientras que en lado del cliente, se utilizó React y SASS para los estilos, incorporando la utilización de varios `Hooks` provistos por React, y gestionando el estado general de la aplicación por medio de `Redux`.

## Iniciar aplicación ##
### Servidor ###
```
cd server
npm install
npm run dev
```
Por defecto corre en el puerto 4000
### Cliente ###
```
cd client
npm install
npm run dev
```
Por defecto corre en el puerto 3000
### Ejecutar Test de Control ###
```
cd client
npm run test

cd server
npm run test
```
## Aclaraciones ## 
Se respetaron las especificaciones dadas, juntos con los diseños, tales como márgenes, padding, colores, tamaños de fuentes, tamaño de imagenes. No se justificaron los textos en la descripcion del detalle de un producto, para imitir los diseños.

Se utilizaorn los assets dados (logo, search y shipping).

Para respetar el diseño, en el listado de resultados de productos, aparece junto a cada producto la localidad del vendedor, por lo que se agrego el campo `location` al formato solicitado como resultado de busqueda.

No se utilizaron mas datos de la API, para no cambiar los diseños dados, agregando información no solicitada.

Se corroboró que en la consola del navegador, no arroje ningun error ni warning al navegar por la aplicación.

## SEO ##

- Titulos dinamicos, según el contenido de la página que se esta mostrando.
- Nombre de los directorios y de los archivos, autodescriptivos. 
- Aplicación de palabras claves, título, descripción, encabezados.

## Datos ##

- Se utilizaron medidas (REMs), Fuentes (google fonts) y colores, declarados en varibales en los archivos SASS, como así también variables para las resoluciones de mobile, tablet y desktop.

- Se quitaron los estilos por defecto, usando `Normalize` para quitar todos los Agent Styles (estilos de los navegadores).

## Tests ##

Los tests fueron desarrollados utilizando Jest, como marco de prueba de la aplicación, y la librería recomendada por los desarrolladores de React, siendo Testing Library, para renderizar los componentes y probar los mismos.

@testing-library/react: accediendo a los metodos (screen y render).

@testing-library/jest-dom: para tener mayor cantidad de metodos disponibles a utilizar.

Además, se utilizaron las siguientes librerías para la configuración de forma correcta de Jest: full-icu, identity-obj-proxy, y algunas librerías para la correcta transpilación de Babel.

## Otras librerías utilizadas ##
sass: para escribir los estilos con la sintaxis de sass.

prettier: para dar formato al código, respetando los estándares.

eslint: para validar el código, resptando los estándares de Js.

prop-types: para validar las props en todos los componentes.

react-hot-toast: para mostrar alertas al usuario, sean de éxito o de error en caso de ocurrir alguno.

axios: para realizar las solicitudes HTTP y consumir la API de mercado libre.

cors: para poder vincular el front con el back, permitiendo enviar solicitudes desde una URL del front, a otra URL del back.

express: como servidor.

nodemon: para ver en tiempo real los cambios realizados en el servidor, sin necesidad de reiniciarlo manualmente.

supertest: para realizar los test en la API, en el servidor.