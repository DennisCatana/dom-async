/* Fundamentos  */


/* Acceder al contenido */


/* Modificar el contenido */


/* Modificar el estilo */

//----------------------------------------------------------------------------------
// /* Agregar elementos */
// // Crear una lista vacía de productos en el carrito
var productosEnCarrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto) {
  // Agregar el producto a la lista de productos en el carrito
  productosEnCarrito.push(nombreProducto);

  // Mostrar una notificación al usuario
  console.log("Se ha agregado " + nombreProducto + " al carrito.");
}

// Agregar algunos productos al carrito para probar
agregarAlCarrito("Producto 1");
agregarAlCarrito("Producto 2");
agregarAlCarrito("Producto 3");

// Mostrar la lista de productos en el carrito
console.log("Productos en el carrito:");
for (var i = 0; i < productosEnCarrito.length; i++) {
  console.log("- " + productosEnCarrito[i]);
}

//-----------------------------------------------------------------------------------
/* Eliminar elementos */
// Crear una lista de tareas pendientes
var tareasPendientes = ["Tarea 1", "Tarea 2", "Tarea 3"];

// Función para eliminar una tarea pendiente
function eliminarTarea(index) {
  // Verificar si el índice es válido
  if (index >= 0 && index < tareasPendientes.length) {
    // Eliminar la tarea del array
    tareasPendientes.splice(index, 1);

    // Mostrar una notificación al usuario
    console.log("Se ha eliminado la tarea número " + (index + 1) + ".");
  } else {
    // Mostrar una notificación al usuario si el índice no es válido
    console.log("El índice especificado no es válido.");
  }
}

// Eliminar la segunda tarea pendiente para probar
eliminarTarea(1);

// Mostrar la lista actualizada de tareas pendientes
console.log("Tareas pendientes:");
for (var i = 0; i < tareasPendientes.length; i++) {
  console.log("- " + tareasPendientes[i]);
}

//----------------------------------------------------------------------------------------

/* Eventos */

