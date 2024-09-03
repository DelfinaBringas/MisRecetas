Tarea: Crear una Aplicación de Recetas de Cocina con React
Objetivo

Crear una aplicación en React que permita a los usuarios gestionar recetas de cocina. La aplicación debe utilizar los hooks useState, useEffect, y useContext para manejar el estado y efectos secundarios. Ademas, crear una seccion de recetas y una seccion de detalles de una receta. La App debe permitir registrar y loguear usuarios.
Requisitos Funcionales
Manejo de usuarios

    Agregar nuevo usuario con un registro y poder loguearme en la app - Usar localStorage y sessionStorage.
    Manejar dinamicamente rutas que puede acceder el usuario logueado y deslogueado.

Agregar Recetas

    Debe haber un formulario que permita a los usuarios agregar nuevas recetas.
    Cada receta debe tener al menos un nombre y una descripción.
    Al enviar el formulario, la nueva receta debe ser añadida a la lista de recetas.

Mostrar Lista de Recetas

    La aplicación debe mostrar una lista de todas las recetas agregadas.
    Cada receta en la lista debe mostrar su nombre y descripción.
    La lista debe actualizarse automáticamente cuando se agrega o elimina una receta.

Mostrar Detalles de una receta

    La aplicación debe mostrar detalles de cada receta, como su nombre, descripcion e ingredientes.
    Debemos navegar hacia esta vista usando useParams con el id de la receta en particular.

Eliminar Recetas

    Cada receta en la lista debe tener una opción para ser eliminada.
    Al hacer clic en la opción de eliminar, la receta debe ser removida de la lista.

Persistencia de Datos

    Las recetas deben ser guardadas en el almacenamiento local del navegador (localStorage).
    Al recargar la página, las recetas previamente guardadas deben ser cargadas y mostradas.

Requisitos Técnicos
Uso de Hooks

    Utilizar useState para manejar el estado local de los componentes.
    Utilizar useEffect para realizar efectos secundarios, como la carga inicial de recetas desde localStorage y la actualización del almacenamiento local cuando cambie la lista de recetas.
    Utilizar useContext para compartir el estado de las recetas entre componentes sin necesidad de pasar props manualmente.

Componentes Reutilizables

    La aplicación debe estar dividida en componentes reutilizables y bien estructurados.
    Al menos debe haber componentes para el formulario de agregar recetas, la lista de recetas y cada elemento de receta.

Entrega

    La aplicación debe ser funcional y cumplir con todos los requisitos mencionados.
    El código debe ser limpio, bien comentado y seguir buenas prácticas de desarrollo.
