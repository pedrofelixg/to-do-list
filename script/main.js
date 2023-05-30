const botao = document.querySelector("#btn__atividade");

function getName(){
    const atividade = document.querySelector("#atividade");
    const atividadeVazia = "";

    if(atividade.value === atividadeVazia){
        alert("É preciso informar uma atividade válida");
    } else {
        return `
    <div class="to-do__item">
        <input type="checkbox" class="check">
        <p class="elemento__texto">${atividade.value}</p>
    </div>`
    }
}

function printNewWork(){
    const lista = document.querySelector(".to-do__lista");

    lista.insertAdjacentHTML("beforeend", getName());
}

botao.addEventListener("click", printNewWork);