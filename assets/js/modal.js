document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalLink = document.getElementById("modal-link");
    const closeBtn = document.querySelector(".close-btn");
  
    const projetos = {
      simad: {
        title: "Projeto 1",
        img: "../assets/img/projetos/projeto.png",
        desc: "O SIMAD é um sistema colaborativo para mapeamento de riscos ambientais, desenvolvido com base nos ODS. Ele permite que comunidades compartilhem alertas em tempo real, com integração a sensores e IA para apoio à Defesa Civil.",
        link: "https://github.com/seuusuario/simad"
      },
      read4you: {
        title: "READ4You",
        img: "img/read4you-capa.png",
        desc: "O READ4You analisa arquivos de projetos e gera automaticamente um README.md profissional para o GitHub. Ideal para agilizar a documentação de repositórios.",
        link: "https://github.com/seuusuario/read4you"
      },
      devspace: {
        title: "DevSpace",
        img: "img/devspace-capa.png",
        desc: "DevSpace é uma plataforma de portfólio para devs. Oferece uma interface personalizada, integração com GitHub e layout responsivo para apresentar seus projetos com estilo.",
        link: "https://github.com/seuusuario/devspace"
      },
      climapp: {
        title: "ClimApp",
        img: "img/climapp-capa.png",
        desc: "ClimApp é um app de previsão do tempo com IA e dados meteorológicos em tempo real. Permite alertas personalizados e análises climáticas locais.",
        link: "https://github.com/seuusuario/climapp"
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
  