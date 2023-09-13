const card = document.querySelectorAll('.card');
let cores = [
    "#3B95FF",
    "#FCBEDD",
    "#8B63FF",
    "#FFC53B"
]
function corAleatoria(){
    return Math.floor(Math.random()*cores.length)
  
}
card.forEach((div)=>{
    let IndexCor = corAleatoria()
    let cor = cores[IndexCor]
    div.style.backgroundColor = cor
})

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



