carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let v_subtotal;
var v_total = 0;

const items = document.querySelector(".items");

items.innerHTML = "";

carrito.forEach((item) => {
  let v_subtotal = item.cantidad * item.price;
  v_total = v_total + v_subtotal;
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

const total = document.querySelector(".total");
total.innerHTML = "Total: $" + v_total;
