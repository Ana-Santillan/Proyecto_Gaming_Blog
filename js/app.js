let cajaComentario = document.getElementById(`inputTexto`);

cajaComentario.addEventListener("focus",habilitar);
cajaComentario.addEventListener("blur",deshabilitar);

function habilitar(){

let botonEnviar = document.getElementById(`botonEnviar`);
let botonCancelar = document.getElementById(`botonCancelar`);

botonEnviar.className= "btn btn-primary mt-1";
botonCancelar.className="btn bg-transparent mt-1";

botonCancelar.addEventListener("mouseover",function () {
botonCancelar.className ="btn bg-danger mt-1";
});
botonCancelar.addEventListener("mouseout",function () {
    botonCancelar.className ="btn bg-transparent mt-1";
    });
botonCancelar.addEventListener("click",function(){
document.getElementById(`inputTexto`).value="";
});
}

function deshabilitar(){
document.getElementById(`botonEnviar`).className= "btn btn-secondary mt-1";
document.getElementById(`botonCancelar`).className="d-none"
}