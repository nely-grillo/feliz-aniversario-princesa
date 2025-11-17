document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.querySelector('.envelope');
    const cardContainer = document.querySelector('.card-container');

    // Adiciona o evento de clique ao envelope
    envelope.addEventListener('click', () => {
        // Adiciona a classe 'open' ao container, que o CSS vai usar
        cardContainer.classList.add('open');
        
        // Opcional: Tocar uma música curta ou um som de "abrir"
        // Exemplo: new Audio('caminho/para/sua/musica.mp3').play();
    });
});
