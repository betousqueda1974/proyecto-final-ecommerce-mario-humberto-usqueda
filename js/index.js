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
            <button type="button" class="btnA">Agregar</button>
            <button type="button" class="btnQ">Quitar</button>
            <button type="button" class="btnE">Eliminar</button>
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
  
  // Si el elemento donde se hizo click contiene la clase 'btnA' de AGREGAR
  if (event.target.classList.contains("btnA")) {
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


  // Si el elemento donde se hizo click contiene la clase 'btnQ' de QUITAR
  if (event.target.classList.contains("btnQ")) {
    // Busco el contenedor mas cercano que sea un 'article'
    // Obtengo el id del atributo data-id
    const id = event.target.closest("article").dataset.id;

    //Busco si ese producto ya existe en el carrito
    const index = carrito.findIndex((item) => item.id == id);

    //Si es -1 quiere decir que NO existe
    if (index != -1)
    {
      const producto1 = carrito[index];

      if (producto1.cantidad > 1)
      {
        const producto = carrito[index];
        producto.cantidad--;
      }
    }
    // Guardo en el localStorage el array carrito en formato JSON
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }


   // Si el elemento donde se hizo click contiene la clase 'btnE' de ELIMINAR
   if (event.target.classList.contains("btnE")) {
    // Busco el contenedor mas cercano que sea un 'article'
    // Obtengo el id del atributo data-id
    const id = event.target.closest("article").dataset.id;

    //Busco si ese producto ya existe en el carrito
    const index = carrito.findIndex((item) => item.id == id);

    //Si es -1 quiere decir que NO existe
    if (index != -1)
    {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito = carrito.filter(function (producto) {
        return producto.id !== id;
      });
      localStorage.setItem("carrito", JSON.stringify(carrito));
     }
  }

});