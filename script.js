window.sr = ScrollReveal({reset:true}); /* Resetando qualquer revelaçãoa anterior */

sr.reveal('.coluna-foto', {duration: 3000});

document.querySelectorAll('.faq-pergunta').forEach(botao => {
    botao.addEventListener('click', () => {
        const item = botao.parentElement;
        item.classList.toggle('ativo'); // Liga/desliga o efeito de abrir
    });
});

