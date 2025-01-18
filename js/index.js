// TAREA 1: el objetivo es alternar entre el texto "diseñadora UX/UI" y "apasionada por el diseño web"

// 1). Incluir/definir los elementos que participan en esta funcionalidad:
// - ¿QUÉ?: el elemento .Hero-titleSecondary que contiene el texto a cambiar
// - ¿QUÉ?: un temporizador que alternarará entre los dos textos
// - ¿QUÉ?: los textos a alternar

// Seleccionar el elemento del DOM donde se cambiará el texto:
const titleSecondary = document.querySelector('.Hero-titleSecondary')
// Aquí le estoy diciendo al navegador que busque el elemento con la clase .Hero-titleSecondary y lo guarde en la constante titleSecondary.
console.log("Elemento encontrado", titleSecondary)

// 2). Pensar qué propiedades hay o qué propiedades cambian:
// - Propiedad que cambia: el contenido del texto dentro del elemento .Hero-titleSecondary
// - Condición: el texto alterna entre "diseñadora UX/UI" y "apasionada por el diseño web" cada 2 segundos

// Verificar si el elemento existe en el DOM antes de continuar:
if (titleSecondary) {
    console.log(".Hero-titleSecondary existe")

    // Definir los textos a alternar:
    const texts = ["diseñadora UX/UI", "apasionada por el diseño web"]
    // Aquí estoy creando una lista (array) con los textos que quiero mostrar.
    console.log("Textos para alternar:", texts)

    // Crear una variable para controlar cuál texto está activo:
    let index = 0
    // Tengo que usar let para index porque el valor de este necesita cambiar con cada alternancia de la función alternarTexto.
    // La posición se incia en 0, que corresponde al primer texto de la lista (diseñadora UX/UI).
    console.log("Posición inicial del texto:", index)

    // 3). Pensar en las acciones y cuándo ocurren:
    // - ¿QUÉ?: cambiar el texto que se muestra en .Hero-titleSecondary
    // - ¿CUÁNDO?: cada 2 segundos, de manera continuada

    // Definir la función para alternar el texto:
    const alternarTexto = ()=>{
        // Aumentar el index para cambiar al siguiente texto:
        index = (index + 1) % texts.length
        // Aquí estoy sumando 1 al índice y usando % para reiniciar a 0 cuando llegue al final de la lista

        // Actualizar el texto visible en el elemento:
        titleSecondary.innerText = texts[index]
        console.log("Texto actualizado:", texts[index])
        // El texto del elemento .Hero-titleSecondary se actualiza con el nuevo texto de la lista
    }

    // Crear un temporizador que ejecute alternarTexto cada 2 segundos:
    setInterval(alternarTexto, 2000)
    // Aquí le estoy diciendo al navegador que llame a la función alternarTexto cada 2000ms para crear el efecto

} else {
    console.error("El elemento .Hero-titleSecondary no existe")
}



// TAREA 2: expandir la .Card al pasar el mouse por encima

// 1). Incluir/definir los elementos que participan en esta funcionalidad:
// - ¿QUÉ?: todas las tarjetas con la clase .Card
const cards = document.querySelectorAll('.Card')
// Aquí le estoy diciendo al navegador que busque todas las tarjetas con la clase .Card y las guarde en una lista llamada cards

// 2). Verificar si las tarjetas existen en el DOM:
if (cards.length > 0) {
    console.log("Tarjetas encontradas", cards)
    // Aquí compruebo que hay tarjetas en el DOM antes de seguir

    // 3). Pensar qué propiedades hay o qué propiedades cambian:
    // - Propiedad que cambia: la clase isActive que se añade o se quita a la Card
    // - Condición: la clase se agrega cuando el mouse pasa por encima (mouseenter) y se quita cuando el mouse se sale (mouseleave)

    // 4). Pensar en las acciones y cuándo ocurren:
    // - ¿QUÉ?: expandir la tarjeta añadiendo la clase isActive y volviendo a su forma original cuando se quita esta clase
    // - ¿CUÁNDO?: cuando el usuario interacciona con el mouse

    // Asignar eventos a cada tarjeta:
    cards.forEach((card) => {
        // Aquí recorro cada tarjeta en la lista para asignarles los eventos.

        // Al pasar el mouse, añadir la clase isActive:
        card.addEventListener('mouseenter', ()=>{
            card.classList.add('isActive')
            console.log("Tarjeta expandida:", card)
            // Aquí le digo al navegador que agregue la clase .isActive a la tarjeta sobre la que esté el mouse.
        })

        // Al quitar el mouse, quitar la clase isActive:
        card.addEventListener('mouseleave', ()=>{
            card.classList.remove('isActive')
            console.log("Tarjeta restaurada:", card)
            // Aquí le digo al navegador que elimine la clase .isActive cuando el mouse deja de estar sobre la tarjeta, volviendo a su estilo original.
        })
    })

} else {
    console.error("No se encontraron tarjetas en el DOM")
}
