// dark-mode
function modificarClasse() {
    body.classList.toggle(classDark);
    titulo.classList.toggle(classDark);
    input.classList.toggle(classDark);
    botao.classList.toggle(classDark);
    btnDarkMode.classList.toggle(classDark);
}

function modificarTexto() {
    const lightMode = `<i class="fa-solid fa-sun"></i> Light Mode`;
    const darkMode = `<i class="fa-solid fa-moon"></i> Dark Mode`;

    if(body.classList.contains(classDark)) {
        btnDarkMode.innerHTML = lightMode;
        return
    }
    btnDarkMode.innerHTML = darkMode;
}

function modoEscuro() {
    modificarClasse();
    modificarTexto();
}

// fim do dark-mode