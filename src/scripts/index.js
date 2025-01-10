

//Função para mudar o tema do site
function changeTheme() {
    let body = document.body;
    let header = document.querySelector('header');
    let ul = document.querySelector('ul');
    let image = document.getElementById('iconTheme');
    let text = document.getElementById('showing');
    document.getElementById('btnTheme').addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        header.classList.toggle('dark-theme');
        ul.classList.toggle('dark-theme');
        image.classList.toggle('dark-theme');
        text.classList.toggle('dark-theme');
    });
}


//Função para escrever do site
function writing() {
    const palavras = document.getElementById("words").innerText;
    const contrario = palavras; // Mantemos o texto original
    let escrevendo = document.getElementById("showing");
    let index = 0; // Inicia o índice para a escrita
    let isWriting = true; // Controla o fluxo
    // Função que simula a digitação e apagamento
    const intervalo = setInterval(() => {
        if (isWriting) {
            escrevendo.innerText = contrario.slice(0, index); 
            index++; 

            // Quando terminar de escrever o texto, começa a apagar
            if (index > contrario.length) {
                isWriting = false; 
            }
        } else {
            // Apagando as letras
            escrevendo.innerText = contrario.slice(0, index); 
            index--; // Diminui o índice para apagar a letra

            // Quando o texto for apagado, reinicia o processo
            if (index <= 0) {
                isWriting = true; 
                index = 0; 
            }
        }
    }, 300); // A cada 300ms uma letra é exibida ou apagada
}

//Voltar ao topo do site
function Top () {
    window.scrollTo({
        top: 0,
        
        behavior: "smooth",
    });
}

//Ir até a seção 
function goTo() {
   // Pegando todos os links de navegação 
const elements = document.querySelectorAll("ul li");
// Pegando o elemento com id "assaults"
const target = document.getElementById("assaults");
// Atribuindo o valor de "data-target" do elemento #assaults
const value = target.getAttribute("data-target");
const targetValues = ["1", "2", "3"];  

elements.forEach((element, index) => {
    element.addEventListener("click", () => {
        // Verificando se o índice é 0 e o valor do data-target está na lista de valores
        if (index === 0 && targetValues.includes(value)) {
            // Rola até o elemento #assaults
            target.scrollIntoView({ behavior: 'smooth' });
        }
        if (index === 1 && targetValues.includes(value)) { 
            target.scrollIntoView({behavior:"smooth"})
        }
    });
});

console.log("Lista LI: ", elements);  //Debug
}


function redirect (name, page) {
    window.location.hre
}

//Menu mobile 
function openMenu() {
    document.getElementById("menu").addEventListener("click", () => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("menuMobile");
        // Adiciona o conteúdo à nova div
        newDiv.innerHTML = "<h1>ASSALTOS</h1>   <h1>TEMPORADAS </h1> <h1>EXPANSÕES</h1>  <h1>CLASSES</h1> ";
        // Cria o botão de fechar
        const buttonClose = document.createElement("button");
        //Estilização do botão de fechar
        buttonClose.style.backgroundColor = "rgba(22, 70, 102, 0.7)";
        buttonClose.style.border = "3px solid #FFFF";
        buttonClose.style.borderRadius = "35%";
        buttonClose.classList.add("close-button"); 
        buttonClose.innerText = "x";
        
        newDiv.appendChild(buttonClose);
        document.body.appendChild(newDiv);
        //Impede a rolagem 
        const body = document.body;
        body.style.overflow = "hidden";
        //Botão de fechar o menu
        buttonClose.addEventListener("click", function() {
            newDiv.style.display = "none";
            document.body.removeChild(newDiv);
        });
    });
}

writing();
openMenu();
goTo();
changeTheme();