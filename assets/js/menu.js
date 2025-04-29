// Função para abrir e fechar o menu lateral
function toggleMenu() {
    var menu = document.getElementById("menuLateral");
    // Verifica a largura do menu e alterna entre 0 (fechado) e 250px (aberto)
    if (menu.style.width === "250px") {
        menu.style.width = "0"; // Fecha o menu
    } else {
        menu.style.width = "250px"; // Abre o menu
    }
}

// Função para fechar o menu ao clicar fora do menu (área externa)
window.onclick = function(event) {
    var menu = document.getElementById("menuLateral");
    // Verifica se o clique foi fora do menu lateral e do botão de hambúrguer
    if (!menu.contains(event.target) && !event.target.matches('.hamburger')) {
        menu.style.width = "0"; // Fecha o menu
    }
}
