function mostrarLista() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let telefones = JSON.parse(localStorage.getItem("telefones")) || [];
    let emails = JSON.parse(localStorage.getItem("emails")) || [];
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    let fotos = JSON.parse(localStorage.getItem("fotos")) || [];

    let tabela = document.getElementById("tabela");

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
        tabela.innerHTML += `
            <tr>
                <td>
                    <img src="${fotos[i] || 'Avatar2.png'}"
                         width="50" height="50">
                </td>
                <td>${usuarios[i]}</td>
                <td>${cursos[i]}</td>
                <td>${telefones[i]}</td>
                <td>${emails[i]}</td>
                <td>
                    <button onclick="editarContato(${i})">
                        Editar
                    </button>

                    <button onclick="excluirContato(${i})">
                        Excluir
                    </button>
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
    let series = JSON.parse(localStorage.getItem("series")) || [];

    usuarios.splice(indice, 1);
    telefones.splice(indice, 1);
    emails.splice(indice, 1);
    cursos.splice(indice, 1);
    series.splice(indice, 1);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    localStorage.setItem("telefones", JSON.stringify(telefones));
    localStorage.setItem("emails", JSON.stringify(emails));
    localStorage.setItem("cursos", JSON.stringify(cursos));
    localStorage.setItem("series", JSON.stringify(series));

    mostrarLista();
}

function editarContato(indice) {

    localStorage.setItem("editarIndice", indice);

    window.location.href = "cadastro.html";
}

window.onload = mostrarLista;