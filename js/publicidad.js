function mostrarPublicidad() {
Swal.fire({
  html: '<a href="https://rog.asus.com/ar/" target="_blank" class="link-primary"><img src="https://dlcdnwebimgs.asus.com/gain/468AD480-354E-4AD8-93B3-59C49C65051F" class="img-fluid"></a>',
  background: "#784BA0",
  color: "#2B86C5",
  timer: 5000,
  timerProgressBar: true,
  showCancelButton: false,
  showConfirmButton: false,
});
}

setTimeout(mostrarPublicidad, 4000);
