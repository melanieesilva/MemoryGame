//quero colocar na cor da div uma cor aleatória de acordo com as cores em um vetor
// vetor de cores: #02010 #020202 #090392 #0493043
// tenho um vetor de 4 cores e vou fazer uma função que seleciona números aleatórios entre 0 e 4,
//para corresponder a posição do vetor

// cor da div = cor aleatória
//cor aleatória vai receber o conteúdo de uma posição aleatória do vetor

const card = document.querySelectorAll('.card');

let cores = [
    "#3B95FF",
    "#FCBEDD",
    "#8B63FF",
    "#FFC53B"
]

// (()=>{
//     card.forEach(carta =>
//         {
//             let pos = Math.floor(Math.random()*5)
//             card.style.color = cores[pos]
//         });
// })();


console.log(cores[0])


