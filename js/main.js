const dark = document.querySelector('.body');
const cambiar = document.querySelector('.cambiar__modo');

cambiar.addEventListener("click", (event) => {  //activar el modo oscuro
    event.preventDefault();
    dark.classList.toggle('active');
    if (dark.classList.contains('active')) {
        localStorage.setItem('active', 'enabled');
    } else {
        localStorage.setItem('active', 'disabled');
    }
});

if (localStorage.getItem('active') == 'enabled') {
    dark.classList.toggle('active');
}

const menu = document.querySelectorAll('.fa-trash-alt');

menu.forEach(abrirMenu => {
    abrirMenu.addEventListener("click", abrir);
});

function abrir(event){
    console.log('Hola');
}

const open_menu = document.querySelector('.ellipsis');
const menuUsuario = document.querySelector('.general__perfil');
const containerMenu = document.querySelector('.div-perfil');
const cerrar_menu = document.querySelector('.fa-arrow-left');

open_menu.addEventListener("click", function(){
    menuUsuario.style.opacity = "1";
    menuUsuario.style.visibility = "visible";
});

cerrar_menu.addEventListener("click", function(){
    menuUsuario.style.opacity = "0";
    menuUsuario.style.visibility = "hidden";
});

