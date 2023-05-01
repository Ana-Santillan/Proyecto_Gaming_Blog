let campoDeBusqueda = document.getElementById("campoDeBusqueda");
let resultadosDeBusqueda = document.getElementById("resultadosDeBusqueda");
// const cardArticulo = document.querySelectorAll('')
//busqueda form traigo
let formularioBusqueda = document.getElementById("formularioBusqueda");
//tomar el evento
formularioBusqueda.addEventListener("submit", (e) => {
  e.preventDefault();
  buscarArticulo();
});
// detengo que la pag se recargue  e. prevent d

//traigo el texto que ingreso el usuario
function buscarArticulo() {
  let textoBuscado = campoDeBusqueda.value.trim();
  textoBuscado = textoBuscado.toLowerCase();
  let articulos = document.getElementsByClassName("articulo");

  //  etiqueta p articulo
  console.log("Buscando Articulo");
  console.log(textoBuscado);
  console.log(articulos);
  let articuloEncontrado;
  
  //hacer desaparecer el resto de los articulos  cuando enuentre una coincidencia se eliminan los demas articulos y 

  for (let i = 0; i < articulos.length; i++) {
    let articuloRecorrido = articulos[i].innerHTML.includes(textoBuscado);
    if (articuloRecorrido === true) {
      articuloEncontrado = articulos[i];
      console.log(articuloEncontrado);
      articuloEncontrado.style.display = "block";
    } else {
      articulos[i].style.display = "none";
    }
  } 
  if (!articuloEncontrado){
    console.log('No se encontro coincidencia');
    resultadosDeBusqueda.innerHTML = "No se encontraron resultados";
  } else {
    resultadosDeBusqueda.innerHTML = "";
  }
  if (!articuloEncontrado){
    console.log('No se encontro coincidencia');
  }
 
}
// function ocultarElementos(){
//   document.getElementById('articulo')
// }