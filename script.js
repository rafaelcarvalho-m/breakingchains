document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('login-form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const nome = document.getElementById('usuario').value;
      const email = document.getElementById('email').value;
      const nascimento = document.getElementById('nascimento').value;

      // Salvar os dados no localStorage
      localStorage.setItem('nome', nome);
      localStorage.setItem('email', email);
      localStorage.setItem('nascimento', nascimento);

      // Redirecionar para a página inicial
      window.location.href = 'paginainicial.html';
    });
  }
});