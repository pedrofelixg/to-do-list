const body = document.getElementsByTagName('body')[0];
const titulo = document.querySelector(".to-do__titulo");
const form = document.getElementById("formulario");
const input = document.querySelector("#atividade");
const botao = document.querySelector("#btn__atividade");
const btnExcluir = document.querySelector("#formClear");
const btnDarkMode = document.querySelector("#darkModeSelect");
const classDark = "dark-mode"

function getName(){
    const atividade = document.querySelector("#atividade");
    const atividadeVazia = "";

    if(atividade.value === atividadeVazia){
        alert("É preciso informar uma atividade válida");
        return ``;
    } else {
        return `
    <div class="to-do__item">
        <input type="checkbox" class="check">
        <p class="elemento__texto">${atividade.value}</p>
    </div>`
    }
}

function limparFormulario() {
    console.log("vai limpar");
}

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

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const lista = document.querySelector(".to-do__lista");
    const getActividade = getName();

    lista.insertAdjacentHTML("beforeend", getActividade);
});

btnExcluir.addEventListener("click", limparFormulario);
btnDarkMode.addEventListener("click", modoEscuro);