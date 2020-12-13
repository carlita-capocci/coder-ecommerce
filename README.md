## Trabajo final del Curso React JS de CoderHouse

## Proyecto E-Commerce Libreria


Realizado **Carla Capocci**



## Descripción
```
Este proyecto fue creado con [Create React App].
En el he utilizado Bootstrap 4 y Material UI para agilizar el desarrollo de los estilos y Firebase para almacenar la información que se utiliza en la app.

```

### Instrucciones de instalación 

```
git clone https://github.com/carlita-capocci/coder-ecommerce

npm install

npm start

// Abrir navegador en http://localhost:3000/

```
### Navegacion

La **navegación** ocurre en todo momento utilizando el router de la librería **react-router-dom** 

### Componentes

La navegacion del e-commerce la determina el componente **Navbar** que esta accesible durante toda la experiencia. Un menu desplegable llamado **Categorias** que al desplegarse contiene **productos**, **novedades** y **ultimos ingresos**, enrutados respectivamente a los links con los diferentes libros. Ademas contiene un carrito de compras.

**Home** Contiene el nav y un carousel con algunos productos.

**ItemList**  Contiene el listado de productos. **ItemList** 
Al hacer click en un producto del listado permite ver su descripción
(imagen, precio, selector de cantidad de productos, un boton para comprar y un boton para volver al home).


**Cart** Contiene el listado de productos seleccionados, la cantidad por producto elegido, la suma del precio de las unidades y la suma total de todos los productos, un boton para confirmar la compra que nos lleva al componente **Form**.

**Form** Es un formulario para confirmar la compra, nos pide nombre y apellido, telefono, email y repetir el email, tiene un boton para confirmar que esta deshabilitado hasta que el usuario llene todos los campos.





