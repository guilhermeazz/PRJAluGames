let quantidade = 1

function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let imagem = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');
    let nome = game.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Adiciona uma confirmação antes de devolver o jogo
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nome.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
    jogosAlugados(id);
}

function jogosAlugados(id) {
    let game = document.getElementById(`game-${id}`);
    let botao = game.querySelector('.dashboard__item__button');

    if (botao.classList.contains('dashboard__item__button--return')) {
        quantidade = quantidade + 1;
    }else{
        quantidade = quantidade - 1;
    }
    console.log(`${quantidade} jogos alugados`)
}