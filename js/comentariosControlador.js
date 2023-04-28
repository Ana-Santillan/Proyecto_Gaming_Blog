let cajaComentario = document.getElementById(`inputTextoComentario`);
let cajaNombre = document.getElementById(`inputTextoNombre`);
let botonVerMas = document.getElementById(`botonVermas`);
let botonEnviar = document.getElementById(`botonEnviar`);

cajaComentario.addEventListener("focus", habilitar);
cajaComentario.addEventListener("blur", deshabilitar);

cajaNombre.addEventListener("focus", habilitar);
cajaNombre.addEventListener("blur", deshabilitar);

botonVerMas.addEventListener("mouseover", verMascambiarColor);
botonVerMas.addEventListener("click", verMasCambiar);
botonEnviar.addEventListener("click",enviar);

function habilitar() {
    let botonEnviar = document.getElementById(`botonEnviar`);
    let botonCancelar = document.getElementById(`botonCancelar`);

    botonEnviar.className = "btn btn-primary mt-1";
    botonCancelar.className = "btn bg-transparent mt-1";

    botonCancelar.addEventListener("mouseover", function () {
        botonCancelar.className = "btn bg-danger mt-1";
    });
    botonCancelar.addEventListener("mouseout", function () {
        botonCancelar.className = "btn bg-transparent mt-1";
    });
    botonCancelar.addEventListener("click", function () {
        let inputComentario = document.getElementById(`inputTextoComentario`);
        let inputNombre = document.getElementById(`inputTextoNombre`);
        inputComentario.value = "";
        inputNombre.value = "";
        input.blur();        
});
}

function deshabilitar() {
    console.log('ocultando');
    document.getElementById(`botonEnviar`).className = "btn btn-secondary mt-1";
    document.getElementById(`botonCancelar`).className = "d-none"
}

function verMascambiarColor() {
    let botonVerMas = document.getElementById(`botonVermas`);

    if (botonVerMas.innerText === "Ver Comentarios") {
        botonVerMas.className = "btn btn-primary";

        botonVerMas.addEventListener("mouseout", function () {
            botonVerMas.className = "btn btn-light"
        })
    }
    if (botonVerMas.innerText == "Ocultar Comentarios") {
        botonVerMas.className = "btn btn-danger";
        botonVerMas.addEventListener("mouseout", function () {
            botonVerMas.className = "btn btn-light"
        })
    }
}

function verMasCambiar() {
    let botonVerMas = document.getElementById(`botonVermas`);

    if (botonVerMas.innerText === "Ver Comentarios") {
        botonVerMas.innerText = "Ocultar Comentarios";
        botonVerMas.className = "btn btn-danger";

    } else {
        botonVerMas.innerText = "Ver Comentarios";
        botonVerMas.className = "btn btn-primary";
    }
}

function enviar(){
    let inputNombre = document.getElementById(`inputTextoComentario`);
    let inputTexto = document.getElementById(`inputTextoNombre`);
    let inputFoto = document.getElementById(``);

    
}