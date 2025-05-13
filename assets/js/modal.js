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
        desc: "Criei esse projeto como parte de uma empresa júnior no meu curso técnico de Multimeios, com o objetivo de explorar minha criatividade e desenvolver habilidades técnicas em programação e hospedagem. A ideia era construir uma plataforma socioemocional voltada para alunos do ensino médio, oferecendo apoio e recursos acessíveis para o bem-estar estudantil. Trabalhei diretamente na parte de desenvolvimento, estruturação do site e hospedagem, usando tecnologias como HTML, CSS e JavaScript. Foi um exercício muito rico de colaboração e prática profissional, que me fez perceber o quanto evoluí na construção de soluções digitais com impacto social.",
        link: "https://suavementeco.github.io/suavemente/"
      },
      projeto2: {
        title: "Cardfólio",
        img: "../assets/img/projetos/cardfolio.png",
        desc: "A proposta inicial desse projeto era apenas criar um card interativo como exercício do curso de Front-End da Ford. Mas aproveitei a oportunidade para ir além e desenvolver algo mais pessoal e criativo. Criei um card que apresenta minhas principais habilidades profissionais, como um mini currículo visual. Todo o projeto foi feito com HTML e CSS, respeitando a identidade visual e o design do meu currículo online. Foquei bastante em responsividade, organização visual e consistência estética. Foi um ótimo exercício para reforçar minha criatividade e meu domínio de layout e estilização usando só HTML e CSS.",
        link: "https://leticiabrondi.github.io/Cardfolio/"
      },
      projeto3: {
        title: "READ4YOU.md",
        img: "../assets/img/projetos/read4you.png",
        desc: "Esse é um projeto em desenvolvimento, pensado para unir inteligência artificial e produtividade no GitHub. Criei essa plataforma para automatizar a geração de arquivos README bem estruturados, a partir da leitura dos arquivos exportados de um projeto. Estou utilizando Node.js, Express e integração com APIs de IA, com foco em automação, clareza na apresentação e usabilidade. Está sendo um exercício empolgante de aplicar o que venho estudando sobre back-end e inteligência artificial, e tem ampliado muito minha visão sobre desenvolvimento de ferramentas úteis para a comunidade dev.",
        link: "https://github.com/leticiabrondi"
      },
      projeto4: {
        title: "Book redesign",
        img: "../assets/img/projetos/redesign.png",
        desc: "Esse projeto foi desenvolvido durante as aulas de design no meu curso técnico de Multimeios. A proposta era criar uma nova capa para o livro O Dragão Vermelho, de Thomas Harris, explorando uma abordagem visual mais moderna e impactante, mas sem perder a essência sombria e psicológica da obra. Usei ferramentas de design gráfico como Photoshop e Illustrator, com foco em composição, tipografia e identidade visual. Além de fortalecer meu olhar estético, o projeto também me ajudou a aplicar esse senso visual em interfaces digitais, algo que levo para os meus projetos de programação — principalmente na criação de layouts mais intuitivos, acessíveis e visualmente coerentes com o conteúdo.",
        link: "https://www.behance.net/gallery/218584917/BOOK-REDESIGN-O-dragao-vermelho"
      },
      projeto5: {
        title: "Aurora",
        img: "../assets/img/projetos/aurora.png",
        desc: "Criei esse projeto para explorar a relação entre emoções, cores e sons por meio de uma experiência interativa. A ideia era desenvolver algo sensível, imersivo e criativo, onde o usuário pudesse expressar o que sente e ver isso refletido no ambiente da tela. Usei HTML, CSS e JavaScript para transformar as emoções selecionadas em mudanças visuais e sonoras, criando uma jornada sensorial personalizada. Foi um exercício muito valioso de expressão criativa e também deaprofundamento técnico no uso de interações em tempo real com foco na experiência do usuário e com o uso do JavaScript.",
        link: "https://leticiabrondi.github.io/Aurora/"
      },
      projeto6: {
        title: "Página de login e cadastro",
        img: "../assets/img/projetos/login.png",
        desc: "Desenvolvi essa tela de login e cadastro como um exercício de criação de interfaces funcionais com alternância entre modo claro e escuro. A proposta era entregar uma experiência visual moderna, acessível e com foco na usabilidade. Usei HTML, CSS e JavaScript para estruturar o layout, aplicar estilos dinâmicos e tornar a troca de temas interativa. Foi um bom exercício para treinar lógica com JavaScript, reforçar princípios de responsividade e aplicar boas práticas de design voltadas à experiência do usuário.",
        link: "https://leticiabrondi.github.io/LoginCadastro/"
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
  