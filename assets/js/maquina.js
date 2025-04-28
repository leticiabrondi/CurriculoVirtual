const typedTextElement = document.querySelector('.typed-text'); // Seleciona o elemento onde o texto será exibido
const words = ["Desenvolvedora.", "Designer.", "Freelancer."]; // Palavras a serem digitadas
let wordIndex = 0; // Índice das palavras
let charIndex = 0; // Índice das letras dentro da palavra
let isDeleting = false; // Verifica se está apagando
let speed = 150; // Velocidade de digitação
let pauseBetweenWords = 1000; // Pausa de 2 segundos entre as palavras completas

// Função que cria o efeito de digitação
function type() {
    const currentWord = words[wordIndex]; // Pega a palavra atual
    const currentText = currentWord.substring(0, charIndex); // Pega o texto até o índice da letra atual

    typedTextElement.textContent = currentText; // Exibe o texto no elemento

    if (!isDeleting) {
        // Se não estiver apagando, aumenta o índice de letras
        if (charIndex < currentWord.length) {
            charIndex++;
            speed = 150; // Velocidade de digitação
        } else {
            // Se a palavra estiver completa, dá uma pausa antes de começar a apagar
            setTimeout(function () {
                isDeleting = true;
                speed = 100; // Velocidade de apagamento
                type(); // Chama a função novamente para começar a apagar
            }, pauseBetweenWords); // Pausa de 2 segundos
            return; // Evita continuar o loop enquanto espera para apagar
        }
    } else {
        // Se estiver apagando, diminui o índice de letras
        if (charIndex > 0) {
            charIndex--;
            speed = 100; // Velocidade de apagamento
        } else {
            // Se apagou tudo, muda para a próxima palavra
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Passa para a próxima palavra, com loop
            speed = 150; // Velocidade de digitação
        }
    }

    setTimeout(type, speed); // Chama a função novamente com o intervalo de tempo definido
}

// Inicia o efeito de digitação assim que a página carregar
window.onload = type;
