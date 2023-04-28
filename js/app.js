let cajaComentario = document.getElementById(`inputTexto`);
let botonVerMas = document.getElementById(`botonVermas`);

cajaComentario.addEventListener("focus", habilitar);
cajaComentario.addEventListener("blur", deshabilitar);
botonVerMas.addEventListener("mouseover", verMascambiarColor);
botonVerMas.addEventListener("click", verMasCambiar);

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
        document.getElementById(`inputTexto`).value = "";
    });
}

function deshabilitar() {
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

