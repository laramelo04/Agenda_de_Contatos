function mostrarLista() {

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let telefones = JSON.parse(localStorage.getItem("telefones")) || [];
    let emails = JSON.parse(localStorage.getItem("emails")) || [];
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    let tabela = document.getElementById("tabela");
    let busca = document.getElementById("buscar").value.toLowerCase();

    tabela.innerHTML = `
        <tr>
            <th>Foto</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Ações</th>
        </tr>
    `;

    for (let i = 0; i < usuarios.length; i++) {

        if (!usuarios[i].toLowerCase().includes(busca)) {
            continue;
        }

        tabela.innerHTML += `
            <tr>
                <td><img src="Avatar2.png" width="50"></td>
                <td>${usuarios[i]}</td>
                <td>${cursos[i]}</td>
                <td>${telefones[i]}</td>
                <td>${emails[i]}</td>
                <td>
                    <button onclick="editarContato(${i})">Editar</button>
                    <button onclick="excluirContato(${i})">Excluir</button>
                </td>
            </tr>
        `;
    }
}

function excluirContato(indice) {

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let telefones = JSON.parse(localStorage.getItem("telefones")) || [];
    let emails = JSON.parse(localStorage.getItem("emails")) || [];
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    usuarios.splice(indice, 1);
    telefones.splice(indice, 1);
    emails.splice(indice, 1);
    cursos.splice(indice, 1);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("telefones", JSON.stringify(telefones));
    localStorage.setItem("emails", JSON.stringify(emails));
    localStorage.setItem("cursos", JSON.stringify(cursos));

    mostrarLista();
}

function editarContato(indice) {

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let telefones = JSON.parse(localStorage.getItem("telefones")) || [];
    let emails = JSON.parse(localStorage.getItem("emails")) || [];
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];

    let novoNome = prompt("Digite o novo nome:", usuarios[indice]);
    if (novoNome && novoNome.trim() !== "") {
        usuarios[indice] = novoNome;
    }

    let novoTelefone = prompt("Digite o novo telefone:", telefones[indice]);
    if (novoTelefone && novoTelefone.trim() !== "") {
        telefones[indice] = novoTelefone;
    }

    let novoEmail = prompt("Digite o novo e-mail:", emails[indice]);
    if (novoEmail && novoEmail.trim() !== "") {
        emails[indice] = novoEmail;
    }

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("telefones", JSON.stringify(telefones));
    localStorage.setItem("emails", JSON.stringify(emails));
    localStorage.setItem("cursos", JSON.stringify(cursos));

    mostrarLista();
}

document.getElementById("buscar").addEventListener("input", mostrarLista);

mostrarLista();
