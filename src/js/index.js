/* OBEJETIVO - QUANDO CLICAR NO BOTAO APARECER 
A IMAGEM DE FUNDO CORRESPONDENETE .

1-DAR UM JEITO DE PEGAR O ELEMENTE EM HTML DOS BOTOES
2-IDENTIFICAR O CLIQUE DOS BOTOES 
3-DESMARCAR O BOTAO SELECIONADO
4-MARCAR O BOTAO SELECIONADO 
5-ESCONDE A IMAGEM ANTERIOR
6-FAZER APARECER A IMAGEM CORRESPONDENTE AO BOTAO CLICADO
*/
        // 1- pegars os botoes HTML
        const botoesCarrosssel = window.document.querySelectorAll('.botao');
        const imgs = window.document.querySelectorAll('.imagem')

        // 2- identificar os clicks
        botoesCarrosssel.forEach((botao, indice) => {
        botao.addEventListener('click',() => {
        
        // 3-DESMARCAR O BOTAO SELECIONADO
        const botaoselecionado = window.document.querySelector('.selecionado');
        botaoselecionado.classList.remove('selecionado');

        // 4-MARCAR O BOTAO SELECIONADO 
        botao.classList.add('selecionado');

        // 5-ESCONDE A IMAGEM ANTERIOR
        const img = window.document.querySelector('.ativa');
        img.classList.remove('ativa');

        // 6-FAZER APARECER A IMAGEM CORRESPONDENTE AO BOTAO CLICADO
        imgs[indice].classList.add('ativa');
    })
})
