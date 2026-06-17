document.addEventListener("DOMContentLoaded", () => {

    const listaContatos = JSON.parse(localStorage.getItem("contatos")) || [];


    const cardContatos = document.getElementById("cardContatos");
    const cardCursos = document.getElementById("cardCursos");
    const cardSeries = document.getElementById("cardSeries");
    const cardEmails = document.getElementById("cardEmails");
    const listaAtividades = document.getElementById("atividadesLista");

    const totalContatos = listaContatos.length;
    
    const cursosUnicos = new Set();
    const seriesUnicas = new Set();
    let totalEmails = 0;

    listaContatos.forEach(contato => {
        if (contato.curso && contato.curso !== "Selecione um curso" && contato.curso !== "Todos os cursos") {
            cursosUnicos.add(contato.curso);
        }
        if (contato.serie && contato.serie !== "Selecione uma série") {
            seriesUnicas.add(contato.serie);
        }
        if (contato.email) {
            totalEmails++;
        }
    });


    if (cardContatos) cardContatos.textContent = totalContatos;
    if (cardCursos) cardCursos.textContent = cursosUnicos.size;
    if (cardSeries) cardSeries.textContent = seriesUnicas.size;
    if (cardEmails) cardEmails.textContent = totalEmails;


    if (listaAtividades) {
        listaAtividades.innerHTML = ""; 
        let atividades = [];

        listaContatos.slice(-3).reverse().forEach(contato => {
            atividades.push(`👤 Novo contato cadastrado: <strong>${contato.nome}</strong> (${contato.curso})`);
        });

        if (atividades.length === 0) {
            atividades.push("✨ Nenhuma atividade recente encontrada. Comece a cadastrar contatos!");
        }

        atividades.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = item;
            listaAtividades.appendChild(li);
        });
    }
});