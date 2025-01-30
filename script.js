function openTab(tabName) {
    // Esconde todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove a classe active de todos os botões
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Mostra o conteúdo selecionado
    document.getElementById(tabName).classList.add('active');
    
    // Adiciona a classe active ao botão clicado
    event.currentTarget.classList.add('active');
}

// Simulação de envio do formulário
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    this.reset();
});