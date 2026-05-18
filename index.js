// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    const secoes = document.querySelectorAll("section, footer");
    const linksNav = document.querySelectorAll("nav ul li a");

    // Função dinamicamente ativa links com base no scroll da página
    window.addEventListener("scroll", () => {
        let atual = "";

        secoes.forEach((secao) => {
            const secaoTop = secao.offsetTop;
            const secaoHeight = secao.clientHeight;
            
            // Verifica se o scroll está dentro dos limites da seção atual
            if (window.scrollY >= (secaoTop - secaoHeight / 3)) {
                atual = secao.getAttribute("id");
            }
        });

        // Aplica a classe visual 'ativo' no link correto do menu
        linksNav.forEach((link) => {
            link.classList.remove("ativo");
            if (link.getAttribute("href").includes(atual)) {
                link.classList.add("ativo");
            }
        });
    });
});