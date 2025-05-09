document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalLink = document.getElementById("modal-link");
    const closeBtn = document.querySelector(".close-btn");
  
    const projetos = {
      projeto1: {
        title: "Projeto 1",
        img: "../assets/img/projetos/projeto.png",
        desc: "Criei esse projeto pra explorar mais minha criatividade e treinar o uso de [ferramenta/linguagem]. A ideia era fazer algo que fosse bonito, funcional e que tivesse a ver com o que tô aprendendo. Usei [tecnologias] e foquei bastante em [interface, responsividade, organização, etc.]. Foi um exercício massa de [ex: colocar em prática tudo que venho estudando] e me fez perceber o quanto evoluí em [área X].",
        link: "https://github.com/leticiabrondi"
      },
      projeto2: {
        title: "Projeto 2",
        img: "../assets/img/projetos/projeto.png",
        desc: "Criei esse projeto pra explorar mais minha criatividade e treinar o uso de [ferramenta/linguagem]. A ideia era fazer algo que fosse bonito, funcional e que tivesse a ver com o que tô aprendendo. Usei [tecnologias] e foquei bastante em [interface, responsividade, organização, etc.]. Foi um exercício massa de [ex: colocar em prática tudo que venho estudando] e me fez perceber o quanto evoluí em [área X].",
        link: "https://github.com/leticiabrondi"
      },
      projeto3: {
        title: "Projeto 3",
        img: "../assets/img/projetos/projeto.png",
        desc: "Criei esse projeto pra explorar mais minha criatividade e treinar o uso de [ferramenta/linguagem]. A ideia era fazer algo que fosse bonito, funcional e que tivesse a ver com o que tô aprendendo. Usei [tecnologias] e foquei bastante em [interface, responsividade, organização, etc.]. Foi um exercício massa de [ex: colocar em prática tudo que venho estudando] e me fez perceber o quanto evoluí em [área X].",
        link: "https://github.com/leticiabrondi"
      },
      projeto4: {
        title: "Projeto 4",
        img: "../assets/img/projetos/projeto.png",
        desc: "Criei esse projeto pra explorar mais minha criatividade e treinar o uso de [ferramenta/linguagem]. A ideia era fazer algo que fosse bonito, funcional e que tivesse a ver com o que tô aprendendo. Usei [tecnologias] e foquei bastante em [interface, responsividade, organização, etc.]. Foi um exercício massa de [ex: colocar em prática tudo que venho estudando] e me fez perceber o quanto evoluí em [área X].",
        link: "https://github.com/leticiabrondi"
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
  