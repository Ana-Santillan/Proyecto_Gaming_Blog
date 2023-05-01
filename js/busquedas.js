let formularioBusqueda = document.querySelector('formularioBusqueda')

let input = document.querySelector('buscador')
console.log(typeof buscador)
console.log(buscador.value);

//manejador
formularioBusqueda.addEventListener('submit',obtenerDatos);


function obtenerDatos(e){
    e.preventDefault();
console.log('evento submit del formulari');


//resetear los datos de un formulario 
formularioBusqueda.reset();
}
//paso a minuscula 

let buscador = document.getElementById("buscador").value.toLowerCase(); 
buscarArticulo(busqueda);

function buscarArticulo(textoBusqueda) {
// Realizar la búsqueda y mostrar los resultados

}