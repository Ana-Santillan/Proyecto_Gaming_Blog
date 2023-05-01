function mostrarPublicidad() {
  console.log('hola');
Swal.fire({
  html: '<p class="lead">¡Aprovecha esta oportunidad ahora!</p><a href="https://rog.asus.com/ar/" target="_blank"><img src="https://dlcdnwebimgs.asus.com/gain/468AD480-354E-4AD8-93B3-59C49C65051F" class="img-fluid"></a>',
  background: "#784BA0",
  grow:"fullscreen",
  color: "#FF3CAC",
  showCloseButton: true,
  timerProgressBar: true,
  showCancelButton: false,
  showConfirmButton: false,
});
}

setTimeout(mostrarPublicidad, 4000);
