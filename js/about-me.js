// TAREA 1: que al hacer clic sobre una pestaña, esta se active y se active también su contenido relacionado.

// 1). Incluir/definir los elementos que participan en esta funcionalidad:
// - ¿QUÉ?: las pestañas con clase .Tab-link
// - ¿QUÉ?: los contenidos relacionados con clase .Tab-content
const tabsBtn = document.querySelectorAll('.Tab-link')
const tabsContent = document.querySelectorAll('.Tab-content')
// Estoy seleccionando las pestañas y los contenidos en el DOM, y los guardo en listas (NodeList) llamadas tabsBtn y tabsContent.

// Verificar que los elementos se seleccionan correctamente e imprimirlos en la consola:
console.log("Pestañas encontradas", tabsBtn)
console.log("Contenidos encontrados", tabsContent)
// Así puedo comprobar que el navegador las ha encontrado correctamente.

// 2). Pensar qué propiedades hay o qué propiedades cambian:
// - Propiedad que cambia: la clase isActive indica qué pestaña está activa y qué contenido se debe mostrar:
tabsBtn.forEach((btn, index)=>{
// De esta forma le indico al navegador que recorra (index) cada pestaña (btn) de la lista tabsBtn.

    // Crear un evento de hacer click a cada pestaña:
    btn.addEventListener('click',()=>{

        // 3). Al hacer clic en una pestaña, quitarle la clase isActive a todas las pestañas y contenidos:
        tabsBtn.forEach((tab)=>tab.classList.remove('isActive'))
        tabsContent.forEach((content)=>content.classList.remove('isActive'))

        // 4). Asignar la clase isActive solo a la pestaña y al contenido seleccionado:
        tabsBtn[index].classList.add('isActive')
        tabsContent[index].classList.add('isActive')

        // Mostrar en la consola del navegador qué pestaña y contenido se activan:
        console.log("Pestaña activa", tabsBtn[index])
        console.log("Contenido activo", tabsContent[index])
    })
})