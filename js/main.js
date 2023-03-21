//ProyectoFinal+Garces

// Obtener elementos del DOM
const listaProductos = document.getElementById("lista-productos");
const listaCarrito = document.getElementById("lista-carrito");
const total = document.getElementById("total");



let carrito = [];


// Obtener productos desde archivo JSON
// Utilizacion de fetch y promesas

fetch('productos.json')
  .then(response => response.json())
  .then(data => {
    // Generar HTML de los productos
    let htmlProductos = '';
    data.forEach(producto => {
      htmlProductos += `
      <li>
      <img src=${producto.imagen}> 
      <h3>${producto.nombre}</h3>
      <p><strong>Precio:</strong> $${producto.precio}</p>
      <p><strong>Stock:</strong> ${producto.stock}</p>
      <label><strong>Cantidad:</strong></label>
      <input type="number" min="1" max="${producto.stock}" value="1" class="cantidad">
      <button class="agregar-carrito" data-id="${producto.id}" data-nombre="${producto.nombre}" data-precio="${producto.precio}" data-stock="${producto.stock}">Agregar al carrito</button>
    </li>
      `;
    });

    // Insertar HTML en el DOM
    listaProductos.innerHTML = htmlProductos;
    console.log(htmlProductos)

    // Utilizacion de un Evento en el botón "Agregar al carrito"
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
    botonesAgregarCarrito.forEach(boton => {
      boton.addEventListener('click', () => {
    
      // Agrego notificacion al elimiar producto
        Toastify({
          text: "Producto agregado...",
          offset: {
            x: 20, 
            y: 210,
          },
          duration: 1500,
          destination: "https://github.com/apvarun/toastify-js",
          newWindow: true,
          close: true,
          gravity: "top", 
          position: "right", 
          stopOnFocus: true, 
          style: {
            borderRadius: "10px",
            background: "#4CAF50",                        
          },
        }).showToast();
        
        // Obtener información del producto
        const id = boton.dataset.id;
        const imagen = boton.dataset.imagen;
        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);
        const stock = Number(boton.dataset.stock);
        const cantidadInput = boton.parentNode.querySelector('.cantidad');
        const cantidad = Number(cantidadInput.value);

        // Agregar producto al carrito
        const producto = {
          id: id,
          imagen: imagen,
          nombre: nombre,
          precio: precio,
          cantidad: cantidad,
          stock: stock,
        }

        const productoExistente = carrito.find(item => item.id === id);
        if (productoExistente) {
          productoExistente.cantidad += cantidad;
        } else {
          carrito.push(producto);
        }
        
        // Actualizar carrito en el DOM
        actualizarCarrito()
      });
    });
  })

// Funciones
// Actualizar el carrito en el DOM
function actualizarCarrito() {
  // Limpiar carrito anterior
  listaCarrito.innerHTML = '';

  // Generar HTML del nuevo carrito
  let htmlCarrito = '';
  carrito.forEach(producto => {
    htmlCarrito += `
    <li>
    ${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio * producto.cantidad}
    <button class="eliminar-producto" data-id="${producto.id}">Eliminar</button>
    </li>
    `;
  });

  // Insertar HTML en el DOM
  listaCarrito.innerHTML = htmlCarrito;

  // Actualizar total
  const totalCarrito = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  total.innerText = totalCarrito.toFixed(2);

  // Agregar event listener al botón "Eliminar"
  const botonesEliminarProducto = document.querySelectorAll('.eliminar-producto');
  botonesEliminarProducto.forEach(boton => {
    boton.addEventListener('click', () => {
      // Obtener ID del producto a eliminar
      const id = boton.dataset.id;

      // Agrego notificacion al elimiar producto
      Toastify({
        text: "Producto eliminado...",
        offset: {
          x: 20, 
          y: 210,
        },
        duration: 1500,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "left", 
        stopOnFocus: true, 
        style: {
          borderRadius: "10px",
          background: "#f44336",                        
        },
      }).showToast();

    // Funciones de orden superior
    // Eliminar producto del carrito
      carrito = carrito.filter(producto => producto.id !== id);

    // Actualizar carrito en el DOM
      actualizarCarrito();
    });
  });
}