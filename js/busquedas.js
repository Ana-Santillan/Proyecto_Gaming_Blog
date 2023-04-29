let formularioBusqueda = document.querySelector('formularioBusqueda')

//manejador
formularioBusqueda.addEventListener('submit',obtenerDatos);


function obtenerDatos(e){
    e.preventDefault();
console.log('evento submit del formulari');
let input = document.querySelector('buscador')
console.log(buscador.value);
}