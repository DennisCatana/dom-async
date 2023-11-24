/* Fundamentos  */


/* Acceder al contenido */


/* Modificar el contenido */


/* Modificar el estilo */

//----------------------------------------------------------------------------------
/* Agregar elementos */

// Obtener el elemento del carrito y la lista de productos
var carrito = document.getElementById("carrito");
var listaProductos = carrito.getElementsByTagName("ul")[0];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto) {
  // Crear un nuevo elemento para el producto
  var nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nombreProducto;

  // Agregar el nuevo elemento a la lista del carrito
  listaProductos.appendChild(nuevoElemento);

  // Mostrar una notificación al usuario
  alert("Se ha agregado " + nombreProducto + " al carrito.");
}

//-----------------------------------------------------------------------------------
/* Eliminar elementos */

// Codigo para Eliminar tareas pendientes ya realizadas

// Obtener el elemento que se desea eliminar
var elementoEliminar = document.getElementById("miTarea");

// Verificar si el elemento existe antes de intentar eliminarlo
if (elementoEliminar) {
  // Obtener el padre del elemento
  var padreElemento = elementoEliminar.parentNode;

  // Eliminar el elemento del DOM
  padreElemento.removeChild(elementoEliminar);
}
//----------------------------------------------------------------------------------------

/* Eventos */

