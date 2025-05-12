document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalLink = document.getElementById("modal-link");
    const closeBtn = document.querySelector(".close-btn");
  
    const projetos = {
      projeto1: {
        title: "Suave Mente",
        img: "../assets/img/projetos/suavemente.png",
        desc: "Criei esse projeto pra explorar mais minha criatividade e treinar o uso de [ferramenta/linguagem]. A ideia era fazer algo que fosse bonito, funcional e que tivesse a ver com o que tô aprendendo. Usei [tecnologias] e foquei bastante em [interface, responsividade, organização, etc.]. Foi um exercício massa de [ex: colocar em prática tudo que venho estudando] e me fez perceber o quanto evoluí em [área X].",
        link: "https://github.com/leticiabrondi"
      },
      projeto2: {
        title: "Cardfólio",
        img: "../assets/img/projetos/cardfolio.png",
        desc: "Criei esse projeto pra explorar mais minha criatividade e treinar o uso de [ferramenta/linguagem]. A ideia era fazer algo que fosse bonito, funcional e que tivesse a ver com o que tô aprendendo. Usei [tecnologias] e foquei bastante em [interface, responsividade, organização, etc.]. Foi um exercício massa de [ex: colocar em prática tudo que venho estudando] e me fez perceber o quanto evoluí em [área X].",
        link: "https://github.com/leticiabrondi"
      },
      projeto3: {
        title: "READ4YOU.md",
        img: "../assets/img/projetos/read4you.png",
        desc: "Criei esse projeto pra explorar mais minha criatividade e treinar o uso de [ferramenta/linguagem]. A ideia era fazer algo que fosse bonito, funcional e que tivesse a ver com o que tô aprendendo. Usei [tecnologias] e foquei bastante em [interface, responsividade, organização, etc.]. Foi um exercício massa de [ex: colocar em prática tudo que venho estudando] e me fez perceber o quanto evoluí em [área X].",
        link: "https://github.com/leticiabrondi"
      },
      projeto4: {
        title: "Book redesign",
        img: "../assets/img/projetos/redesign.png",
        desc: "Este projeto consiste no redesign da capa do livro O Dragão Vermelho, escrito por Thomas Harris. A tarefa foi realizada como parte das aulas de design do meu curso técnico de multimeios. O objetivo foi criar uma nova abordagem visual para a obra, mantendo a essência do suspense e mistério, mas ao mesmo tempo explorando uma estética mais moderna e impactante. A capa reformulada busca refletir o tom sombrio e psicológico da narrativa, enquanto oferece uma experiência visual que chama a atenção de novos leitores.",
        link: "https://www.behance.net/gallery/218584917/BOOK-REDESIGN-O-dragao-vermelho"
      }
    };
  
    document.querySelectorAll(".btn-projeto[data-id]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const projeto = projetos[id];
  
        modalImg.src = projeto.img;
        modalImg.alt = `Imagem do projeto ${projeto.title}`;
        modalTitle.textContent = projeto.title;
        modalDesc.textContent = projeto.desc;
        modalLink.href = projeto.link;
  
        modal.classList.remove("hidden");
      });
    });
  
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  });
  