function mostrarCarrito(){

  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
  let v_subtotal;
  var v_total = 0;
  let v_cantProd = 0;
  
  const items = document.querySelector(".items");
  
  items.innerHTML = "";
  
  carrito.forEach((item) => {
    let v_subtotal = item.cantidad * item.price;
    v_total = v_total + v_subtotal;
    v_cantProd = v_cantProd + item.cantidad;
    const html = `
          <tr data-id="${item.id}">
              <td>${item.title}</td>
              <td>${item.cantidad}</td>
              <td>$ ${item.price}</td>
              <td>$ ${v_subtotal}</td>
              <td><button type="button" class="btnQ">Quitar</button></td>
              <td><button type="button" class="btnE">Eliminar</button></td>
          </tr>
      `;
    
    items.innerHTML += html;
  });
  
  const cantProd = document.querySelector(".cantProd");
  cantProd.innerHTML = "<b>Cantidad Productos: " + v_cantProd + "</b>";
  
  const total = document.querySelector(".total");
  total.innerHTML = "<b>Total: $" + v_total + "</b>";
}

mostrarCarrito();

// Escucho todos los eventos click el documento
document.addEventListener("click", (event) => {
  // Si el elemento donde se hizo click contiene la clase 'btnQ' de QUITAR
  if (event.target.classList.contains("btnQ")) {
    // Busco el contenedor mas cercano que sea un 'article'
    // Obtengo el id del atributo data-id
    const id = event.target.closest("tr").dataset.id;

    //Busco la posición en el carrito de ese id
    const index = carrito.findIndex((item) => item.id == id);
   
    const producto1 = carrito[index];

    if (producto1.cantidad > 1)
    {
      const producto = carrito[index];
      producto.cantidad--;
    }
    // Guardo en el localStorage el array carrito en formato JSON
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  // Si el elemento donde se hizo click contiene la clase 'btnE' de ELIMINAR
  if (event.target.classList.contains("btnE")) {
    // Busco el contenedor mas cercano que sea un 'article'
    // Obtengo el id del atributo data-id
    const id = event.target.closest("tr").dataset.id;

    //Busco la posición en el carrito de ese id
    const index = carrito.findIndex((item) => item.id == id);

    carrito = carrito.filter(function (producto) {
      return producto.id !== id;
    });
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  mostrarCarrito();
});