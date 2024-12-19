carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// console.log(carrito);

const items = document.querySelector(".items");

items.innerHTML = "";

carrito.forEach((item) => {
  const html = `
        <tr data-id="${item.id}">
            <td>${item.title}</td>
            <td>${item.cantidad}</td>
            <td>$ ${item.price}</td>
        </tr>
    `;
  
  /* 
  const html = `
    <h3>${item.nombre}</h3>
    <h3>${item.cantidad}</h3>
    <h3>$ ${item.precio}</h3>
    <h3>4</h3>
    `; */
  
  items.innerHTML += html;
});
