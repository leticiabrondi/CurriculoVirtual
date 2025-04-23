// Definir o texto que será digitado
const textArray = ["Desenvolvedora.", "Freelancer.", "Designer."];
let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typingSpeed = 80; // Velocidade para digitar
const deletingSpeed = 40; // Velocidade para apagar

// Função para começar a digitação e apagamento das palavras
function typeAndDelete() {
    // Se estiver digitando
    if (!isDeleting) {
        currentText = textArray[textIndex].substring(0, charIndex++);
        document.querySelector(".typed-text").textContent = currentText;
        
        if (charIndex === textArray[textIndex].length) {
            // Quando terminar de digitar a palavra, esperar um tempo e começar a apagar
            isDeleting = true;
            setTimeout(typeAndDelete, 2000);
        } else {
            setTimeout(typeAndDelete, typingSpeed);
        }
    } else { 
        // Se estiver apagando
        currentText = textArray[textIndex].substring(0, charIndex--);
        document.querySelector(".typed-text").textContent = currentText;

        if (charIndex === 0) {
            // Quando terminar de apagar, passar para a próxima palavra
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length; // Avançar para a próxima palavra (ou voltar para a primeira)
            setTimeout(typeAndDelete, 500); // Esperar um pouco antes de começar a digitar novamente
        } else {
            setTimeout(typeAndDelete, deletingSpeed);
        }
    }
}

// Iniciar o processo de digitação
typeAndDelete();
