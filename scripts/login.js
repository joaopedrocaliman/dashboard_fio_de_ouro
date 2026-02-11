function entrar() {

        const usuarioCorreto = "admin";
        const senhaCorreta = "1234";

        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;
        const mensagemErro = document.getElementById("mensagem-erro");

        if (usuario === "" || senha === "") {
            mensagemErro.textContent = "Preencha todos os campos!";
            return false;
        }

        if (usuario === usuarioCorreto && senha === senhaCorreta) {
            window.location.href = "index.html";
        } else {
            mensagemErro.textContent = "Usuário ou senha incorretos!";
        }

        return false;
    }