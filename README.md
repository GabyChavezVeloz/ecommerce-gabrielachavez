# Bienvenido a Cat Shoes!

Cat Shoes es una aplicación creada en React JS para la venta de zapatos con temática de gatos. Existen varios modelos para poder elegir y finalizar una compra.

Este proyecto se realizó para aplicar los conocimientos adquiridos en el curso y al mismo tiempo tener un sito donde se puedan encontrar zapatos con modelos de gatos, ya que no es muy común encotnrar zapatos con este tema.


## Herrarmientas utilizadas:

* **react 18.0.0 :** Es la base del código, se uso para la estructora y todos los componentes de la aplicación. Es una libreria que contiene la funcionalidad base de los componentes de react.
* **firebase 9.8.1 :** Usado para crear una conexión a la base de datos y poder almacenar infomación y leerla de ahí. Permite crear colecciones, obtener y agregar objetos en el tiempo de ejecución. La documentación sirvió de guía para implementar los metódos. Se puede encontrar [aquí](https://firebase.google.com/docs/reference/js/firestore_?hl=en&authuser=0)
* **react-dom 18.0.0 :** Se uso para crear la estructura del proyecto, para inicializar el proyecto.
* **react-router-dom 6.3.0 :** Esta dependencia se usó para hacer la navegación entre páginas, redireccionar a otras páginas al dar click en un componente.
* **react-scripts 5.0.0 :** Dependencia que sirve para ejecutar los scripts que vienen en el archivo package.json.
* **react-toastify 9.0.2 :** Fue útil para mostrar mensajes en pantalla, ya sean informativos o de error s través de una notificación.
* **sass 1.50.0 :** Se utilizó para la creación de los CSS de la aplicación.
* **testing-library/jest-dom 5.16.4 :** Agregada por default al crear el proyecto con create-react-app.
* **testing-library/react 12.1.4 :** Agregada por default al crear el proyecto con create-react-app.
* **testing-library/user-event 13.5.0 :** Agregada por default al crear el proyecto con create-react-app.
* **web-vitals 2.1.4 :** Agregada por default al crear el proyecto con create-react-app.

## Pasos de instalación:
1. Abrir la consola de git bash y descargar el código con el comando *git clone https://github.com/GabyChavezVeloz/ecommerce-gabrielachavez*
1. Abrir la consola de windows y navegar hasta la carpeta .../ecommerce-gabrielachavez
1. Ejecutar el comando *npm install*
1. Una vez instaladas las dependencias, ejecutar el comando *npm start* para inicar la aplicación en un server local.
1. Ir a la dirección [http://localhost:3000/](http://localhost:3000/)

## Funcionalidad específica:

* La funcionalidad de agregar productos al carrito solo permite agregarlo si el producto no existe en él, de lo contrario mostrará un mensaje indicando que el producto ya fue agregado.
* En la sección de carrito se hizo una validación cuando se piden los datos del usuario, en caso de que vengan vacios se pone un valor por default y ese será guardado en la base de datos. En los modulos hijos se agrego el memo para evitar que se esten actualziando esa información cada que se tiene un cambio en los input.

## Deploy

El deploy de la página está en este [link](https://629d686a0db4083de6ce3ae0--clever-alfajores-e65323.netlify.app/)
