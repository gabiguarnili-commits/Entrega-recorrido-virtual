const titulo = document.getElementById("titulo");
const cancion = document.getElementById("cancion");

titulo.addEventListener("click", function () {
    if (cancion.paused) {
        cancion.play();
        titulo.classList.add("sonando");
    } else {
        cancion.pause();
        titulo.classList.remove("sonando");
    }
});