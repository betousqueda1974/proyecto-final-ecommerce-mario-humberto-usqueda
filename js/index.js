//let v_contador = 0;
/* 
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

 */




// Obtengo el item 'carrito' del local storage que es un texto
// Lo intento transformar a un Objeto de javaScript
// Si algo falla asigno un array a la constante, sino el Objeto
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let v_producto;

//ACA HAY QUE HACER EL FETCH PARA TRAER INFO DE LA API
fetch("../json/productos.json")
  .then ((response) => response.json())
  .then ((posts) => {
    v_producto = posts;
    const listadoProductos = document.querySelector(".listado-productos");
    listadoProductos.innerHTML = "";

    posts.forEach((post) => {

      const html = `
        <article data-id="${post.id}">
          <div>
            <h2 class="tituloarticulo">${post.title}</h2>
            <figure>
              <img src="../img/${post.image}" alt="${post.title}">
            </figure>
            <h4>$ ${post.price}</h4>
            <button type="submit" class="btn">Agregar</button>
          </div>
        </article>
        `;

        listadoProductos.innerHTML += html;
    })
  })
  .catch((error) => {
    console.log(error);
  });


// Escucho todos los eventos click el documento
document.addEventListener("click", (event) => {
  // Si el elemento donde se hizo click contiene la clase 'btn'
  if (event.target.classList.contains("btn")) {
    // Busco el contenedor mas cercano que sea un 'article'
    // Obtengo el id del atributo data-id
    const id = event.target.closest("article").dataset.id;

    //Busco si ese producto ya existe en el carrito
    const index = carrito.findIndex((item) => item.id == id);

    //Si es -1 quiere decir que NO existe
    if (index == -1)
    {

      const elemento = v_producto.find((producto) => producto.id == id);

      const producto = {
        id: id,
        title: elemento.title,
        price: elemento.price,
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