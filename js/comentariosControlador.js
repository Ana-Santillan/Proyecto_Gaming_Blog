let cajaComentario = document.getElementById(`inputTextoComentario`);
let cajaNombre = document.getElementById(`inputTextoNombre`);
let botonVerMas = document.getElementById(`botonVermas`);
let botonEnviar = document.getElementById(`botonEnviar`);
let botonAvatar = document.getElementById(`seleccionAvatar`);
//Seleccion de Avatares
let avatarGoku = document.getElementById(`avatarGoku`);
let avatarDarthVader = document.getElementById(`avatarDarthVader`);
let avatarFortnite = document.getElementById(`avatarFortnite`);
let avatarGaspi = document.getElementById(`avatarGaspi`);
let avatarKratos = document.getElementById(`avatarKratos`);
let avatarPapaS = document.getElementById(`avatarPapaS`);

cajaComentario.addEventListener("focus", habilitar);
cajaComentario.addEventListener("blur", deshabilitar);

cajaNombre.addEventListener("focus", habilitar);
cajaNombre.addEventListener("blur", deshabilitar);

botonVerMas.addEventListener("mouseover", verMascambiarColor);
botonVerMas.addEventListener("click", verMasCambiar);
botonEnviar.addEventListener("click", enviar);

avatarGoku.addEventListener("click", function () {
    seleccionAvatar(1);
});
avatarDarthVader.addEventListener("click", function () {
    seleccionAvatar(2);
});
avatarFortnite.addEventListener("click", function () {
    seleccionAvatar(3);
});
avatarKratos.addEventListener("click", function () {
    seleccionAvatar(4);
});
avatarPapaS.addEventListener("click", function () {
    seleccionAvatar(5);
});
avatarGaspi.addEventListener("click", function () {
    seleccionAvatar(6);
});

function seleccionAvatar(n) {
    switch (n) {
        case 1:
            let avatarGoku = document.getElementById(`avatarGoku`);
            let src = avatarGoku.getAttribute("src");
            let botonAvatar = document.getElementById(`seleccionAvatar`);
            botonAvatar.addEventListener("click", function () {
                let avatarNuevo = document.getElementById(`imagenRepresentativa`);
                avatarNuevo.setAttribute("src", src);
            });
            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
    }
    let botonAvatar = document.getElementById(`seleccionAvatar`);


}
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

function enviar() {
    let inputNombre = document.getElementById(`inputTextoNombre`);
    let inputComentario = document.getElementById(`inputTextoComentario`);
    let inputAvatar = document.getElementById(`avatarSeleccionado`);
    let srcAvatar = inputAvatar.getAttribute("src");

    let ponerNombre = document.getElementById(`nombreComentarioNuevo`);
    let ponerComentario = document.getElementById(`comentarioNuevo`);
    let ponerAvatar = document.getElementById(`avatarPublicado`);

    ponerAvatar.setAttribute("src", srcAvatar);
    ponerNombre.innerText = inputNombre.value;
    ponerComentario.innerText = inputComentario.value;
    ponerFoto.style.display = "block"
    inputComentario.value = "";
    inputNombre.value = "";
}
