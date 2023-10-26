function addItem() {
   
 
    const NovoItem = document.getElementById("item");
    const ItemSemEspacos = NovoItem.value.trim();

    if (ItemSemEspacos !== "") {
        const ItemSalvo = document.getElementById("ItemSalvo");
        const ListaItensSalvos = document.createElement("li");
        ListaItensSalvos.innerHTML = `
            <span>${ItemSemEspacos}</span>
            <button class="editar" onclick="EditarItem(this)">Editar</button>
            <button class="Excluir" onclick="SolicitaApagaItem(this)">Excluir</button>
            <button class="Concluido" onclick="MarcarConcluido(this)">Concluído</button>
            <button class="Desmarcar" style="display: none" onclick="desmarca(this)">Desmarcar</button>
        `;
        ItemSalvo.appendChild(ListaItensSalvos);
        NovoItem.value = "";
    }
}


function SolicitaApagaItem(button) {
    if (confirm("Tem certeza de que deseja excluir esta tarefa?")) {
        ApagaItem(button);
    }
}

function ApagaItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}

function EditarItem(button) {
    const span = button.parentElement.querySelector("span");
    const ItemAtualizado = prompt("Edite a tarefa:", span.textContent);
    if (ItemAtualizado !== null) {
        span.textContent = ItemAtualizado;
    }
}

function desmarcarConcluido(button) {
    const btnDesmarcar = button.parentElement.querySelector(".Desmarcar");
    btnDesmarcar.style.display = "inline-block";
}

function desmarca(button) {
    const desmarcar = button.parentElement.querySelector("span");
    const btnDesmarcar = button.parentElement.querySelector(".Desmarcar");
    const btnConcluido = button.parentElement.querySelector(".Concluido");

    desmarcar.style.textDecoration = "none";
    if (desmarcar.style.textDecoration = "none") {
        btnDesmarcar.style.display = "none";
        btnConcluido.style.display = "inline-block";
    }
}

function MarcarConcluido(button) {
    const concluido = button.parentElement.querySelector("span");
    const btnConcluido = button.parentElement.querySelector(".Concluido");
    concluido.style.textDecoration = "line-through";
    if (concluido.style.textDecoration = "line-through" ) {
        btnConcluido.style.display = "none";
        desmarcarConcluido(button);
    }
}