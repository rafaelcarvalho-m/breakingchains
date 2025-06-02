document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const senha = document.getElementById('senha').value;
      const usuario = document.getElementById('usuario').value;
      const nascimento = document.getElementById('nascimento').value;

      console.log("Email:", email);
      console.log("Senha:", senha);
      console.log("Usuário:", usuario);
      console.log("Data de Nascimento:", nascimento);

    });
  });