const inputFoto = document.getElementById("foto");
const preview = document.getElementById("preview");

let usuarios = [];
let telefones = [];
let emails = [];
let cursos = [];
let series = [];

let fotoBase64 = "";

inputFoto.addEventListener("change", function() {

    const arquivo = this.files[0];

    if (!arquivo) return;

    const leitor = new FileReader();

    leitor.onload = function(e) {

        fotoBase64 = e.target.result;

        // Mostra a imagem no círculo
        preview.src = fotoBase64;

    };

    leitor.readAsDataURL(arquivo);

});

function salvarDados(){
    console.log("Botão salvar");
    let nome = document.getElementById("nome");
    let usuario = nome.value;

    let celular = document.getElementById("telefone");
    let telefone = celular.value;

    let gmail = document.getElementById("email");
    let email = gmail.value;

    let cursoTecnico = document.getElementById("curso");
    let curso = cursoTecnico.value;

    let ano = document.getElementById("serie");
    let serie = ano.value;

    if(usuario == ""){
        alert("Digite um nome!");
        return;
    }
    if(telefone == ""){
        alert("Digite um número de telefone!");
        return;
    }
    if(email == ""){
        alert("Digite um email!");
        return;
    }
    if(curso == ""){
        alert("Escolha um dos cursos!");
        return;
    }
    if(serie == ""){
        alert("Escolha uma série válida!");
        return;
    }

    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    nome.value = "";

    telefones.push(telefone);
    localStorage.setItem("telefones", JSON.stringify(telefones));
    celular.value = "";

    emails.push(email);
    localStorage.setItem("emails", JSON.stringify(emails));
    gmail.value = "";

    cursos.push(curso);
    localStorage.setItem("cursos", JSON.stringify(cursos));
    cursoTecnico.value = "";

    series.push(serie);
    localStorage.setItem("series", JSON.stringify(series));
    ano.value = "";
    
    alert("Contato salvo com sucesso!");
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("curso").selectedIndex = 0;
    document.getElementById("serie").selectedIndex = 0;
    document.getElementById("preview").src = "Avatar2.png";

    mostrarLista();
}