// TAREA 1: resaltar el link activo del menú según la página actual

// 1). Incluir/definir los elementos que participan en esta funcionalidad:
// - ¿QUÉ?: los llinks del menú con clase .Header-menuLink

// Seleccionar los links del menú:
const menuLinks = document.querySelectorAll('.Header-menuLink')
console.log("Enlaces del menú seleccionados", menuLinks)
// Le indico al navegador que me encuentre todos los botones del menú (Header-menuLink) y que los guarde en una lista llamada menuLinks

// 2). Pensar qué propiedades hay o qué propiedades cambian:
// - Propiedad que cambia: la clase `isActive` en el link correspondiente
// - Condición: la URL actual coincide con el atributo `href` del enlace

// Obtener la ruta actual:
const currentPath = window.location.pathname.split('/').pop() || 'index.html' // 'index.html' es el valor por defecto si la ruta está vacía
console.log("¿Dónde estoy ahora?", currentPath)
// Aquí le estoy indicando al navegador que me indique en qué página estoy ahora. Con window.location.pathname el navegador puede extraer la URL completa de donde está situada en este momento, con .split('/') le permito que la separe por partes (lo que queda entre /) y con .pop() toma la última parte de la URL, que es el nombre del archivo.

// 3). Pensar en las acciones y cuándo ocurren:
// - ¿QUÉ?: comparar la ruta actual con el atributo `href` de los enlaces
// - ¿CUÁNDO?: al cargar la página

// Verificar si hay links en el DOM antes de continuar:
if (menuLinks.length > 0) {
    console.log("Enlaces encontrados. Resaltando el link activo")
    // Aquí le estoy diciendo al navegador que compruebe si hay links en la lista de menuLinks. Para conseguirlo usa la propiedad length para ver cuantos links tiene es alista. Si el número de links en la lista es mayor que 0, entonces continúa con la función.

    // Recorrer los links:
    menuLinks.forEach((link)=>{
        // Comparar la ruta actual con el atributo `href` del enlace:
        if (currentPath === link.getAttribute('href')) {
            link.classList.add('isActive') // Agregar la clase `isActive`
            console.log("Enlace activo", link)
        }
    })
    // Aquí lo que hace revisar cada link (Header-menuLink) dentro de la lista de menuLinks para comprobar si este link coincide con el link de la página actual en la que se encuentra (currentPath). Si es que sí, entonces le agrega la clase .isActive.
} else {
    console.error("No se encontraron enlaces del menú (.Header-menuLink) en el DOM")
}



// TAREA 2: cambiar el color de los iconos de redes sociales al pasar el mouse por encima

// 1). Incluir/definir los elementos que participan en esta funcionalidad:
// - ¿QUÉ?: todos los iconos SVG con clase .Footer-socialIcon
const socialIcons = document.querySelectorAll('.Footer-socialIcon')
// Aquí le indico al navegador que busque todos los iconos de redes sociales con la clase .Footer-socialIcon y los guarde en una lista llamada socialIcons.

// 2). Pensar qué propiedades hay o qué propiedades cambian:
// - Propiedad que cambia: la clase .isActive se agrega o se quita en cada ícono
// - Condición: cuando el mouse pasa por encima (mouseenter), se agrega la clase .isActive y cuando el mouse se quita (mouseleave), se elimina la clase .isActive

// 3). Pensar en las acciones y cuándo ocurren:
// - ¿QUÉ?: cambiar el color del ícono al pasar el mouse y volver a su color original al quitar el mouse
// - ¿CUÁNDO?: cuando el usuario interacciona con el mouse, al entrar o salir del icono

// Verificar si los iconos existen en el DOM:
if (socialIcons.length > 0){
    console.log("iconos de redes sociales encontrados", socialIcons)
    // Aquí estoy comprobando que la lista socialIcons tiene al menos un icono antes de continuar.

    // Recorrer todos los iconos de la lista:
    socialIcons.forEach((icon)=>{
        // Asignar eventos a cada ícono:

        // Añadir la clase .isActive cuando el mouse pasa por encima
        icon.addEventListener('mouseenter', ()=>{
            icon.classList.add('isActive') // Cambiar color con CSS
            console.log("Color cambiado al pasar el mouse", icon)
            // Aquí se añade la clase .isActive al icono sobre el que pasa el mouse.
        })

        // Quitar la clase .isActive cuando el mouse se sale
        icon.addEventListener('mouseleave', ()=>{
            icon.classList.remove('isActive') // Restaurar color con CSS
            console.log("Color restaurado al quitar el mouse", icon)
            // Aquí se quita la clase .isActive del icono cuando el mouse sale de él, volviendo a su color original.
        })
    })

} else {
    console.error("No se encontraron iconos (.Footer-socialIcon) en el DOM")
}




// TAREA 3: crear un scroll infinito horizontal para el texto con la clase .Content-scrollText

