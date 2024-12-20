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
        </tr>
    `;
  
  items.innerHTML += html;
});

const cantProd = document.querySelector(".cantProd");
cantProd.innerHTML = "<b>Cantidad Productos: " + v_cantProd + "</b>";

const total = document.querySelector(".total");
total.innerHTML = "<b>Total: $" + v_total + "</b>";
