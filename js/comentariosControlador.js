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
            let botonGoku = document.getElementById(`botonGoku`);
            botonGoku.addEventListener("click",function(){
            document.getElementById(`botonGoku`).className +=" bg-primary";
            });
            botonAvatar.addEventListener("click", function () {
                let avatarGoku = document.getElementById(`avatarGoku`);
                let src = avatarGoku.getAttribute("src");
                let avatarNuevo = document.getElementById(`imagenRepresentativa`);
                avatarNuevo.setAttribute("src", src);
            })
            break;
        case 2:
            let botonVader = document.getElementById(`botonDarthVader`);
            botonVader.addEventListener("click",function(){
            document.getElementById(`botonDarthVader`).className +=" bg-primary";
            });
            botonAvatar.addEventListener("click", function () {
                let avatarDarthVader = document.getElementById(`avatarDarthVader`);
                let src = avatarDarthVader.getAttribute("src");
                let avatarNuevo = document.getElementById(`imagenRepresentativa`);
                avatarNuevo.setAttribute("src", src);
            })
            break;
        case 3:
            let botonFortnite = document.getElementById(`botonFortnite`);
            botonFortnite.addEventListener("click",function(){
            document.getElementById(`botonFortnite`).className +=" bg-primary";
            });
            botonAvatar.addEventListener("click", function () {
                let avatarFortnite = document.getElementById(`avatarFortnite`);
                let src = avatarFortnite.getAttribute("src");
                let avatarNuevo = document.getElementById(`imagenRepresentativa`);
                avatarNuevo.setAttribute("src", src);
            })
            break;
        case 4:
            let botonKratos = document.getElementById(`botonKratos`);
            botonKratos.addEventListener("click",function(){
            document.getElementById(`botonKratos`).className +=" bg-primary";
            });
            botonAvatar.addEventListener("click", function () {
                let avatarKratos = document.getElementById(`avatarKratos`);
                let src = avatarKratos.getAttribute("src");
                let avatarNuevo = document.getElementById(`imagenRepresentativa`);
                avatarNuevo.setAttribute("src", src);
            })
            break;
        case 5:
            let botonPapaS = document.getElementById(`botonPapaS`);
            botonPapaS.addEventListener("click",function(){
            document.getElementById(`botonPapaS`).className +=" bg-primary";
            });
            botonAvatar.addEventListener("click", function () {
                let avatarPapaS = document.getElementById(`avatarPapaS`);
                let src = avatarPapaS.getAttribute("src");
                let avatarNuevo = document.getElementById(`imagenRepresentativa`);
                avatarNuevo.setAttribute("src", src);
            })
            break;
        case 6:
            let botonGaspi = document.getElementById(`botonGaspi`);
            botonGaspi.addEventListener("click",function(){
            document.getElementById(`botonGaspi`).className +=" bg-primary";
            });
            botonAvatar.addEventListener("click", function () {
                let avatarGaspi = document.getElementById(`avatarGaspi`);
                let src = avatarGaspi.getAttribute("src");
                let avatarNuevo = document.getElementById(`imagenRepresentativa`);
                avatarNuevo.setAttribute("src", src);
            })
            break;
    }
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
