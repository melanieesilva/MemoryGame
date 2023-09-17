const secaoCartas = document.querySelector("article")
const tempo = document.getElementById('cronometro')
const jogador = document.getElementById('jogador-vez')
let primeiraCarta = ''
let segundaCarta = ''

const imagensCarta = [
    "cool-guy",
    "girl-artist",
    "girl-crown",
    "girl-hat",
    "girl-headphone",
    "guy-playing",
    "serious-girl",
    "guy-robot",
    "guy-diving",
    "memory-icon"
];
const coresCartas = [
    "#3B95FF",
    "#FCBEDD",
    "#8B63FF",
    "#FFC53B"
]

function encontrarFim(){
    const cartasDesativadas = document.querySelectorAll('.carta-desativada');

    setTimeout(() => {
        if (cartasDesativadas.length === 20) {
            alert("Parabéns")
        }
    },600);
}

function encontrarPar(){
    const primeiraImagem = primeiraCarta.getAttribute('data-imagem')
    const segundaImagem = segundaCarta.getAttribute('data-imagem')

    if(primeiraImagem === segundaImagem){
        primeiraCarta.firstChild.classList.add('carta-desativada')
        segundaCarta.firstChild.classList.add('carta-desativada')

        primeiraCarta = ''
        segundaCarta = ''
        
        encontrarFim()
        
    }else{
        setTimeout(()=>{
            primeiraCarta.classList.remove('flip')
            segundaCarta.classList.remove('flip')
            primeiraCarta = ''
            segundaCarta = ''
        },400)
    }

}

function virarCarta({ target }){

    if(target.className.includes('flip')) return;

    if(primeiraCarta === ''){
        target.classList.add('flip');
        primeiraCarta = target;
    }else if(segundaCarta === ''){
        target.classList.add('flip');
        segundaCarta = target;

        encontrarPar()
    }
    
}

function criarElemento(tag, className){
    const elemento = document.createElement(tag);
    elemento.className = className;
    return elemento;
}

function criarCarta(imagem){
    const cartaNova = criarElemento('div','carta');
    const imagemCarta = criarElemento('div','frente-carta')

    imagemCarta.style.backgroundImage = `url('/img/${imagem}.png')`
    const IndexRandom = () => {return Math.floor(Math.random()*coresCartas.length)}
    imagemCarta.style.backgroundColor = coresCartas[IndexRandom()]

    cartaNova.appendChild(imagemCarta)
    cartaNova.addEventListener('click',virarCarta)
    cartaNova.setAttribute('data-imagem',imagem)

    return cartaNova;
}

function CarregarJogo() {
    const parImagens = [ ...imagensCarta,...imagensCarta]

    const parAleatorio = parImagens.sort(() => Math.random() - 0.5)

    parAleatorio.forEach((imagem)=>{
        const cartaNova = criarCarta(imagem)
        secaoCartas.appendChild(cartaNova)
    })

    jogador.innerHTML = localStorage.getItem('Nome Jogador 1')
}

window.onload = CarregarJogo();

