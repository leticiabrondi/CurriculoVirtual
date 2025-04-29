// assets/js/include.js
function includeHTML() {
    document.querySelectorAll('[data-include]').forEach(async (el) => {
      const file = el.getAttribute('data-include');
      try {
        const response = await fetch(file);
        const content = await response.text();
        el.innerHTML = content;
      } catch (err) {
        el.innerHTML = "<p>Erro ao carregar o componente.</p>";
        console.error(err);
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", includeHTML);
  