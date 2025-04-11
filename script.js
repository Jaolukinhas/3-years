//scripts

const botao = document.getElementById("botaoamor");
const efeito = document.getElementById("efeitocoracoes");

botao.addEventListener("click", () => {
    //cria varios corações
    for (let i = 0; i < 30; i++) {
        criarcoracao();
    }

    //depois de 3 segundos, vai pra proxima parte
    setTimeout(() => {
        document.getElementById("inicio").style.display = "none";
        // aqui entraria a parte 2 
    }, 3000);
});

function criarcoracao() {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.animationDuration = Math.randon() * 2 + 3 + "s"; // entre 3-5s

    coracao.innerText = "💜";
    efeito.appendChild(coracao);

    //remove o coração apos ele sumir
    setTimeout(() => {
        coracao.remove();
    }, 5000);
}
