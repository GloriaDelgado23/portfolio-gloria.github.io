// TAREA 1: cambiar el color de los Hero-menuLink al pasar el mouse por encima

// 1). Incluir/definir los elementos que participan en esta funcionalidad:
// - ¿QUÉ?: todos los enlaces del submenú con la clase .Hero-menuLink
const heroLink = document.querySelectorAll('.Hero-menuLink')
// Aquí le estoy diciendo al navegador que busque todos los elementos que tienen la clase .Hero-menuLink y que los guarde en una lista llamada heroLink

// Verificar si los Hero-menuLink existen en el DOM:
if (heroLink.length > 0) {
    console.log("Link submenú nav encontrados", heroLink)
    // Aquí compruebo que la lista heroLink tiene al menos un elemento antes de continuar

    // 2). Pensar qué propiedades hay o qué propiedades cambian:
    // - Propiedad que cambia: la clase isActive se agrega o se elimina de cada Link
    // - Condición: cuando el mouse pasa por encima (mouseenter) se agrega la clase isActive, y cuando el mouse se quita (mouseleave) se elimina la clase isActive

    // 3). Pensar en las acciones y cuándo ocurren:
    // - ¿QUÉ?: cambiar el color del enlace al pasar el mouse y volver al original al quitarlo.
    // - ¿CUÁNDO?: cuando el usuario interactúa con el mouse al entrar o salir del enlace.

    // Recorrer todos los links de la lista heroLink:
    heroLink.forEach((icon) => {
        // Asignar eventos a cada enlace:

        // Añadir la clase isActive al pasar el mouse:
        icon.addEventListener('mouseenter', ()=>{
            icon.classList.add('isActive')
            console.log("Color cambiado al pasar el mouse", icon)
            // Aquí le estoy diciendo al navegador que cuando el mouse pase por encima del enlace, le agregue la clase .isActive para cambiar el color
        })

        // Quitar la clase isActive al quitar el mouse:
        icon.addEventListener('mouseleave', ()=>{
            icon.classList.remove('isActive')
            console.log("Color restaurado al quitar el mouse", icon)
            // Aquí le estoy diciendo al navegador que cuando el mouse salga del enlace, le quite la clase .isActive para volver al color original
        })
    })

} else {
    console.error("No se encontraron heroLinks en el DOM")
}




// TAREA 2: crear el texto alternativo (alt) y añadirlo debajo de las imágenes usando HTML

// 1). Incluir/definir los elementos que participan en esta funcionalidad:
// - ¿QUÉ?: las imágenes con clase .Methodology-imageImg que contienen el atributo alt
const images = document.querySelectorAll('.Methodology-imageImg')
// Aquí le estoy diciendo al navegador que busque todas las imágenes con la clase .Methodology-imageImg y que las guarde en una lista llamada images

// Verificar si las imágenes existen en el DOM:
if (images.length > 0) {
    console.log("Imágenes encontradas:", images)
    // Aquí compruebo que la lista images tiene al menos una imagen antes de continuar (> 0).

    // 2). Pensar qué propiedades hay o qué propiedades cambian:
    // - Propiedad que cambia: se genera un nuevo elemento (<p>) para cada imagen que cuenta con un atributo alt
    // - Condición: solo se crea el elemento (<p>) si la imagen tiene un atributo alt

    // Crear un fragmento para optimizar las inserciones en el DOM:
    const fragmento = document.createDocumentFragment()

    // 3). Pensar en las acciones y cuándo ocurren:
    // - ¿QUÉ?: crear un elemento (<p>) para mostrar el alt y añadirlo debajo de la imagen, pero antes del botón si este existe
    // - ¿CUÁNDO?: ocurre al cargar la página

    // Recorrer todas las imágenes de la lista images:
    images.forEach((img) => {
        console.log("Procesando imagen", img)
        // Aquí le estoy diciendo al navegador que revise cada imagen una por una.

        // Verificar si la imagen tiene el atributo alt:
        if (img.alt) {
            console.log("Alt encontrado", img.alt)
            // Si la imagen tiene un texto alt, entonces continua.

            // Crear un elemento <p> para mostrar el alt:
            const caption = document.createElement('p')
            caption.classList.add('alt') // Agregar la clase .alt al <p>.
            caption.innerText = img.alt // Asignar el texto del atributo alt al <p>.

            // Verificar si hay un botón con la clase .Secondary-button en el contenedor de la imagen:
            const button = img.parentNode.querySelector('.Secondary-button')
            if (button){
                // Si existe un botón, insertar el <p> antes del botón:
                img.parentNode.insertBefore(caption, button)
                console.log("Alt insertado antes del botón", caption)
            }else{
                // Si no hay botón, insertar el <p> al final del contenedor de la imagen:
                img.parentNode.appendChild(caption)
                console.log("Alt insertado al final del contenedor", caption)
            }
        } else {
            console.warn("No se encontró texto alternativo (alt) para esta imagen", img)
        }
    })
    console.log("Todos los alt se añadieron correctamente debajo de las imágenes")
} else {
    console.error("No se encontraron imágenes con la clase .Methodology-imageImg en el DOM")

}



