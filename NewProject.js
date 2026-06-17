
let projetos = [];
let materias = [];
let integrantes = [];
let prazos = [];
let statusProjetos = [];

let fotoBase64 = "";

function salvarProjetos(){
    let nome = document.getElementById("projeto");
    let projeto = nome.value;

    let area = document.getElementById("materia");
    let materia = area.value;

    let participante = document.getElementById("integrantes");
    let integrante = participante.value;

    let periodo = document.getElementById("prazo");
    let prazo = periodo.value;

    let fase = document.getElementById("status");
    let status = fase.value;

    if(projeto == ""){
        alert("Digite um nome para o trabalho!");
        return;
    }
    if(materia == ""){
        alert("Digite uma matéria válida!");
        return;
    }
    if(integrante == ""){
        alert("Digite os nomes dos integrantes!");
        return;
    }
    if(prazo == ""){
        alert("Informe o prazo estipulado para entrega!");
        return;
    }
    if(status == ""){
        alert("Escolha um status válido!");
        return;
    }

    projetos.push(projeto);
    localStorage.setItem("projetos", JSON.stringify(projetos));
    nome.value = "";

    materias.push(materia);
    localStorage.setItem("materias", JSON.stringify(materias));
    area.value = "";

    integrantes.push(integrante);
    localStorage.setItem("integrantes", JSON.stringify(integrantes));
    participante.value = "";

    prazos.push(prazo);
    localStorage.setItem("prazos", JSON.stringify(prazos));
    periodo.value = "";

    statusProjetos.push(status);
    localStorage.setItem("statusProjetos", JSON.stringify(statusProjetos));
    fase.value = "";
    
    alert("Projeto salvo com sucesso!");
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("serie").selectedIndex = 0;
    document.getElementById("preview").src = "Avatar2.png";

    mostrarLista();
}