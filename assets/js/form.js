    const form = document.getElementById('contato-form');
    const sucesso = document.getElementById('mensagem-sucesso');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Pegando campos e mensagens de erro
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');

        const erroNome = document.getElementById('erro-nome');
        const erroEmail = document.getElementById('erro-email');
        const erroMensagem = document.getElementById('erro-mensagem');

        let valido = true;

        // Validação do nome
        if (nome.value.trim() === '') {
            erroNome.textContent = 'Por favor, preencha seu nome.';
            erroNome.style.display = 'block';
            valido = false;
        } else {
            erroNome.style.display = 'none';
        }

        // Validação do email
        if (email.value.trim() === '' || !email.value.includes('@')) {
            erroEmail.textContent = 'Digite um e-mail válido.';
            erroEmail.style.display = 'block';
            valido = false;
        } else {
            erroEmail.style.display = 'none';
        }

        // Validação da mensagem
        if (mensagem.value.trim() === '') {
            erroMensagem.textContent = 'Digite sua mensagem.';
            erroMensagem.style.display = 'block';
            valido = false;
        } else {
            erroMensagem.style.display = 'none';
        }

        // Se tudo estiver válido, mostrar mensagem de sucesso
        if (valido) {
            form.style.display = 'none';
            sucesso.style.display = 'block';
        }
    });
