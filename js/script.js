<<<<<<< Updated upstream
const card = document.querySelectorAll('.card');
let cores = [
    "#3B95FF",
    "#FCBEDD",
    "#8B63FF",
    "#FFC53B"
=======
const cartas = document.querySelectorAll('.card')
const coresCartas = ["#3B95FF","#FCBEDD","#8B63FF","#FFC53B"]
const heroCards = document.getElementById('hero-cartas')
const imagensCards = [
    "cool-guy",
    "girl-artist",
    "girl-crown",
    "girl-hat",
    "girl-headphone",
    "guy-playing",
    "serious-girl",
    "guy-robot",
    "guy-diving"
>>>>>>> Stashed changes
]
function corAleatoria(){
    return Math.floor(Math.random()*cores.length)
  
}
card.forEach((div)=>{
    let IndexCor = corAleatoria()
    let cor = cores[IndexCor]
    div.style.backgroundColor = cor
})

<<<<<<< Updated upstream
try {
    document.body.onload = AddCards()

function AddCards() {
    const divExist = document.querySelectorAll("hero-cards")

    let cardNovo = document.createElement("div")
    cardNovo.className = "card";

    let conteudoCard = document.createElement("img")
    conteudoCard.

    cardNovo.appendChild(conteudoCard)

    divExist.appendChild(cardNovo)
}
console.log("OK")
} catch (error) {
    
}


=======

function criar(){
    let card = null;
    for (let index = 0; index < imagensCards.length; index++) {
        // const imgIndex = imagensCards[index];
        card = document.createElement('div', { class: 'card', id: 'card_hero' }, 'OLÁ');
    
    }
    return card;

}

let card1 = criar();

heroCards.appendChild(card1)

function corAleatoria(){
    return Math.floor(Math.random()*coresCartas.length)
}

cartas.forEach((div) => {
    const corAleatoriaIndex = corAleatoria()
    const corDiv = coresCartas[corAleatoriaIndex]
    div.style.backgroundColor = corDiv
})

function virarCarta(){
    this.classList.add('flip')
}



cartas.forEach(carta => carta.addEventListener('click',virarCarta))



>>>>>>> Stashed changes

