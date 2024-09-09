/*document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.help-center-questions .question .toggle-button').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.previousElementSibling;
            answer.classList.toggle('show');

            const icon = button.querySelector('i');
            if (icon.classList.contains('fa-chevron-right')) {
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-right');
            }
        });
    });
});*/
function toggleMenu() {
    var menu = document.getElementById('menu');
    var button = document.querySelector('.hamburger');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        button.classList.remove('is-active');
    } else {
        menu.classList.add('show');
        button.classList.add('is-active');
    }
}

window.onload = function () {
    var popup = document.getElementById('popup');
    var close = document.getElementById('close');

    // Delay de 10 segundos para mostrar el popup
    setTimeout(function () {
        popup.style.display = 'block';
    }, 5000); // 1000 ms = 1 segundos

    // Cerrar el popup para que no vuelva a aparecer
    close.onclick = function () {
        popup.style.display = 'none';
    };
};

function mostrarAdvertencia() {
    let respuesta = confirm("Esta sección aún se encuentra en desarrollo");
    /*
    if (respuesta) {
        console.log("El usuario eligió continuar.");
    } else {
        console.log("El usuario canceló la acción.");
    }*/
}
