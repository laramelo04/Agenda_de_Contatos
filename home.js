window.onload = function () {
    atualizarDashboard();
    carregarAtividades();
    definirSaudacao();
};

function atualizarDashboard() {

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    let series = JSON.parse(localStorage.getItem("series")) || [];
    let emails = JSON.parse(localStorage.getItem("emails")) || [];

    document.getElementById("cardContatos").textContent =
        usuarios.length;

    let cursosUnicos = [...new Set(cursos)];
    document.getElementById("cardCursos").textContent =
        cursosUnicos.length;

    let seriesUnicas = [...new Set(series)];
    document.getElementById("cardSeries").textContent =
        seriesUnicas.length;

    document.getElementById("cardEmails").textContent =
        emails.length;
}

function carregarAtividades() {

    let lista = document.getElementById("atividadesLista");

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    let series = JSON.parse(localStorage.getItem("series")) || [];

    lista.innerHTML = "";

    if (usuarios.length === 0) {

        lista.innerHTML =
            "<li>Nenhum contato cadastrado.</li>";

        return;
    }

    for (let i = usuarios.length - 1; i >= 0; i--) {

        let item = document.createElement("li");

        item.innerHTML =
            `<strong>${usuarios[i]}</strong>
             - ${cursos[i]}
             - ${series[i]}`;

        lista.appendChild(item);
    }
}

function definirSaudacao() {

    let hora = new Date().getHours();
    let saudacao = document.getElementById("saudacao");

    let usuario = JSON.parse(localStorage.getItem("usuario"));

    let nome = usuario ? usuario.nome : "Usuário";

    if (hora < 12) {
        saudacao.innerHTML = `Bom dia, ${nome}! ☀️`;
    }
    else if (hora < 18) {
        saudacao.innerHTML = `Boa tarde, ${nome}! 🌤️`;
    }
    else {
        saudacao.innerHTML = `Boa noite, ${nome}! 🌙`;
    }
}