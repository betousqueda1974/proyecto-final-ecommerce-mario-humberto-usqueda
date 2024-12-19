//let v_contador = 0;

// Los productos en un array de objetos
const productos = [
  {
    id: 1,
    nombre: "Producto 1",
    //descripcion: "Descripción Producto 1",
    //imagen: "imagen-1.jpg",
    precio: 10,
    //stock: 1,
  },
  {
    id: 2,
    nombre: "Producto 2",
    //descripcion: "Descripción Producto 2",
    //imagen: "imagen-2.jpg",
    precio: 20,
    //stock: 10,
  },
  {
    id: 3,
    nombre: "Producto 3",
    //descripcion: "Descripción Producto 3",
    //imagen: "imagen-3.jpg",
    precio: 30,
    //stock: 80,
  },
  {
    id: 4,
    nombre: "Producto 4",
    //descripcion: "Descripción Producto 4",
    //imagen: "imagen-4.jpg",
    precio: 50,
    //stock: 10,
  },
];

// Obtengo el item 'carrito' del local storage que es un texto
// Lo intento transformar a un Objeto de javaScript
// Si algo falla asigno un array a la constante, sino el Objeto
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const listadoProductos = document.querySelector(".listado-productos");
//const tituloContProd = document.querySelector(".tituloTotal");

//listadoProductos.innerHTML = "<h2>Productos</h2>";
listadoProductos.innerHTML = "";

// Recorro el array de productos
productos.forEach((producto) => {
  // Creo el HTML con los datos de cada producto
  const html = `
    <article data-id="${producto.id}">
      <div>
        <h2 class="tituloarticulo">${producto.nombre}</h2>
        <figure>
          <img src="./img/producto1.jpg" alt="">
        </figure>
        <h4>$ ${producto.precio}</h4>
        <button type="submit" class="btn">Agregar</button>
      </div>
    </article>
    `;

 /*  const html = `
        <article data-id="${producto.id}">
          <h3>${producto.nombre}</h3>
          <p>${producto.descripcion}</p>
          <p>$ ${producto.precio}</p>
          <button type="button" class="agregar">Agregar</button>
        </article>
    `; */

  // Agrego la section el html para ir mostrando cada producto
  listadoProductos.innerHTML += html;
  //v_contador += 1;
});

//tituloContProd.innerHTML = "<h3>Total de productos en el carrito: " + v_contador + "</h3>";

// Escucho todos los eventos click el documento
document.addEventListener("click", (event) => {
  // Si el elemento donde se hizo click contiene la clase 'agregar'
  if (event.target.classList.contains("btn")) {
    // Busco el contenedor mas cercano que sea un 'article'
    // Obtengo el id del atributo data-id
    const id = event.target.closest("article").dataset.id;

    //Busco si ese producto ya existe en el carrito
    const index = carrito.findIndex((item) => item.id == id);

    //Si es -1 quiere decir que NO existe
    if (index == -1)
    {
      // Busco el elemento 'producto' dentro del array producto que tenga el 'id'
      const elemento = productos.find((producto) => producto.id == id);
      //console.log(elemento);

      // Uso destructuring para crear las constantes con los valores del Objeto
      //const { nombre, precio } = elemento;

      // Creo el objeto producto para insertar en el carrito
      const producto = {
        id: id,
        nombre: elemento.nombre,
        precio: elemento.precio,
        cantidad: 1,
      };

      carrito.push(producto);
    }
    else
    {
      const producto = carrito[index];
      producto.cantidad++;
    }
    // Guardo en el localStorage el array carrito en formato JSON
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
});