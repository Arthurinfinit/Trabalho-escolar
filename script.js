const botoes1 = document.querySelectorAll(".botoes1 .botao");
const textos1 = document.querySelectorAll(".abas-textos1 .aba-conteudo");

for (let i = 0; i < botoes1.length; i++) {
    botoes1[i].onclick = function () {
        for (let j = 0; j < botoes1.length; j++) {
            botoes1[j].classList.remove("ativo");
            textos1[j].classList.remove("ativo");
        }
        botoes1[i].classList.add("ativo");
        textos1[i].classList.add("ativo");
    }
}

const botoes2 = document.querySelectorAll(".botoes2 .botao");
const textos2 = document.querySelectorAll(".abas-textos2 .aba-conteudo");

for (let i = 0; i < botoes2.length; i++) {
    botoes2[i].onclick = function () {
        for (let j = 0; j < botoes2.length; j++) {
            botoes2[j].classList.remove("ativo");
            textos2[j].classList.remove("ativo");
        }
        botoes2[i].classList.add("ativo");
        textos2[i].classList.add("ativo");
    }
}''

// Seleciona todos os elementos com a classe "card"
const cards = document.querySelectorAll('.card');

// Adiciona um evento de clique para cada card
cards.forEach(card => {
    card.addEventListener('click', function () {
        // Ao clicar, adiciona ou remove a classe "flip" para virar o card
        card.querySelector('.card-inner').classList.toggle('flip');
    });
});
