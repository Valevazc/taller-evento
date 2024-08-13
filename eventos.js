document.addEventListener("DOMContentLoaded", function() {
   
    var div = document.querySelector("div");
    var boton = document.getElementById("saludar");

    div.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });
});

    function mostrarAlertaBoton(event) {
        alert("Hola!");
        event.stopPropagation();
 }