// 1). Incluir/definir los elementos que participan en esta funcionalidad:
// - ¿QUÉ?: el contenedor que incluye el texto para el scroll infinito (.Content-scrollWrapper)
// - ¿QUÉ?: los textos dentro del contenedor (.Content-scrollText)
const scrollWrapper = document.querySelector('.Content-scrollWrapper')
const scrollTexts = document.querySelectorAll('.Content-scrollText')
// Aquí le estoy indicando al navegador que busque el contenedor que tiene la clase .Content-scrollWrapper y todos los textos con la clase .Content-scrollText. Y además le digo que guarde estos elementos en scrollWrapper y scrollTexts.

// Verificar si los elementos existen en el DOM:
if (scrollWrapper && scrollTexts.length > 0) {
    console.log("Elementos encontrados", scrollWrapper, scrollTexts)
    // Aquí compruebo que el contenedor y los textos existen antes de seguir.

    // 2). Pensar qué propiedades hay o qué propiedades cambian:
    // - Propiedad que cambia: la posición horizontal del contenedor (transform: translateX)
    // - Condición: el texto se mueve continuamente hasta que desaparece y vuelve a reiniciarse

    // Definir las constantes necesarias para la animación:
    const velocidad = 1 // Velocidad de desplazamiento
    let posicion = 0 // Posición inicial del texto. Necesito utilizar let para actualizar la posición del contenedor .Content-scrollWrapper, que va a ir cambiando

    // 3). Pensar en las acciones y cuándo ocurren:
    // - ¿QUÉ?: mover el texto horizontalmente para el scroll infinito
    // - ¿CUÁNDO?: de manera continua

    // Función para mover el texto horizontalmente:
    const moverTexto = ()=>{
        // Reducir la posición para mover el texto hacia la izquierda:
        posicion -= velocidad

        // Obtener el ancho del primer texto:
        const anchoTexto = scrollTexts[0].offsetWidth

        // Reiniciar la posición cuando el texto desaparece por completo:
        if (Math.abs(posicion) >= anchoTexto) {
            posicion = 0
            console.log("Reiniciar posición del scroll")
        }

        // Aplicar la nueva posición al contenedor usando transform:
        scrollWrapper.style.transform = `translateX(${posicion}px)`
    }

    // Aquí estoy creando una función que hace que el texto se mueva hacia la izquierda restando de manera constante un valor denominado 'velocidad' a la posición inicial (posicion). Después estoy calculando cuánto mide el ancho del texto usando offsetWidth para saber si el texto ya desapareció y, si eso pasa, se reinicia la posición a cero para que el movimiento sea infinito.

    // 4). Configurar un temporizador para mover el texto continuamente:
    setInterval(moverTexto, 16)
    // Aquí configuro que la función moverTexto se ejecute cada 16ms para crear un desplazamiento suave y continuo.

} else {
    console.error("No se encontraron los elementos .Content-scrollWrapper o .Content-scrollText en el DOM")
}



// TAREA 4: hacer que el menú se abra y cierre al hacer clic en el botón de hamburguesa

// 1). Incluir/definir los elementos que participan en esta funcionalidad:
// - ¿QUÉ?: el botón con la clase .Header-hamburger
// - ¿QUÉ?: el menú con la clase .Header-nav

// Seleccionar el botón .Header-hamburger:
const hamburgerButton = document.querySelector('.Header-hamburger')
// Aquí le indico al navegador que busque el botón con la clase .Header-hamburger y lo guarde en una constante llamada hamburgerButton.
console.log("Botón de hamburguesa encontrado", hamburgerButton)

// Seleccionar el menú de nav:
const navMenu = document.querySelector('.Header-nav')
// Aquí le indico al navegador que busque el menú con la clase .Header-nav y lo guarde en una constante llamada navMenu.
console.log("Menú de navegación encontrado", navMenu)

// 2). Verificar que los elementos existen en el DOM:
if (hamburgerButton && navMenu){
    console.log("El botón de hamburguesa y el menú de navegación existen en el DOM")
    // Aquí compruebo si el botón y el menú existen en el DOM para asegurarme de que puedo trabajar con ellos. Si ambos elementos existen, continuo con la función.

    // 3). Pensar en las acciones y cuándo ocurren:
    // - ¿QUÉ?: alternar la clase is-open en el menú para abrirlo o cerrarlo
    // - ¿CUÁNDO?: cuando el usuario hace clic en el botón .Header-hamburger

    // Asignar el evento click al botón de hamburguesa:
    hamburgerButton.addEventListener('click', ()=>{
        // Alternar la clase is-open en el menú de navegación
        navMenu.classList.toggle('is-open')
        // Aquí uso classList.toggle para que al hacer clic, se añada o se quite la clase .is-open del menú.
        console.log("Clase 'is-open' alternada en el menú de navegación")
    })
    
} else {
    // Si alguno de los elementos no existe, mostrar un mensaje de error
    console.error("No se encontraron el botón de hamburguesa o el menú en el DOM")
}

