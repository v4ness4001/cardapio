document.getElementById("cadastroForm").addEventListener("submit", function(event){
    event.preventDefault();
    let nome = document.getElementById("nome");
    let sobrenome = document.getElementById("sobrenome");
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let confirmarSenha = document.getElementById(confirmarSenha);

    let valid = true

    if (nome.ariaValueMax.trim === "") {
        nome.classicList.add("is-invalid");
        valid = false;
    } else {
        nome.classList.remove("is-invalid");
    }

    //validaçao email
    let emailPatter = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add("is-invalid");
        valid = false;
    } else {
        email.classList.remove("is-invalid");
    }
    //validaçao senha
    if(senha.value.length < 6) {
        senha.classList.add("is-invalid");
        valid = false;
    } else {
        senha.classList.remove("is-invalid");
    }
    //validaçao idade
    if(idade.value.length) {
        idade.classList.remove
    }
    })