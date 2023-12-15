const cor = document.querySelector('body');
const btnf = document.querySelector('#face');  /* pegar o botão do face */
const btng = document.querySelector('#git');  /* pegar o botão do github */ 
const btnd = document.querySelector('#twit');  /* pegar o botão do discord */
const btni = document.querySelector('#insta');  /* pegar o botão do instagram */
const btny = document.querySelector('#yt');  /* pegar o botão do youtube */


function mudarCor(op){/*  */
    switch(op){
        case 1: cor.style.background = "darkblue url('zuck.webp') no-repeat top"; break;
        case 2: cor.style.background = "#171515 url('git.jpg') no-repeat top";break;
        case 3: cor.style.background = "#7289da url('netto.jfif') no-repeat top";break;
        case 4: cor.style.background = "orangered url('cr7.webp') no-repeat top";break;
        case 5: cor.style.background = "red url('pewd.jfif') no-repeat top";break;
 // "cor imagem nãoRepetir posicaoTop"   Aqui iremos alterar a cor de fundo e inserir uma imagem
    }
}
function reset(){
    cor.style.background = 'linear-gradient(315deg, #fff, lightblue)';
    // aqui estaremos apagando a imagem da tela e tb, voltando a cor inicial do fundo.
}

btnf.addEventListener('mouseleave', reset);  //retirando o mouse de cima do botão acionará o reset
btnd.addEventListener('mouseleave', reset);
btng.addEventListener('mouseleave', reset);
btni.addEventListener('mouseleave', reset);
btny.addEventListener('mouseleave', reset);

function trocar(){
    window.location.href = "exemplo.html";  //chamada de uma nova página.
}