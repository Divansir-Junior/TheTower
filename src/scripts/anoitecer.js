//Objeto com os dados do anoitecer

var teste = {
    nome : "Traficante de armas",
    locations : ""
}

console.log("Nome:" + teste.nome );

var anoitecer = {
    01: "Traficante de armas: ",
    02: "Lago das sombras",
    03: "Canção de Savathun",
    04: "ACIDENTE DA ÊXODO",
    05: "Pinaculo invertido",
    06: "O Pyramidion",
    07: "ÁRVORE DAS PROBABILIDADES",
    07: "UM PLANETA FÉRTIL"
};


var drops = { 
    0o1 : "Canhão"
}

//Objeto da localização dos planetas 

//Função para mudar o GM semanal 
function chooseGm(gm) {
    Object.keys(anoitecer).forEach(function() {
        console.log("Anoitecer da semana :" + " " +  anoitecer[1]);
        return gm = document.getElementById("gm").textContent = anoitecer[6].toUpperCase();
    })
}

const drops = document.getElementById("drops").textContent = drops[0];
chooseGm();

