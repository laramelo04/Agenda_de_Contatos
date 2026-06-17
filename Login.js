let emailInput = document.getElementById("email");
let senhaInput = document.getElementById("senha");

let btnLogin = document.getElementById("btnLogin");
let btnCadastro = document.getElementById("btnCadastro");
let btnSair = document.getElementById("btnSair");

let menuLogado = document.getElementById("menuLogado");
let menuDeslogado = document.getElementById("menuDeslogado");

function atualizarMenu() {

    let usuarioLogado = localStorage.getItem("usuarioLogado");
    if (usuarioLogado) {
        menuLogado.style.display = "flex";
        menuDeslogado.style.display = "none";
    } else {
        menuLogado.style.display = "none";
        menuDeslogado.style.display = "block";
    }
}

btnCadastro.addEventListener("click", function () {

    let email = emailInput.value;
    let senha = senhaInput.value;
    if (email === "" || senha === "") {

        alert("Preencha todos os campos.");
        return;
    }

    let usuario = { email, senha };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Usuário cadastrado com sucesso!");
});

btnLogin.addEventListener("click", function () {

    let email = emailInput.value;
    let senha = senhaInput.value;

    let usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
    if (!usuarioSalvo) {

        alert("Nenhum usuário cadastrado. Cadastre-se primeiro.");
        return;
    }

    if (email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
        localStorage.setItem("usuarioLogado", "true");
        alert("Login realizado com sucesso!");
        window.location.href = "home.html"
        atualizarMenu();

    } else {
        alert("E-mail ou senha inválidos.");
    }
});

btnSair.addEventListener("click", function () {
    localStorage.removeItem("usuarioLogado");
    atualizarMenu();

    alert("Logout realizado com sucesso.");
});

atualizarMenu();
