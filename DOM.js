/* Fundamentos  */


/* Acceder al contenido */


/* Modificar el contenido */


/* Modificar el estilo */


/* Agregar elementos */

//-----------------------------------------------------------------------------------
/* Eliminar elementos */
// Eliminar tareas pendientes ya realizadas

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

