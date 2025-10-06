## Daily Trends app [WIP]

- Proyecto de una app con un servicio de scrapping de noticias y un servicio API Rest que integra con MongoDB. Al iniciar el proyecto, empieza el proceso de scrapping de la web de [El País](https://elpais.com) para recuperar las 5 primeras noticias de la portada. 
- Una vez obtenidas, las almacena en una base de datos MongoDB, en forma de documentos JSON.

- Este proyecto cuenta también con una API para consumir las noticias guardadas en BBDD

### Instrucciones para arrancar el proyecto 🚀

- Si es la primera vez que inicias el proyecto, ejecuta en la terminal el comando:

```bash
npm install

```

- Una vez instaladas las dependencias, arranca el proyecto con el comando:

```bash
npm run dev

```


### Tecnologías utilizadas 🤖

- La API que sirve las noticias está desarrollada en NodeJS uyilizando el framework Express
- La integración con Mongo se realiza mediante la librería Mongoose, la cual proporciona, además de un método simple para conectar con la bbdd, un ODM con el que trabajar con los documentos
- Para recuperar las noticias, he utilizado la librería Puppeteer y JSdom