// TAREA 3: expandir la .Methodology-imageImg al pasar el mouse por encima utilizando isActive

// 1). Incluir/definir los elementos que participan en esta funcionalidad:
// - ¿QUÉ?: las imágenes con la clase .Methodology-imageImg
// - ¿QUÉ?: la clase CSS isActive, que permitirá aumentar el tamaño de la imagen

// Seleccionar todas las imágenes con la clase .Methodology-imageImg:
console.log("Imágenes seleccionadas:", images) 
// Aquí le estoy diciendo al navegador que mmuestre las imágenes seleccionadas en la consola (declaradas en la TAREA 2)

// 2). Pensar qué propiedades hay o qué propiedades cambian:
// - Propiedad que cambia: la clase isActive se añade o elimina en las imágenes seleccionadas
// - Condición: se agrega isActive al pasar el mouse por encima de la imagen y se elimina al quitar el mouse

// 3). Pensar en las acciones y cuándo ocurren:
// - ¿QUÉ?: añadir o quitar la clase isActive para ampliar/restaurar el tamaño de la imagen.
// - ¿CUÁNDO?: cuando el usuario pasa el mouse por encima (mouseenter) o lo quita (mouseleave) de la imagen seleccionada

// Verificar si las imágenes existen en el DOM:
if (images.length > 0) {
    console.log("Las imágenes existen en el DOM")
     // Aquí compruebo que hay imagenes en el DOM antes de seguir

    // 3). Asignar eventos a cada imagen:
    images.forEach((image) => {
        // Aquí recorro cada imagen en la lista para asignarles los eventos.
        // Al pasar el mouse, añadir la clase isActive:
        image.addEventListener('mouseenter', ()=>{
            image.classList.add('isActive') // Añadir la clase para expandir
            console.log("Imagen expandida", image)
        })

        // Al quitar el mouse, eliminar la clase isActive:
        image.addEventListener('mouseleave', ()=>{
            image.classList.remove('isActive') // Quitar la clase para volver al tamaño original.
            console.log("Imagen restaurada", image)
        })
    })
} else {
    console.error("No se encontraron imágenes .Methodology-imageImg en el DOM")
}



// TAREA 4: mostrar un botón flotante para volver arriba al hacer scroll hacia abajo

// 1). Incluir/definir los elementos que participan en esta funcionalidad:
// - ¿QUÉ?: el botón flotante con la clase `.BackToTop`
const backToTopButton = document.querySelector('.BackToTop')
// Aquí le estoy diciendo al navegador que encuentre el botón con la clase .BackToTop y lo guarde en una constante llamada backToTopButton.

// Verificar si el botón existe en el DOM:
if (backToTopButton) {
    console.log("Botón de volver arriba encontrado:", backToTopButton)
    // Aquí estoy verificando si el botón existe en la página antes de continuar.

    // 2). Pensar qué propiedades hay o qué propiedades cambian:
    // - Propiedad que cambia: la clase `isVisible` que hace que el botón aparezca o desaparezca
    // - Condición: el botón debe aparecer cuando el usuario haya hecho scroll más de 200px hacia abajo

    // 3). Pensar en las acciones y cuándo ocurren:
    // - ¿QUÉ?: mostrar u ocultar el botón flotante
    // - ¿CUÁNDO?: cuando el usuario hace scroll hacia abajo en la página
    // - ¿QUÉ?: volver al inicio de la página
    // - ¿CUÁNDO?: cuando el usuario hace clic en el botón flotante

    // Agregar un evento para detectar el scroll:
    window.addEventListener('scroll', ()=>{
        if (window.scrollY > 200) { // Si el usuario ha hecho scroll más de 200px...
            backToTopButton.classList.add('isVisible') // ...mostrar el botón agregando la clase .isVisible
            console.log("Botón de volver arriba visible")
        } else {
            backToTopButton.classList.remove('isVisible') // Y ocultar el botón quitando la clase .isVisible
            console.log("Botón de volver arriba oculto")
        }
        // Aquí estoy controlando si el botón se muestra o no dependiendo de la posición del scroll
    })

    // Agregar un evento para volver al principio de la página al hacer clic en el botón:
    backToTopButton.addEventListener('click', ()=>{
        // Desplazar la página al principio de la misma con un efecto suave
        window.scrollTo({
            top: 0, // Ir al principio de la página
            behavior: 'smooth' // Hacerlo con un desplazamiento suave
        })
        console.log("Volviendo al inicio de la página")
        // Aquí le estoy diciendo al navegador que lleve la página al principio de forma suave cuando el usuario haga clic en el botón
    })

} else {
    console.error("No se encontró el botón (.BackToTop) en el DOM")
}

