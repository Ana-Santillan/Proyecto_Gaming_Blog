let campoDeBusqueda = document.getElementById("campoDeBusqueda");
let resultadosDeBusqueda = document.getElementById("resultadosDeBusqueda");
// const cardArticulo = document.querySelectorAll('')
//busqueda form traigo
let formularioBusqueda = document.getElementById("formularioBusqueda");
//tomar el evento
formularioBusqueda.addEventListener("submit", (e) => {
  e.preventDefault();
  buscarArticulo();
  formularioBusqueda.reset();
});
// detengo que la pag se recargue  e. prevent d

//traigo el texto que ingreso el usuario
function buscarArticulo() {
  let textoBuscado = campoDeBusqueda.value.trim();
  textoBuscado = textoBuscado.toLowerCase();
  let articulos = document.getElementsByClassName("articulo");


  //  etiqueta p articulo

  let articuloEncontrado;
  
  //hacer desaparecer el resto de los articulos  cuando enuentre una coincidencia se eliminan los demas articulos y 

  for (let i = 0; i < articulos.length; i++) {
    let articuloRecorrido = articulos[i].innerHTML.toLowerCase().includes(textoBuscado);
    if (articuloRecorrido === true) {
      articuloEncontrado = articulos[i];
      
      articuloEncontrado.style.display = "flex";
    } else {
      articulos[i].style.display = "none";

    }
  } 
  if (!articuloEncontrado){
    let mensaje = document.getElementById("sincoincidencias");
    mensaje.className = 'fs-2 text-center my-5';
    
  }
  if (!articuloEncontrado){
    
  }
 
}